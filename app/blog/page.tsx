// pages/blog/page.tsx (или app/blog/page.tsx)
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTopComponent";
import dynamic from "next/dynamic";

// Импортируем клиентский компонент динамически, без SSR
const Search = dynamic(() => import("@/components/SearchComponent"), { ssr: false });

export default function BlogPage() {
  return (
    <div className="p-8 bg-[#f8f5f0] min-h-screen">
      <Header />
      <Search />      {/* теперь рендерится только на клиенте */}
      <ScrollToTop />
    </div>
  );
}
