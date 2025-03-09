import CommentItem from "@/Components/CommentItem";
import FeatureVote from "@/Components/FeatureVote";
import NewCommentForm from "@/Components/NewCommentForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Feature } from "@/types";
import { Head } from "@inertiajs/react";

export default function Show({ feature }: { feature: Feature }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Feature <b>{feature.name}</b>
        </h2>
      }
    >
      <Head title={`Feature ${feature.name}`} />

      <div className="flex flex-1 bg-white border-gray-200 w-full rounded-2xl shadow-lg p-5 border gap-4 lg:gap-10">
        <div className="flex flex-col gap-3 justify-between items-center">
          <FeatureVote key={feature.id} feature={feature} />
        </div>
        <div className="flex flex-1">
          <div className="w-full">
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
      <div className="my-5 p-5 bg-gray-200 border-gray-200 w-full rounded-2xl shadow-lg border gap-4">
        <h2 className="text-2xl font-semibold">
          {feature.comments.length > 0 ? "Comments" : "No Comments Found"}
        </h2>

        <div>
          {feature.comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
        <div>
          <NewCommentForm feature={feature} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
