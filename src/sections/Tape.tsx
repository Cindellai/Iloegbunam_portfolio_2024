import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Innovative",
  "Responsive",
  "Dynamic",
  "User-Centric",
  "Efficient",
  "Scalable",
  "Interactive",
  "Optimized",
  "Engaging",
  "Intuitive",
  "Secure",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-pink-300 to-pink-600 overflow-x-clip -rotate-3 -mx-1">
        <div className='flex [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]'>
          <div className="flex flex-none gap-4 pr-4 py-3 -translate-x-1/2 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idk) => (
              <Fragment key={idk}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-800 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-yellow-300/90 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
