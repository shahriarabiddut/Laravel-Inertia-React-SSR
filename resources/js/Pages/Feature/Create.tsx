import FeatureItem from "@/Components/FeatureItem";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature, PaginatedData } from "@/types";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Create({
  features,
}: {
  features: PaginatedData<Feature>;
}) {
  const { data, setData, processing, errors, post, recentlySuccessful } =
    useForm({
      name: "",
      description: "",
    });

  const createFeature: FormEventHandler = (e): void => {
    e.preventDefault();

    post(route("feature.store"), {
      preserveScroll: true,
    });
  };
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Create New Feature
        </h2>
      }
    >
      <Head title="Create New Feature" />

      <div className="grid grid-cols-1 gap-3 justify-center items-center">
        <form onSubmit={createFeature} className="mt-6 space-y-8">
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
            <InputLabel htmlFor="description" value="Description" />
            <TextAreaInput
              id="description"
              className="mt-1 block w-full"
              value={data.description}
              onChange={(e) => setData("description", e.target.value)}
              required
              isFocused
              autoComplete="description"
            />
            <InputError className="mt-2" message={errors.name} />
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
