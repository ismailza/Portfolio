'use client';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    window.open("/resume.pdf", "_blank")
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header scrollToSection={scrollToSection}/>
      <main className="flex-1 bg-white dark:bg-gray-900">
        {/* Hero */}
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">Hi, I'm Ismail
                  ZAHIR</h1>
                <h2 className="text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-300">
                  Software Engineer
                </h2>
                <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                  Join me in creating exceptional software experiences and embracing the potential of technology.
                </p>
                <div className="mt-6 space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    onClick={() => downloadResume()}
                  >
                    Resume
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
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
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-gray-900 dark:text-gray-200 text-center">
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
                  <img src={"/logos/X.png"} alt={"X"} width={"32px"} height={"32px"}/>
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
              <img
                alt="Ismail ZAHIR"
                className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full lg:order-last"
                height="310"
                src="/illustrations/cloud-storage-blue.svg"
                width="550"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
