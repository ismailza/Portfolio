import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 sm:px-6 md:px-8 lg:px-10 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="text-6xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">404</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400">Oops, the page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}