import {getAllProjects, ProjectProps} from "@/lib/project-data";
import Project from "@/components/project";

export default async function Projects() {

  const projects = await getAllProjects();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-white dark:bg-gray-900">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="featured-projects">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                  Projects
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Take a look at some of my recent projects.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
              {projects.map((project: ProjectProps, index) => (
                <Project key={index} title={project.title} excerpt={project.excerpt} image={project.image}
                         tags={project.tags} slug={project.slug}/>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}