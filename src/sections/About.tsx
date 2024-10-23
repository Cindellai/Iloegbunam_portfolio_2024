import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { TechIcon } from "@/components/TechIcon";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "HTML",
    icon: HTMLIcon,
  },
  {
    title: "CSS",
    icon: CssIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Chrome DevTools",
    icon: ChromeIcon,
  },
  {
    title: "Git",
    icon: GithubIcon,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
      />
      <div className="mt-20">
        <Card className="h-[320px]">
          <CardHeader title="My Reads" description="Take a look at my current faves" />
          <div className="w-40 mx-auto mt-8">
            <Image src={bookImage} alt="Book cover" />
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3> My Toolbox</h3>
            <p> Explore the technologies and tools I use to craft digital experiences</p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title} className="flex items-center">
                <TechIcon component={item.icon} />
                <span className="ml-2">{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
