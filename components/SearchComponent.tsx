"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PostCard from "./PostCardComponent";
import { Post } from "@/types";
import { testPosts } from "@/data";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") ?? "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setSearch(query);
  }, [query]);

  // категории (уникальные)
  const categories = [
    "all",
    ...Array.from(new Set(testPosts.map(post => post.category))),
  ];

  // Фильтруем и сразу сортируем
const filteredPosts = testPosts
  .filter(post => {
    const matchesSearch = post.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || post.category === category;

    return matchesSearch && matchesCategory;
  })
  .sort((a, b) => {
    const dateA = a.date instanceof Date ? a.date.getTime() : new Date(a.date).getTime();
    const dateB = b.date instanceof Date ? b.date.getTime() : new Date(b.date).getTime();
    return dateB - dateA; // новые сверху
  });


  return (
    <>
      {/* Поиск + фильтр */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Zoek een post..."
          className="
            w-full md:max-w-md
            px-3 py-2 text-black
            border border-stone-300
            rounded-md
            focus:outline-none focus:ring-1 focus:ring-stone-300
          "
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="
            w-full md:w-64
            px-3 py-2 text-black
            border border-stone-300
            rounded-md
            focus:outline-none focus:ring-1 focus:ring-stone-300
          "
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === "all" ? "Alle categorieën" : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Результаты */}
      <section className="max-w-7xl mx-auto p-6 flex flex-col gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <p className="text-gray-500 text-center">
            Geen posts gevonden
          </p>
        )}
      </section>
    </>
  );
}
