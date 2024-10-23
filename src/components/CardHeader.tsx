import StarIcon from "@/assets/icons/star.svg";

export const CardHeader = ({ title, description, className }: {
    title: string;
    description: string;
    className?: string;
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="inline-flex items-center gap-2">
                {/* Ensure SVG styling is applied properly */}
                <StarIcon width={24} height={24} fill="currentColor" className="text-pink-300" />
                <h3 className="font-serif text-3xl">{title}</h3>
            </div>
            <p className="text-sm text-white/60 my-2">{description}</p>
        </div>
    );
};
