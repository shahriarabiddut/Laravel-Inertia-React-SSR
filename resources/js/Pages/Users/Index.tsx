import FakeToast from "@/Components/FakeToast";
import { can } from "@/helpers";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Index({
  auth,
  users,
}: PageProps<{
  users: User[];
}>) {
  const btnCss = `inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300 my-3`;

  const form = useForm();
  const handleDelete = (user: User): void => {
    if (!user) return;
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      form.delete(route("user.destroy", user.id), {
        preserveScroll: true,
      });
    }
  };
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Users
        </h2>
      }
    >
      <Head title="Users" />
      <FakeToast />
      {can(auth.user, "manage_users") && (
        <Link href={route("user.create")} className={btnCss}>
          Create New User
        </Link>
      )}

      <table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Registered</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {users.map((user, index) => (
            <tr
              key={index}
              className="even:bg-gray-100 hover:bg-gray-50 transition-colors"
            >
              <td className="px-4 py-2 border">
                <Link href={route("user.show", user.id)}>{user.name}</Link>
              </td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.roles}</td>
              <td className="px-4 py-2 border">
                {new Date(user.created_at).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 border text-center">
                <Link
                  href={route("user.edit", user.id)}
                  className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={(e) => handleDelete(user)}
                  className="px-3 py-1 ml-2 text-white bg-red-500 hover:bg-red-600 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AuthenticatedLayout>
  );
}
