import FeatureItem from "@/Components/FeatureItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature, PaginatedData } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({ feature }: { feature: Feature }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Feature <b>{feature.name}</b>
        </h2>
      }
    >
      <Head title={`Feature ${feature.name}`} />

      <div className="grid grid-cols-1 gap-3 justify-center items-center">
        <div className="flex flex-1">
          <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white p-5 border border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-blue-600 ">
                {feature.name}
              </h3>
            </div>
            <div className="text-sm text-gray-500">
              <p>
                <span className="font-semibold">User:</span>{" "}
                {feature.user.email}
              </p>
              <p>
                <span className="font-semibold">Created At:</span>{" "}
                {feature.created_at}
              </p>
            </div>
            <p className="text-gray-700 mb-4">{feature.description}</p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
