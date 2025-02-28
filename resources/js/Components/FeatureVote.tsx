import { Feature } from "@/types";
import { useForm } from "@inertiajs/react";

export default function FeatureVote({ feature }: { feature: Feature }) {
  const upvoteForm = useForm({
    feature_id: feature.id,
    upvote: true,
  });
  const downvoteForm = useForm({
    feature_id: feature.id,
    upvote: false,
  });
  const upvoteDownvote = (upvote: boolean): void => {
    if (
      (feature.user_has_upvoted && upvote) ||
      (feature.user_has_downvoted && !upvote)
    ) {
      upvoteForm.delete(route("upvote.destroy", feature.id), {
        preserveScroll: true,
      });
    } else {
      let form = null;
      if (upvote) {
        form = upvoteForm;
      } else {
        form = downvoteForm;
      }
      form.post(route("feature.vote", feature.id), {
        preserveScroll: true,
      });
    }
  };
  return (
    <>
      <div>
        <button
          className={feature.user_has_upvoted ? "text-amber-600" : "text-black"}
          onClick={() => upvoteDownvote(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={`text-2xl font-semibold ${
          feature.user_has_upvoted || feature.user_has_downvoted
            ? " text-amber-600"
            : ""
        } `}
      >
        {feature.upvoteCount}
      </div>
      <div>
        <button
          className={
            feature.user_has_downvoted ? "text-amber-600" : "text-black"
          }
          onClick={() => upvoteDownvote(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
