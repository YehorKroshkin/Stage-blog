import { Post } from "./types";

export const testPosts: Post[] = [
  {
    name: "Git wijzinging",
    category: "Lesson",
    date: new Date("2026-02-03"), // ✅ Date
    photo: "/gemini-case.png",
    text: "Een van de eerste lessen ging over het opslaan van wijzigingen in Git. Mijn mentor gaf een interessant voorbeeld van Reddit: een jongen had per ongeluk zijn Gemini API-key in een publieke repository gecommit. Hierdoor werd de sleutel voor iedereen toegankelijk, wat leidde tot een tragedie van 55.000$. Dit voorbeeld laat zien hoe belangrijk het is om te begrijpen hoe je veilig met gevoelige informatie omgaat. Daarom denk ik dat dit een van de belangrijkste onderwerpen is die alle beginnende programmeurs zouden moeten leren.Tijdens de les heb ik geleerd hoe een systeem met gevoelige variabelen correct wordt opgebouwd, zoals connection strings, API-keys en JWT-secrets, waar je deze gegevens tijdens de ontwikkeling moet opslaan en welke acties uitgevoerd moeten worden tijdens deployment.",
    id:1
  },
  {
    name: "Sales",
    category: "Lesson",
    date: new Date("2026-02-04"),
    photo:"/Sales.jpg",
    text:"Vandaag volgde ik een interessante uitleg over hoe sales binnen het bedrijf is georganiseerd. Er werd toegelicht hoe het traject met klanten verloopt, vanaf het eerste contact tot het aanbieden van een gepaste oplossing. Daarnaast werd benadrukt hoe belangrijk duidelijke communicatie en het opbouwen van vertrouwen zijn.",
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
    photo: "profile-2.png",
    text: "Mijn eerste taak was - ontwikkeling van de profielpagina (Profile Page). In het kader van deze ticket heb ik geleerd om geverifieerde gegevens op te halen met behulp van GraphQL. Daarnaast heb ik een pagina geïmplementeerd voor het bekijken, weergeven en bewerken van gebruikersgegevens.",
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
  {
    name: "Uitbreden van wachtwoordvalidatie",
    category: "Code",
    date: new Date("2026-02-23"),
    text: "Mijn tweede ticket was het uitbreiden van de wachtwoordvalidatie. Aanvankelijk was de validatie beperkt tot een minimum van 8 tekens. Mijn taak was om extra vereisten toe te voegen: minimaal één hoofdletter en één cijfer, zowel op de frontend als op de backend. Daarnaast moest ik deze vereisten zichtbaar maken voor de gebruiker. Hiervoor heb ik een progress bar en een checklist geïmplementeerd die realtime aangeeft welke criteria al zijn voldaan. Dit zorgt ervoor dat de gebruiker direct feedback krijgt over de sterkte van zijn wachtwoord en welke regels nog niet zijn gevolgd. Tijdens dit ticket heb ik veel geleerd over frontend-backend validatie en regex.",
    photo: "wValidatie.jpg",
    id: 6
  },
  {
    name: "Finance & Research",
    category: "Lesson",
    date: new Date("2026-02-18"),
    text: "Vandaag heb ik twee introducties gevolgd: Finance and Operations en Research Designers. Het was interessant om te zien hoe processen lopen binnen het bedrijf en hoe ideeën van onderzoek naar ontwerp worden gebracht.",
    photo: "Financial_Research.png",
    id: 7
  },
  {
    name: "RegEx",
    category: "Lesson",
    date: new Date("2026-02-19"),
    text: "Tijdens het uitbreiden van de wachtwoordvalidatie heb ik ook meer geleerd over RegEx. Het was interessant om te zien hoe je hiermee patronen in tekst kunt herkennen en valideren, wat handig is voor beveiliging en invoercontrole.",
    photo: "regex.png",
    id: 8
  },
  {
    name: "Board games avond",
    category: "Teambuilding",
    date: new Date("2026-02-13"),
    text: "Vandaag hadden we een gezellige avond met bordspellen als een soort teambuilding. Het was leuk om collega’s op een andere manier te leren kennen en samen plezier te hebben.",
    photo: "board.png",
    id: 9
  },
  {
    name: "Testing",
    category: "Code",
    date: new Date("2026-03-06"),
    text: "Tijdens deze week was ik bezig met het testen van de functionaliteit van de Profile Page en wachtwoordvalidatie, om te verzekeren dat de interface correct werkt, formulieren juist worden verwerkt en de applicatie bestand is tegen fouten. Dit is belangrijk om bugs te voorkomen, de gebruikerservaring te verbeteren en de betrouwbaarheid van het product te waarborgen. Voor het testen heb ik Jest, React Testing Library, Enzyme en Supertest gebruikt, waarbij zowel frontend als backend werden gecontroleerd. Het werken met tests was nieuw voor mij en stelde me in staat om methoden van unit- en integratietesten te leren.",
    photo: "test.jpg",
    id: 10
  },
  {
    name: "Intervisie moment",
    category: "Event",
    date: new Date("2026-03-02"),
    text: "Tijdens het intervisiemoment bij AP was het erg interessant om te horen hoe de stages van anderen verlopen. Ik kon ervaringen en tips van medestudenten vergelijken met mijn eigen stage.",
    photo: "intervisie.jpg",
    id: 11
  },
  {
    name: "Moving Forward",
    category: "Event",
    date: new Date("2026-03-04"),
    text: "Vandaag heb ik deelgenomen aan Moving Forward. Ik heb met interessante mensen gesproken, feedback op mijn cv gekregen, en meer gehoord over de mogelijkheden. Uiteindelijk heb ik nu de keuze: proberen een baan te vinden, wat een zeer moeilijke uitdaging is voor een junior graduate, of doorgaan met verder leren.",
    photo: "moving.jpeg",
    id: 12
  }
];



