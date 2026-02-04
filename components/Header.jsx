"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `px-5 py-2 rounded-full transition ${
      pathname === path
        ? "bg-white text-black"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <header className="w-full py-6 flex justify-center">
      <nav className="flex gap-4 bg-bla/80 backdrop-blur px-6 py-3 rounded-full shadow-md">

        <Link href="/blog" className={linkClass("/blog")}>
          Blog
        </Link>

        <Link href="/" className={linkClass("/")}>
          Main
        </Link>

        <Link href="/over" className={linkClass("/over")}>
          Extra
        </Link>
      </nav>
    </header>
  );
}
