"use client";
import Image from "next/image";
import {
  Brain,
  Code2,
  Terminal,
  FolderIcon,
  ArrowUpRightFromSquare,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const skillsTabs = [
  {
    title: "Expertise",
    icon: <Brain className="w-4 h-4" />,
    skills: [
      { text: "User Experience", icon: <Brain className="w-4 h-4" /> },
      { text: "User Interface", icon: <Brain className="w-4 h-4" /> },
      { text: "Project Management", icon: <Brain className="w-4 h-4" /> },
    ],
  },
  {
    title: "Software",
    icon: <Code2 className="w-4 h-4" />,
    skills: [
      { text: "Figma", icon: <Brain className="w-4 h-4" /> },
      { text: "Arch Linux", icon: <Brain className="w-4 h-4" /> },
      { text: "NeoVim", icon: <Brain className="w-4 h-4" /> },
    ],
  },
  {
    title: "Language",
    icon: <Terminal className="w-4 h-4" />,
    skills: [
      { text: "TypeScript", icon: <Brain className="w-4 h-4" /> },
      { text: "Rust", icon: <Brain className="w-4 h-4" /> },
      { text: "JavaScript", icon: <Brain className="w-4 h-4" /> },
      { text: "HTML and CSS", icon: <Brain className="w-4 h-4" /> },
    ],
  },
];

const workExperience = [
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    duration: "Jan 2020 - Dec 2021",
    description:
      "Developed and maintained web applications using React and Redux. Collaborated with designers to create user-friendly interfaces.",
  },
  {
    company: "Innovative Apps LLC",
    role: "Fullstack Developer",
    duration: "Jan 2022 - Present",
    description:
      "Worked on both frontend and backend development using Next.js and Node.js. Implemented RESTful APIs and integrated third-party services.",
  },
  {
    company: "Creative Minds Studio",
    role: "UI/UX Designer",
    duration: "Jun 2018 - Dec 2019",
    description:
      "Designed user interfaces and experiences for mobile and web applications. Conducted user research and usability testing.",
  },
];

const projects = [
  {
    name: "E-Commerce Platform",
    image: "/images/ecommerce.jpg",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS",
    liveUrl: "https://ecommerce-example.com",
    githubUrl: "https://github.com/username/ecommerce",
    isPrivate: false,
  },
  {
    name: "Task Management App",
    image: "/images/taskmanager.jpg",
    description: "A collaborative task management tool with real-time updates",
    liveUrl: "https://taskmanager-example.com",
    githubUrl: "https://github.com/username/taskmanager",
    isPrivate: true,
  },
  {
    name: "Weather Dashboard",
    image: "/images/weather.jpg",
    description: "Real-time weather tracking application using OpenWeather API",
    liveUrl: "https://weather-example.com",
    githubUrl: "https://github.com/username/weather",
    isPrivate: false,
  },
  {
    name: "Portfolio Website",
    image: "/images/portfolio.jpg",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS",
    liveUrl: "https://portfolio-example.com",
    githubUrl: "https://github.com/username/portfolio",
    isPrivate: false,
  },
];

function Line() {
  return <div className="h-px bg-gray-600 w-full my-8"></div>;
}

