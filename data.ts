import { Post } from "./types";

export const testPosts: Post[] = [
  {
    name: "Git wijzinging",
    category: "Lesson",
    date: new Date("2026-02-03"), // ✅ Date
    photo: "/gemini-case.png",
    text: "Een van de eerste lessen ging over het opslaan van wijzigingen in Git. Mijn mentor gaf een interessant voorbeeld van Reddit: een jongen had per ongeluk zijn Gemini API-key in een publieke repository gecommit. Hierdoor werd de sleutel voor iedereen toegankelijk, wat leidde tot een tragedie van 55.000$. Dit voorbeeld laat zien hoe belangrijk het is om te begrijpen hoe je veilig met gevoelige informatie omgaat. Daarom denk ik dat dit een van de belangrijkste onderwerpen is die alle beginnende programmeurs zouden moeten leren.Tijdens de les heb ik geleerd hoe een systeem met gevoelige variabelen correct wordt opgebouwd, zoals connection strings, API-keys en JWT-secrets, waar je deze gegevens tijdens de ontwikkeling moet opslaan en welke acties uitgevoerd moeten worden tijdens de deployment.",
    id:1
  },
  {
    name: "Sales",
    category: "Lesson",
    date: new Date("2026-02-04"),
    photo:"/Sales.jpg",
    text:"Vandaag volgde ik een interessante uitleg over hoe sales binnen het bedrijf is georganiseerd. Er werd toegelicht hoe het traject met klanten verloopt, vanaf het eerste contact tot het aanbieden van een gepaste oplossing. Daarnaast werd benadrukt hoe belangrijk duidelijke communicatie en het opbouwen van vertrouwen zijn. Deze sessie hielp mij beter te begrijpen hoe sales samenwerkt met andere teams binnen het bedrijf.",
    id:2
  },
  {
    name: "GraphQL",
    category: "Lesson",
    date: new Date("2026-02-05"),
    photo: "graphql.png",
    text:"Tijdens het bestuderen van de code van het bedrijf kwam ik GraphQL tegen.Omdat ik eerder met REST-API’s had gewerkt op school, voelde ik meteen het verschil. Door GraphQL te gebruiken en de queries en schema’s te bekijken, begreep ik hoe het efficiënt data ophaalt en structureert. Je kunt precies aangeven welke velden je nodig hebt, wat zorgt voor minder overbodige data en snellere reacties. Deze ervaring gaf mij een beter inzicht in moderne API’s en hoe kun jij GraphQL gebruiken.",
    id:3
  },
  {
    name: "First ticket: Profile Page",
    category: "Code",
    date: new Date("2026-02-11"),
    text: "Mijn eerste taak was de ontwikkeling van de profielpagina (Profile Page). In het kader van deze ticket heb ik geleerd om geverifieerde gegevens op te halen met behulp van GraphQL. Daarnaast heb ik een pagina geïmplementeerd voor het bekijken en weergeven van gebruikersgegevens.",
    id:4
  },
  {
    name: "GraphQl architecture",
    category: "Problem Solution",
    date: new Date("2026-02-12"),
    text: "De volledige workflow van GraphQL — van schema en resolvers tot query en het ophalen van data. Voor de profielpagina moest ik de volledige datastructuur analyseren, begrijpen hoe types en resolvers samenwerken en een efficiënte manier vinden om data correct op te halen tussen Back End en Front End.",
    photo: "graphQL-arch.png",
    id:5
  },
];



