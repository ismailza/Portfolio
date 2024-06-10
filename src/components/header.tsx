import Link from "next/link";
import React, { useState } from "react";

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-900">
      <Link className="flex items-center justify-center" href="/">
        <img
          alt="Ismail ZAHIR"
          src="/signature.svg"
        />
        <span className="sr-only">Ismail ZAHIR's Portfolio</span>
      </Link>
      <div className="ml-auto flex items-center">
        <button className="rounded-full lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav
          className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center gap-6 transition-transform duration-300 ${
            menuOpen ? "translate-y-0 bg-white dark:bg-gray-900" : "-translate-y-full"
          } lg:static lg:translate-y-0 lg:flex lg:flex-row lg:gap-4 sm:gap-6`}
        >
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
                href="#"
                onClick={() => {
                  scrollToSection("about");
                  setMenuOpen(false);
                }}
          >
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
                href="#"
                onClick={() => {
                  scrollToSection("skills");
                  setMenuOpen(false);
                }}
          >
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
                href="#"
                onClick={() => {
                  scrollToSection("featured-projects");
                  setMenuOpen(false);
                }}
          >
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
                href="#"
                onClick={() => {
                  scrollToSection("experiences");
                  setMenuOpen(false);
                }}
          >
            Experiences
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
                href="#"
                onClick={() => {
                  scrollToSection("education");
                  setMenuOpen(false);
                }}
          >
            Education
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
                href="#"
                onClick={() => {
                  scrollToSection("contact");
                  setMenuOpen(false);
                }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;