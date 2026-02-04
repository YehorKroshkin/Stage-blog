import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostListComponent";
import ScrollToTop from "@/components/ScrollToTopComponent";
import Search from "@/components/SearchComponent";
import { Suspense } from "react";

export default function Blog() {
  return (
    <div className="p-8 bg-[#f8f5f0] min-h-screen ">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Search />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}