import { Feature } from "@/types";
import TextAreaInput from "./TextAreaInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import PrimaryButton from "./PrimaryButton";
import { Transition } from "@headlessui/react";

export default function NewCommentForm({ feature }: { feature: Feature }) {
  const { data, setData, processing, post, recentlySuccessful } = useForm({
    comment: "",
  });

  const createComment: FormEventHandler = (e) => {
    e.preventDefault();
    post(route("comments.store", feature), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        setData("comment", "");
      },
    });
  };

  return (
    <form
      onSubmit={createComment}
      className="bg-white shadow-md rounded-xl p-6 my-4"
    >
      <div className="flex gap-4 items-start">
        {/* User Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <TextAreaInput
            id="comment"
            className="mt-1 block w-full"
            rows={2}
            value={data.comment}
            onChange={(e) => setData("comment", e.target.value)}
            required
            isFocused
            autoComplete="comment"
          />
        </div>

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Add Comment</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">✅</p>
          </Transition>
        </div>
      </div>
    </form>
  );
}
