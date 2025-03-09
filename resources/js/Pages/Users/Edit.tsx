import FakeToast from "@/Components/FakeToast";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Radio from "@/Components/Radio";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Edit({
  roles,
  user,
  roleLabels,
}: {
  roles: any;
  user: User;
  roleLabels: Record<string, string>;
}) {
  const { data, setData, processing, errors, put, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
      roles: user.roles,
    });

  const editUser: FormEventHandler = (e): void => {
    e.preventDefault();

    // alert("dd");
    put(route("user.update", user.id), {
      preserveScroll: true,
    });
  };
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl leading-tight text-gray-800 dark:text-gray-200">
          Edit User : <b>"{user.name}"</b>
        </h2>
      }
    >
      <Head title={`Edit User ${user.name}`} />
      <FakeToast />

      <div className="grid grid-cols-1 gap-3 justify-center items-center">
        <form onSubmit={editUser} className="mt-6 space-y-8">
          <div>
            <InputLabel htmlFor="name" value="Name" />
            <TextInput
              id="name"
              className="mt-1 block w-full"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              required
              isFocused
              autoComplete="name"
            />
            <InputError className="mt-2" message={errors.name} />
          </div>
          {/* Email */}
          <div>
            <InputLabel htmlFor="email" value="Name" />
            <TextInput
              id="email"
              disabled
              className="mt-1 block w-full"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              required
              isFocused
              autoComplete="email"
            />
            <InputError className="mt-2" message={errors.email} />
          </div>
          {/* Role */}
          <div>
            <InputLabel htmlFor="roles" value="Role" />
            {roles.map((role: any) => (
              <div className="mt-4 block" key={role.name}>
                <label className="flex items-center">
                  <Radio
                    name="roles"
                    value={role.name}
                    checked={data.roles.includes(role.name)}
                    onChange={(e) => setData("roles", [e.target.value])}
                  />
                  <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                    {roleLabels[role.name]}
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <PrimaryButton disabled={processing}>Update</PrimaryButton>

            <Transition
              show={recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Saved....
              </p>
            </Transition>
          </div>
          {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
          {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
