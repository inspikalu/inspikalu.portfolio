import Image from "next/image";
import { FolderIcon, ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

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

export default function Projects() {
  return (
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
  );
}
