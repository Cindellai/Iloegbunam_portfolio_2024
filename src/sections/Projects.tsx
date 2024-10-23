import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Discovery Partners Institute",
    year: "Summer 2024",
    title: "FairTrade",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Northwestern Security & AI Lab",
    year: "March 2024 - June 2024",
    title: "RepairMate",
    results: [
      { title: "Developed a diagnostic tool for vehicles using React and JavaScript" },
      { title: "Enabled OBD device interfacing for repair recommendations" },
      { title: "Conducted end-to-end testing to ensure application robustness" },
    ],
    link: "https://youtu.be/YOUR_REPAIRMATE_LINK", // Replace with the actual link
    image: darkSaasLandingPage, // Replace with the actual image variable
  },
  {
    company: "PIMCO",
    year: "Summer 2023",
    title: "Managed Account Application",
    results: [
      { title: "Replaced existing client experience with real-time insights" },
      { title: "Improved client onboarding and report generation" },
      { title: "Enhanced system integration for stakeholders" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "PIMCO",
    year: "Summer 2022",
    title: "Cross-Platform GUI Tool",
    results: [
      { title: "Automated routine support tasks, reducing resolution time by 50%" },
      { title: "Improved diagnostic capabilities for helpdesk team" },
      { title: "Enhanced cross-platform compatibility" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-pink-300 to-orange-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          Discover how I turn ideas into captivating digital experiences that resonate with users.
        </p>

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-4 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 20}px)`, // Corrected this line
              }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-pink-300 to-orange-400  items-center gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span> &bull; </span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif  text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 px-6 w-full md:w-auto rounded-xl inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Repo</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a> 
              </div>

                <div className="relative"> 
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
