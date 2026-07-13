import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:py-32 lg:px-8">
      <p className="text-base font-semibold text-orange">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-navy/70">
        Sorry, we could not find the page you are looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-navy px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy transition-all duration-200"
        >
          Go back home
        </Link>
        <Link
          href="/contact"
          className="text-sm font-semibold text-navy hover:text-navy-light transition-all duration-200"
        >
          Contact Support <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
