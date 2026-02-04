import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTopComponent";

export default function OverPage() {
  return (
    <div className="p-8 bg-[#f8f5f0] min-h-screen">
  <Header />
  <ScrollToTop />

  <div className="max-w-5xl mx-auto mt-10 space-y-12 ">

    {/* === Intro / Profile === */}
    <section className="bg-stone-100 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
      <img
        src="/rotterdam.jpg"
        alt="Yehor Kroshkin"
        className="w-48 h-48 object-cover rounded-full shadow-lg"
      />

      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">Yehor Kroshkin</h1>
        <p className="text-stone-700 mb-5 leading-relaxed">
          Ik sta aan het begin van mijn professionele carrière en heb een sterke interesse in probleemoplossing, softwareontwikkeling en continu bijleren. Technologie evolueert constant, en net dat motiveert mij om mezelf te blijven ontwikkelen.
        </p>

        {/* === Contact Info Block === */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <Link
            href="https://www.linkedin.com/in/yehor-kroshkin-12813533a"
            target="_blank"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>

    {/* === Education === */}
    <section className="bg-stone-100 rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-blue-400">
      <h2 className="text-2xl font-semibold text-stone-700 mb-4">Opleiding</h2>
      <ul className="space-y-2 text-stone-700 ml-2 list-disc list-inside">
        <li><strong>AP Hogeschool</strong> – Graduaat Programmeren</li>
        <li><strong>DOLIFMP</strong> – Fysisch-wiskundig lyceum</li>
      </ul>
    </section>

    {/* === Skills === */}
    <section className="bg-stone-100 rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-green-400">
      <h2 className="text-2xl font-semibold text-stone-700 mb-4">Vaardigheden</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700">
        <div>
          <h3 className="font-semibold mb-2">Technische skills</h3>
          <ul className="list-disc list-inside ml-2">
            <li>HTML, CSS, JavaScript, TypeScript</li>
            <li>React / React Native, Next.js</li>
            <li>MongoDB, SQL, Postman</li>
            <li>Basiskennis Cloud</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Soft skills</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Analytisch denken</li>
            <li>Teamwork</li>
            <li>Tijdmanagement</li>
            <li>Effectieve communicatie</li>
          </ul>
        </div>
      </div>
    </section>

    {/* === Internship === */}
    <section className="bg-stone-100 rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-purple-400">
      <h2 className="text-2xl font-semibold text-stone-700 mb-4">Stage</h2>
      <p className="text-stone-700 mb-2"><strong>Bedrijf:</strong> BUFFL</p>
      <p className="text-stone-700 mb-2"><strong>Locatie:</strong> Mechelen</p>
      <p className="text-stone-700 mb-4"><strong>Rol:</strong> Intern Developer</p>
      <p className="text-stone-700">
        Tijdens mijn stage werk ik aan webontwikkeling en leer ik professionele software toe te passen in een teamcontext. Ik doe ervaring op met moderne technologieën, samenwerking en het oplossen van realistische problemen binnen een bedrijf.
      </p>
    </section>

  </div>
</div>

  );
}

