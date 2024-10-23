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
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png"
import { ToolboxItems } from "@/components/ToolboxItems"; // or the correct path


const toolboxItems = [
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "CSS3",
    icon: CssIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: '📖',
  },
  {
    title: "Traveling",
    emoji: '🗺️',
    },
  {
    title: "Playing video games",
    emoji: '🎮',
  },
  {
    title: "Blender3D",
    emoji: '🎨',
    },
  {
    title: "Photography",
    emoji: '📸',
    },

  {
    title: "Weight-lifting",
    emoji: '🏋️‍♂️',
  },
  {
    title: "Music",
    emoji: '🎵',
    },

  {
    title: "Cooking",
    emoji: '🍳',
  }
    ];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
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
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft digital experiences"
            />
            <ToolboxItems items={toolboxItems} />
            <ToolboxItems items={toolboxItems} />
          </Card>

        <Card>
            <CardHeader title="Beyond the Code" description="Explore my interests and hobbies outside the digital realm" />
          <div>
            {hobbies.map((hobby) => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
                </div>
            ))}
          </div>
        </Card>
        <Card>
              <Image src={mapImage} alt="map" />
              <Image src={smileMemoji} alt="smiling" />
        </Card>
      </div>
    </div>
    </div>

  );
};
