export const SectionHeader = ({
  title,
  eyebrow,
  description,
  className, // Add className as an optional parameter
}: {
  title: string;
  eyebrow: string;
  description: string;
  className?: string; // Mark className as optional
}) => {
  return (
    <>
      <div className={`flex justify-center ${className}`}> {/* Apply className here */}
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-pink-300 to-orange-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif font-semibold text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
