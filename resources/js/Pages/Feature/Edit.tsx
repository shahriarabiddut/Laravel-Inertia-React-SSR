import FeatureItem from "@/Components/FeatureItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature, PaginatedData } from "@/types";
import { Head } from "@inertiajs/react";

export default function Edit({
  features,
}: {
  features: PaginatedData<Feature>;
}) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Features
        </h2>
      }
    >
      <Head title="Features" />

      <div className="grid grid-cols-1 gap-3 justify-center items-center">
        {features.data.map((feature) => (
          <FeatureItem feature={feature} />
        ))}
      </div>
    </AuthenticatedLayout>
  );
}
