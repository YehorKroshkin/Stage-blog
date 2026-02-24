"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@/hooks/useTimeOnPage"; // импорт функции для GA

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-5 py-2 rounded-full transition ${
      pathname === path
        ? "bg-white text-black"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <header className="w-full py-6 flex justify-center">
      <nav className="flex gap-4 bg-bla/80 backdrop-blur px-6 py-3 rounded-full shadow-md">

        <Link
          href="/blog"
          className={linkClass("/blog")}
          onClick={() =>
            sendGAEvent("click_nav", { category: "Navigation", label: "/blog" })
          }
        >
          Blog
        </Link>

        <Link
          href="/"
          className={linkClass("/")}
          onClick={() =>
            sendGAEvent("click_nav", { category: "Navigation", label: "/" })
          }
        >
          Main
        </Link>

        <Link
          href="/over"
          className={linkClass("/over")}
          onClick={() =>
            sendGAEvent("click_nav", { category: "Navigation", label: "/over" })
          }
        >
          Over mij
        </Link>
      </nav>
    </header>
  );
}