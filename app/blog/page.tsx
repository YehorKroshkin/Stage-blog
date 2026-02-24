import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTopComponent";
import Search from "@/components/SearchComponent";
import { Suspense } from "react";
import useTimeOnPage from "@/hooks/useTimeOnPage";
import { usePathname } from "next/navigation";

export default function Blog() {
  const pathname = usePathname();
  useTimeOnPage(pathname);
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