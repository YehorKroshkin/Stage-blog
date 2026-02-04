// app/page.jsx
import Link from "next/link";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import LastPostComponent from "@/components/LastPostComponent";
import ScrollToTop from "@/components/ScrollToTopComponent";

export default function Landing() {
  return (
    <div className="p-8 bg-[#f8f5f0] min-h-screen text-black">
      <Header/>
      <ScrollToTop/>
      <h1 className="text-4xl font-bold mb-10 mt-10 text-center">WPL Portfolio</h1>

      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-16">

  {/* Текст */}
  <div className="flex-1 text-center md:text-left">
    <h3 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
      Waarom deze blog?
    </h3>

    <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl mx-auto md:mx-0 mb-10">
      Deze blog helpt mij mijn voortgang tijdens de stage bij te houden, 
      ervaringen te delen met het team en belangrijke leermomenten vast te leggen. 
      Daarnaast geeft het toekomstige werkgevers een duidelijk beeld van mijn groei.
    </p>

    <Link
      href="/blog"
      className="inline-flex items-center gap-2 px-8 py-3 
                 bg-stone-800 text-stone-100 rounded-full 
                 text-lg font-medium hover:bg-stone-700 transition-colors"
    >
      Lees de blog →
    </Link>
  </div>

  {/* Afbeelding */}
  <div className="flex-1 flex justify-center">
    <img
      src="/blog.jpg"
      alt="Blog"
      className="w-[340px] h-[340px] md:w-[420px] md:h-[420px]
                 object-cover rounded-3xl shadow-xl"
    />
  </div>

</section>

<h1 className="text-4xl font-bold mb-10 mt-10 text-center">Laatste post</h1>

<section className="bg-stone-100 rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 mt-10">
  {/* Текстовая часть */}
  <div className="flex-1">
    <h3 className="text-2xl font-semibold mb-3 text-stone-900 text-center mb-4">
      <LastPostComponent/>
    </h3>
  
  </div>
</section>


    </div>
  );
}
