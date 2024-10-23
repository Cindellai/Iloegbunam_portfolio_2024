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
    left: '5%',
    top: '5%',
  },
  {
    title: "Traveling",
    emoji: '🗺️',
    left: '38%',
    top: '5%',
    },
  {
    title: "Playing video games",
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: "Blender3D",
    emoji: '🎨',
    left: '45%',
    top: '40%',
    },
  {
    title: "Photography",
    emoji: '📸',
    left: '70%',
    top: '45%',
    },

  {
    title: "Weight-lifting",
    emoji: '🏋️‍♂️',
    left: '5%',
    top: '65%',
  },
  {
    title: "Music",
    emoji: '🎵',
    left: '45%',
    top: '70%',
    },

  {
    title: "Cooking",
    emoji: '🍳',
    left: '70%',
    top: '2%',
  }
    ];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
      />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
          <CardHeader title="My Reads" description="Take a look at my current faves" />
          <div className="w-40 mx-auto mt-2 md:mt-0">
            <Image src={bookImage} alt="Book cover" />
          </div>
        </Card>
        
      
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft digital experiences"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems items={toolboxItems} className="mt-6" 
            itemsWrapperClassName="-translate-x-1/2" />
          </Card>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader title="Beyond the Code" description="Explore my interests and hobbies outside the digital realm" className="px-6 py-6" />
          <div className="relative flex-1">
            {hobbies.map((hobby) => (
              <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-pink-600 to-pink-300 rounded-full py-1.5 absolute" style={{ left: hobby.left, top: hobby.top, }}>
                <span className="font-medium text-gray-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
                </div>
            ))}
          </div>
        </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" 
              className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-orange-300 to-pink-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={smileMemoji} alt="smiling" className="size-20" />
              </div>
        </Card>
      </div>
      </div>
    </div>
    </div>

  );
};
