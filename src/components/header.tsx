import Link from "next/link";
import React from "react";

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({scrollToSection}) => {

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-900">
      <Link className="flex items-center justify-center" href="">
        <img
          alt="Ismail ZAHIR"
          src="/signature.svg"
        />
        <span className="sr-only">Ismail ZAHIR's Portfolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#"
              onClick={() => scrollToSection("about")}
        >
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#"
              onClick={() => scrollToSection("skills")}
        >
          Skills
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#"
              onClick={() => scrollToSection("featured-projects")}
        >
          Work
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#"
              onClick={() => scrollToSection("experiences")}
        >
          Experiences
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#"
              onClick={() => scrollToSection("education")}
        >
          Education
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#"
              onClick={() => scrollToSection("contact")}
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header;