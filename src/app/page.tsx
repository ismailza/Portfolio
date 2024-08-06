'use client';
import Link from "next/link";
import Skill from "@/components/skill";
import {useEffect, useState} from "react";
import Project from "@/components/project";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import scrollToSection from "@/lib/utils-functions";
import {ProjectProps} from "@/lib/project-data";

export default function Home() {

  /**
   * Download the resume file
   */
  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1L2SHgV1EQXCQPu1oXEy_Vm50QAEucas0/view?usp=drive_link", "_blank")
  }

  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [experiences, setExperiences] = useState([])
  const [educations, setEducations] = useState([])

  /**
   * Load all data when the component is mounted
   */
  const loadData = async () => {
    try {
      // Load skills
      const skills = await require("./data/skills.json")
      setSkills(skills)
      // Load projects
      const projects = await require("./data/projects.json")
      setProjects(projects.filter((project: { featured: boolean; }) => project.featured))
      // Load experiences
      const experiences = await require("./data/experiences.json")
      setExperiences(experiences)
      // Load educations
      const educations = await require("./data/educations.json")
      setEducations(educations)
    } catch (error) {
      console.log("Error loading data...! ", error)
    }
  }

  useEffect(() => {
    // Load skills when the component is mounted
    loadData().then();

    // Load LinkedIn badge
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-white dark:bg-gray-900">
        {/* Hero */}
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                  Hi, I'm Ismail ZAHIR
                </h1>
                <h2 className="text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300">
                  Software Engineer
                </h2>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                  Join me in creating exceptional software experiences and embracing the potential of technology.
                </p>
                <div className="mt-6 space-x-4 flex justify-start">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    onClick={() => downloadResume()}
                  >
                    Resume
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <img
                  alt="Ismail ZAHIR"
                  className="rounded-full"
                  height="300"
                  src="/profile.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3
                className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-gray-900 dark:text-gray-200 text-center">
                Find me on
              </h3>
              <div className="flex justify-center space-x-4">
                <Link href={"https://github.com/ismailza"} target={"_blank"} title={"GitHub"}>
                  <img src={"/logos/github.gif"} alt={"GitHub"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://linkedin.com/in/ismailzahir01"} target={"_blank"} title={"LinkedIN"}>
                  <img src={"/logos/linkedin.gif"} alt={"LinkedIn"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://instagram.com/ismailzahir01"} target={"_blank"} title={"Instagram"}>
                  <img src={"/logos/instagram.gif"} alt={"Instagram"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://facebook.com/ismailzahir01"} target={"_blank"} title={"Facebook"}>
                  <img src={"/logos/facebook.gif"} alt={"Facebook"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://x.com/ismailzahir01"} target={"_blank"} title={"X"}>
                  <img src={"/logos/x.png"} alt={"X"} width={"32px"} height={"32px"}/>
                </Link>
                <Link href={"https://youtube.com/ismailzahir01"} target={"_blank"} title={"YouTube"}>
                  <img src={"/logos/youtube.gif"} alt={"YouTube"} width={"32px"} height={"32px"}/>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="w-full py-12 md:py-24 lg:py-24" id="about">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
                  About me
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
                  As a dedicated and motivated Software Engineering and Computer Systems Integration student, I am
                  passionate about utilizing my technical knowledge and problem-solving skills to develop innovative
                  software solutions. With a solid foundation in software engineering principles and hands-on
                  experience in various programming languages and technologies, I am eager to contribute to a dynamic
                  and collaborative team.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
                  Building a successful product is a challenge. I am highly energetic in user experience design,
                  interfaces and web development.
                </p>
                <div className="flex flex-wrap gap-4">
                  {/*  */}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="badge-base LI-profile-badge"
                     data-locale="en_US"
                     data-size="large"
                     data-theme="dark"
                     datatype="HORIZONTAL"
                     data-vanity="ismailzahir01"
                     data-version="v1">
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="skills">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                  Skills
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  My technical skills and areas of expertise.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-1 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                {!skills || skills.length === 0 ? (
                  <img
                    src={'/loader.svg'}
                    alt={"loading"}
                    className={"mx-auto"}
                  />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {skills.map((skill: { name: string, icon: string }, index) => {
                      return (
                        <Skill key={index} name={skill.name} icon={skill.icon}/>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="featured-projects">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                  Featured Projects
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Take a look at some of my recent projects.
                </p>
              </div>
            </div>
            {!projects || projects.length === 0 ? (
              <img
                src={'/loader.svg'}
                alt={"loading"}
                className={"mx-auto"}
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
                {projects.map((project: ProjectProps, index) => (
                  <Project key={index} title={project.title} excerpt={project.excerpt} image={project.image}
                           tags={project.tags} slug={project.slug}/>
                ))}
              </div>
            )}
            <div className="flex justify-end mt-8">
              <Link href="/projects"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                View All Projects &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section className="w-full py-12 md:py-24 lg:py-24" id="experiences">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                  Experiences
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  My professional journey and work experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-1 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                {!experiences || experiences.length === 0 ? (
                  <img
                    src={'/loader.svg'}
                    alt={"loading"}
                    className={"mx-auto"}
                  />
                ) : (
                  <div className="grid gap-8">
                    {experiences.map((experience: {
                      title: string,
                      company: string,
                      location: string,
                      startedAt: string,
                      endedAt: string,
                      type: string,
                      skills: [],
                      description: string
                    }, index) => (
                      <Experience key={index} title={experience.title} company={experience.company}
                                  location={experience.location}
                                  startedAt={experience.startedAt} endedAt={experience.endedAt} type={experience.type}
                                  skills={experience.skills}>
                        {experience.description}
                      </Experience>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="w-full py-12 md:py-24 lg:py-24" id="education">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-100">
                  Education
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  My academic background and qualifications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                {!educations || educations.length === 0 ? (
                  <img
                    src={'/loader.svg'}
                    alt={"loading"}
                    className={"mx-auto"}
                  />
                ) : (
                  <div className="grid gap-8">
                    {educations.map((education: {
                      title: string,
                      type: string,
                      university: string,
                      city: string,
                      startedAt: string,
                      endedAt: string
                    }, index) => (
                      <Education key={index} title={education.title} type={education.type}
                                 university={education.university}
                                 city={education.city} startedAt={education.startedAt} endedAt={education.endedAt}/>
                    ))}
                  </div>
                )}
              </div>
              <img
                alt="Ismail ZAHIR"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                src="/illustrations/illustration-education-concept.png"
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="contact">
          <Contact/>
        </section>

      </main>
    </div>
  );
}
