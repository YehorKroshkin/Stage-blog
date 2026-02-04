import { testPosts } from "@/data";
import PostCard from "./PostCardComponent";
import LastPostCard from "./LastPostCardComponent";

export default function PostList() {
  // Сортируем посты по дате, от самой новой к самой старой
  const newestPost = testPosts.reduce((latest, post) => 
  post.date > latest.date ? post : latest
, testPosts[0]);

return (
  <section className="max-w-4xl mx-auto p-6">
    <LastPostCard post={newestPost} />
  </section>
);

}
