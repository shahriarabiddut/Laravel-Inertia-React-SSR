import FakeToast from "@/Components/FakeToast";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PasswordInput from "@/Components/PasswordInput";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Roles } from "@/types";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Create({
  roles,
  roleLabels,
}: {
  roles: Roles;
  roleLabels: Record<string, string>;
}) {
  const { data, setData, processing, errors, post, recentlySuccessful } =
    useForm({
      name: "",
      email: "",
      password: "",
      roles: [],
    });

  const createUser: FormEventHandler = (e): void => {
    e.preventDefault();

    post(route("user.store"), {
      preserveScroll: true,
    });
  };
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Add New User
        </h2>
      }
    >
      <Head title="Add New User" />
      <FakeToast />
      <div className="grid grid-cols-1 gap-3 justify-center items-center">
        <form onSubmit={createUser} className="mt-6 space-y-8">
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
          <div>
            <InputLabel htmlFor="email" value="Email" />
            <TextInput
              id="email"
              className="mt-1 block w-full"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              required
              type="email"
              autoComplete="email"
            />
            <InputError className="mt-2" message={errors.email} />
          </div>
          <div>
            <InputLabel htmlFor="password" value="Password" />
            <PasswordInput
              className="mt-1 block w-full"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              error={errors.password}
            />
          </div>
          {/* Role */}
          <div>
            <InputLabel htmlFor="roles" value="Role" />
            {roles.map((role) => (
              <div className="mt-4 block" key={role.name}>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="roles"
                    value={role.name}
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
            <PrimaryButton disabled={processing}>Save</PrimaryButton>

            <Transition
              show={recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
            </Transition>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
