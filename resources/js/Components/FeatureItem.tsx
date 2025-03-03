import { Feature } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import FeatureActionsDropDown from "./FeatureActionsDropDown";
import FeatureVote from "./FeatureVote";
import { can } from "@/helpers";

export default function FeatureItem({ feature }: { feature: Feature }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleToReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const user = usePage().props.auth.user;
  const btnCss = `inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300 my-3`;
  return (
    <div className="flex flex-1 bg-white border-gray-200 w-full rounded-2xl shadow-lg p-5 border gap-4 lg:gap-10">
      <div className="flex flex-col gap-3 justify-between items-center">
        <FeatureVote key={feature.id} feature={feature} />
      </div>
      <div className="overflow-hidden w-full">
        <div className="mb-4 flex justify-between">
          <Link href={route("feature.show", feature)}>
            <h3 className="text-lg font-bold text-blue-600 ">{feature.name}</h3>
          </Link>
          {
            can(user,'manage_features') && (
          <div>
            <FeatureActionsDropDown key={feature.id} feature={feature} />
          </div>)}
        </div>
        <div className="text-sm text-gray-500">
          <p>
            <span className="font-semibold">User:</span> {feature.user.email}
          </p>
          <p>
            <span className="font-semibold">Created At:</span>{" "}
            {feature.created_at}
          </p>
        </div>
        {(feature.description || "").length > 150 && (
          <>
            <p className="text-gray-700 mb-4">
              {isExpanded
                ? feature.description
                : `${(feature.description || "").slice(0, 150)}....`}
            </p>

            <button
              onClick={toggleToReadMore}
              className="cursor-pointer bg-slate-500 p-2 text-white rounded-3xl"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </>
        )}
        {/* <div className="my-2">
          <Link href={route("feature.show", feature)} className={btnCss}>
            Comments
          </Link>
        </div> */}
      </div>
    </div>
  );
}
