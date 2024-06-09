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
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
