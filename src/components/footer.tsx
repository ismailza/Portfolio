import Link from "next/link";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer
      className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-900">
      <p className="text-xs text-gray-500 dark:text-gray-400">© {year} Ismail ZAHIR. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="https://linkedin.com/in/ismailzahir01" target="_blank">
          Linkedin
        </Link>
        <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="https://github.com/ismailza" target="_blank">
          Github
        </Link>
        <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="https://instagram.com/ismailzahir01" target="_blank">
          Instagram
        </Link>
        <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="https://facebook.com/ismailzahir01" target="_blank">
          Facebook
        </Link>
        <Link className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="https://x.com/ismailzahir01" target="_blank">
          Twitter
        </Link>
      </nav>
    </footer>
  )
}

export default Footer;