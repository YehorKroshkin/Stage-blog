import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Link from "next/link";
import ScrollToTop from "@/components/ScrollToTopComponent";

export default function OverPage() {
  return (
    <div className="p-8 bg-[#f8f5f0] min-h-screen">
      <Header />
      <ScrollToTop/>
      <div className="max-w-5xl mx-auto mt-10 space-y-12">

        {/* === Intro / Profile === */}
        <section className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/rotterdam.jpg" // положи фото в /public
            alt="Yehor Kroshkin"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-stone-900 mb-2">
              Yehor Kroshkin
            </h1>
            <p className="text-stone-700 mb-4">
              Ik ben een student Graduaat Programmeren aan AP Hogeschool.
              Ik sta aan het begin van mijn professionele carrière en heb
              een sterke interesse in probleemoplossing, softwareontwikkeling
              en continu bijleren. Technologie evolueert constant, en net dat
              motiveert mij om mezelf te blijven ontwikkelen.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="https://www.linkedin.com/in/yehor-kroshkin-12813533a"
                target="_blank"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-full text-white font-medium"
              >
                LinkedIn
              </Link>

              <span className="px-4 py-2 bg-stone-300 rounded-full text-white">
                Antwerpen
              </span>
            </div>
          </div>
        </section>

        {/* === Education === */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-stone-500 mb-4">Opleiding</h2>


          <ul className="space-y-3 text-stone-700 ml-2">
            <li>
              <strong>AP Hogeschool</strong> – Graduaat Programmeren
            </li>
            <li>
              <strong>DOLIFMP</strong> – Fysisch-wiskundig lyceum
            </li>
          </ul>
        </section>

        {/* === Skills === */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-stone-500 mb-4">Vaardigheden</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700">
            <div>
              <h3 className="font-semibold mb-2">Technische skills</h3>
              <ul className="list-disc list-inside ml-2">
                <li>HTML, CSS, JavaScript, TypeScript</li>
                <li>React / React Native,  Next.js</li>
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
        <section className="bg-stone-100 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-stone-500 mb-4">Stage</h2>

          <p className="text-stone-700 mb-2">
            <strong>Bedrijf:</strong> BUFFL
          </p>
          <p className="text-stone-700 mb-2">
            <strong>Locatie:</strong> Mechelen
          </p>
          <p className="text-stone-700 mb-4">
            <strong>Rol:</strong> Intern Developer
          </p>

          <p className="text-stone-700">
            Tijdens mijn stage werk ik aan webontwikkeling en leer ik
            professionele software toe te passen in een teamcontext.
            Ik doe ervaring op met moderne technologieën, samenwerking
            en het oplossen van realistische problemen binnen een bedrijf.
          </p>
        </section>

      </div>
      
    </div>
  );
}

