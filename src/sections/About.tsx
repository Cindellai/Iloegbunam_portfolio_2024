import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I a, what I do, and what inspires me" />
    <div>
      <Card>
        <div>
          <StarIcon />
        </div>
      </Card>
    </div>
    </div>
  );
};
