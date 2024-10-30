"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import songImage from "@/assets/images/song.jpeg";
import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import mapImage from "@/assets/images/map.jpg";
import smileMemoji from "@/assets/images/me.png"
import { ToolboxItems } from "@/components/ToolboxItems";
import {motion} from 'framer-motion';
import { use, useRef } from "react";


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
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
        className="text-2xl md:text-3xl lg:text-3xl" 
      />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[380px] md:col-span-2 lg:col-span-1">
          <CardHeader title="Records 💽" description="Listen to my current fave" className="flex "/>
          <div className="w-65 mx-auto mt-2 md:mt-0">
            <Image src={songImage} alt="Song cover" />
          </div>
        </Card>
        
      
        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft digital experiences"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:20s]" />
          </Card>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader title="Beyond the Code" description="Explore my interests and hobbies outside the digital realm" className="px-6 py-6" />
          <div className="relative flex-1" ref = 
          {constraintRef}>
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full py-1.5 absolute" style={{ left: hobby.left, top: hobby.top, }}
                 drag
                 dragConstraints={constraintRef}>
                <span className="font-medium text-gray-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
                </motion.div>
            ))}
          </div>
        </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" 
              className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-orange-300 to-pink-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 -z-10"></div>"
              <Image src={smileMemoji} alt="smiling" className="size-13 translate-x-.9 -translate-y-9" />
              </div>
        </Card>
      </div>
      </div>
    </div>
    </div>

  );
};
