import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { Head } from "@inertiajs/react";

export default function Show({
  user,
  roleLabels,
}: {
  user: User;
  roleLabels: Record<string, string>;
}) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          <b>{user.name}</b>'s Details
        </h2>
      }
    >
      <Head title={`${user.name}'s Details`} />

      <div className="flex justify-center p-4">
        <div className="max-w-md w-full bg-white border-gray-200 rounded-2xl shadow-lg p-6 border">
          <h3 className="text-2xl font-semibold text-gray-800">{user.name}</h3>

          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <b>Name:</b> {user.name}
            </p>
            <p className="text-sm text-gray-600">
              <b>Email:</b> {user.email}
            </p>
            <p className="text-sm text-gray-600">
              <b>Roles:</b> {roleLabels[user.roles[0]]}
            </p>
            {/*<p className="text-sm text-gray-600 ">
              <b>Permissions:</b> {user.permissions.join(" , ")}
            </p> */}
            <p className="text-sm text-gray-600">
              <b>Created At:</b> {new Date(user.created_at).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
