'use client';
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header scrollToSection={scrollToSection}/>
      <main className="flex-1 bg-white dark:bg-gray-900">

      </main>
      <Footer />
    </div>
);
}
