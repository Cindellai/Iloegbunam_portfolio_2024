import StarIcon from "@/assets/icons/star.svg";

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
      <div className="bg-gradient-to-r from-orange-300 to-pink-400 overflow-x-clip -rotate-3 -mx-1">
        <div className='flex [mask-iamge:lienar-gradient(to_right, transparent,black_10%,black_90%,transparent)]'>
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className='text-gray-800/70 uppercase font-extrabold text-sm'>{word}</span>
                <StarIcon className="size-6 text-yellow-300/90 -rotate-12" />
                </div>
            ))}
        </div>
      </div>
      </div>
      </div>
  );
};
