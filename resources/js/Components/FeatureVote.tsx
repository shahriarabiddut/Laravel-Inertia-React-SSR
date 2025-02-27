import { Feature } from "@/types";

export default function FeatureVote({ feature }: { feature: Feature }) {
  return (
    <>
      <div>
        <button
          className={feature.user_has_upvoted ? "text-amber-600" : "text-black"}
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