export default function Home() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="min-h-screen w-[90%] bg-background mx-auto md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] p-4 mt-2">
      <section className="grid grid-cols-2 gap-x-7 h-full">
        <h1 className="col-span-2 text-4xl font-bold mb-6">
          Okereke Clement Kalu
        </h1>

        <div className="h-full flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">
            Fullstack Developer (Frontend Heavy)
          </h2>
          <p className="mb-4">
            I am a fullstack developer with a frontend heavy focus. I have
            experience with React, Next.js, and Tailwind CSS. I am also
            proficient in TypeScript and Rust.
          </p>
          <p>
            I'm Passionate about building software that is both functional and
            visually appealing. I am also interested in learning new concepts in
            software development generally
          </p>
        </div>

        <div className="h-full relative flex items-center">
          <div className="aspect-square w-full relative">
            <Image
              src={"/inspikalu.jpg"}
              alt="Okereke Clement Kalu"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <Line />
      <section className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-3xl font-bold"> 3+</span>
          <span className="text-textSecondary text-sm">
            Years of experience
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold"> 15+</span>
          <span className="text-textSecondary text-sm">Projects Completed</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold"> 15+</span>
          <span className="text-textSecondary text-sm">Satisfied Clients</span>
        </div>
      </section>
      <Line />
      <section>
        <h2 className="text-3xl font-bold mb-3">Skills</h2>
        <section>
          <div className="flex items-start justify-start gap-4 text-textSecondary border-b border-b-gray-600 pb-2">
            {skillsTabs.map((tab, index) => {
              return (
                <div
                  className={`flex items-center gap-1 relative cursor-pointer select-none ${
                    activeTabIndex === index && "text-textPrimary font-medium"
                  }`}
                  key={index}
                  onClick={() => setActiveTabIndex(index)}
                >
                  {tab.icon}
                  {tab.title}
                  {activeTabIndex === index && (
                    <div className="absolute w-full h-[2px] bg-textPrimary -bottom-[9px]"></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-4 my-3">
            {skillsTabs[activeTabIndex].skills.map((skill, index) => {
              return (
                <div
                  className="flex items-center gap-1 bg-secondary p-3"
                  key={index}
                >
                  {skill.icon} {skill.text}
                </div>
              );
            })}
          </div>
        </section>
      </section>
      <Line />
      <section>
        <h2 className="text-3xl font-bold mb-3">Work Experience</h2>
        <p>I have had the priviledge of working with the follwing companies</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {workExperience.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col bg-secondary p-4 shadow-md"
            >
              <h3 className="text-xl font-semibold">{experience.company}</h3>
              <p className="text-textSecondary">{experience.role}</p>
              <p className="text-textSecondary">{experience.duration}</p>
              <hr className="text-textSecondary opacity-45 my-2" />
              <p className="text-textSecondary">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Line />
      <section>
        <h2 className="text-3xl font-bold mb-3">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FolderIcon className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                </div>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex justify-center gap-1"
                  >
                    Live Site <ArrowUpRightFromSquare className="w-3 h-3" />
                  </Link>
                  {!project.isPrivate && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex  justify-center gap-1"
                    >
                      GitHub <ArrowUpRightFromSquare className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Line />
      <section>
        <h2 className="text-3xl font-bold mb-3">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            {
              icon: <Phone className="w-5 h-5" />,
              url: "tel:+2341234567890",
              text: "+234 123 456 7890",
            },
            {
              icon: <Globe className="w-5 h-5" />,
              url: "https://inspikalu.com",
              text: "https://inspikalu.com",
            },
            {
              icon: <Mail className="w-5 h-5" />,
              url: "mailto:inspikalu@gmail.com",
              text: "inspikalu@gmail.com",
            },
          ].map((contact, index) => {
            return (
              <Link
                href={contact.url}
                key={index}
                className="flex items-center gap-3 w-full border-2 border-gray-600 p-2"
              >
                {contact.icon}
                {contact.text}
              </Link>
            );
          })}
        </div>
      </section>
      <Line />
      <section className="w-full bg-secondary p-3">
        <h3 className="flex items-center justify-start gap-2 text-textPrimary">
          <Globe /> <span>Socials</span>
        </h3>
        <div className="flex items-center mt-2 text-textSecondary text-sm">
          <Link
            href="https://X.com/inspikalu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1 border-r px-2"
          >
            Twitter
          </Link>
          <Link
            href="https://instagram.com/inspikalu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1 border-r px-2"
          >
            Instagram
          </Link>
          <Link
            href="https://linkedin.com/in/inspikalu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-1 px-2"
          >
            LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
}
