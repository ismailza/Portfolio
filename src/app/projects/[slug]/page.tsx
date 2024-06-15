import { getProjectBySlug } from "@/lib/project-data";
import Link from "next/link";
import {CalendarIcon, TagIcon, UserIcon} from "lucide-react";
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";

export default async function ProjectDetails({ params }: { params: { slug: string } }) {

  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      notFound: true
    };
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-white dark:bg-gray-900">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">{project.title}</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {project.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  <CalendarIcon className="mr-2 h-4 w-4"/>
                  <span>
                    {new Date(project.timeline.end).getFullYear()}
                  </span>
                </div>
                <div className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  <TagIcon className="mr-2 h-4 w-4"/>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <img
                src={project.image}
                width="550"
                height="310"
                alt="Project Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {project.demo &&
                  <Link
                    href={project.demo}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Live Demo
                  </Link>
                }
                {project.github &&
                  <Link
                    href={project.github}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Code on GitHub
                  </Link>
                }
                {project.release &&
                  <Link
                    href={project.release}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Latest Release
                  </Link>
                }
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Overview</h2>
                <p
                  className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {project.overview}
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Details</h2>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</div>
                    <div className="text-base">{project.technologies.join(', ')}</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Timeline</div>
                    <div className="text-base">{project.timeline.start} - {project.timeline.end}</div>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Team</div>
                    <ul className="text-base space-y-2">
                    {project.team.map((member) => (
                      <li key={member.name} className={'flex flex-col'}>
                        <span className={'flex space-x-4'}>
                          <UserIcon /> {member.name}
                          <span className={'flex space-x-2'}>
                            {member.linkedin && <a href={member.linkedin} target={'_blank'}><LinkedInLogoIcon/></a>}
                            {member.github && <a href={member.github} target={'_blank'}><GitHubLogoIcon/></a>}
                          </span>
                        </span>
                        {member.role && <span className={'text-sm text-gray-500 dark:text-gray-400 ml-2'}>{member.role}</span>}
                      </li>
                    ))
                    }
                    </ul>
                  </div>
                  <div className="grid gap-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Features</div>
                    <ul className="text-base space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature}>- {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
);
}