import FakeToast from "@/Components/FakeToast";
import FeatureItem from "@/Components/FeatureItem";
import { can } from "@/helpers";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature, PageProps, PaginatedData } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Index({
  auth,features,
}: PageProps<{
  features: PaginatedData<Feature>;
}>) {
  const btnCss = `inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300 my-3`;
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Features
        </h2>
      }
    >
      <Head title="Features" />
      <FakeToast />
      {can(auth.user,"manage_features") && (
      <Link href={route("feature.create")} className={btnCss}>
        Create New Feature
      </Link>)}

      <div className="grid grid-cols-1 gap-3 justify-center items-center">
        {features.data.map((feature) => (
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </AuthenticatedLayout>
  );
}
