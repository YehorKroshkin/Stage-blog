"use client";

import { Post } from "@/types";
import LightboxImage from "./ImageBoxComponent";
import Link from "next/link";

interface LastPostCardProps {
    post: Post;
}

export default function LastPostCard({ post }: LastPostCardProps) {
    return (
        <article className="bg-stone-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">

            {/* Image */}
            {post.photo && (
                <div className="w-full h-[280px] relative">
                    <LightboxImage
                        src={post.photo}
                        alt={post.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-7 flex flex-col gap-4 text-center max-w-lg mx-auto">

                {/* Category */}
                <span className="mx-auto text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full w-fit">
                    {post.category}
                </span>

                {/* Title */}
                <h2 className="text-2xl md:text-2xl font-bold text-stone-700">
                    {post.name}
                </h2>

                {/* Text */}
                <p className="text-stone-600 leading-relaxed line-clamp-3">
                    {post.text}
                </p>

                {/* Date */}
                <p className="text-sm text-stone-400">
                    {post.date.toLocaleDateString()}
                </p>
                <Link
                    href={`/blog?search=${encodeURIComponent(post.name)}`}
                    className="inline-flex items-center gap-2 px-6 py-3
             bg-stone-800 justify-center text-white rounded-full
             hover:bg-stone-700 transition"
                >
                    Lees dit artikel →
                </Link>
            </div>

        </article>
    );
}
