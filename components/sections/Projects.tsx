import Image from "next/image";
import { FolderIcon, ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import axios from "axios"
import { basePath } from "@/app/types/constants";
import { useEffect, useState } from "react";
import { Project } from "@/app/types/interfaces";
import { useQuery } from "@tanstack/react-query"
import Line from "../ui/Line";


const getProjects = async () => {
  try {
    const response = await axios.get(`${basePath}/projects?populate=*`)
    return response.data.data
  } catch (error) {

  }
}

export default function Projects() {
  const query = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects
  })
  console.log("Query: ", query)

  const projects = query.data as unknown as Project[]

  return (
    <>
      {
        (projects && projects.length > 0) && (<><section>
          <h2 className="text-3xl font-bold mb-3">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-secondary overflow-hidden shadow-md">
                <Image
                  src={project.image.url}
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
        </>
        )
      }
    </>
  );
}
