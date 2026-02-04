"use client";
// components/PostCard.tsx
import { testPosts } from "@/data";
import { Post } from "@/types";
import LightboxImage from "./ImageBoxComponent";


interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-stone-100 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-shadow">
      
      {/* Фото */}
      {post.photo && (
  <LightboxImage
    src={post.photo}
    alt={post.name}
    className="w-65 h-50 object-cover rounded-xl shadow-md flex-shrink-0"
  />
)}


      {/* Текст */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-stone-500">{post.name}</h3>
        <p className="text-gray-600 text-sm">
          Categorie: <span className="font-medium">{post.category}</span>
        </p>
        <p className="text-black">{post.text}</p>
        <p className="text-gray-500 text-sm">
          Datum: {post.date.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
