// components/PostList.tsx
import { testPosts } from "@/data";
import PostCard from "@/components/PostCardComponent";

export default function PostList() {
  return (
    <section className="max-w-5xl mx-auto p-6 flex flex-col gap-6">
      {testPosts.map((post) => (
        <PostCard key={post.name} post={post} />
      ))}
    </section>
  );
}
