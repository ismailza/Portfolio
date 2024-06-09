'use client';
import Header from "@/components/header";

export default function Home() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header scrollToSection={scrollToSection} />
    </div>
  );
}
