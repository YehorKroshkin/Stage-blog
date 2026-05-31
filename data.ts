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
    category: "Ticket",
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
    category: "Ticket",
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
    category: "Ticket",
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
  },
  {
    name: "Tickets mobile applicatie",
    category: "Ticket",
    date: new Date("2026-03-28"),
    text: "Laatste weken was ik bezig met het ontwikkelen van features voor een mobiele applicatie: ik voegde nieuwe meldingen en pop-ups toe, verbeterde de logica van het like-systeem zodat alles correct in real-time werd bijgewerkt, en werkte ik aan impact posts en hun integratie met andere onderdelen van de applicatie; daarnaast besteedde ik ook veel tijd aan het schrijven van tests om de stabiliteit en betrouwbaarheid van de app te garanderen.",
    photo: "mobile.png",
    id: 13
  },
  {
    name: "Integratie met Kadonatie, 1-ste fase",
    category: "Ticket",
    date: new Date("2026-04-18"),
    text: "Met de integratie met Kadonation automatiseren we het proces van voucher-aankopen volledig. Waar vouchers vroeger handmatig werden aangekocht en verstuurd, wordt nu direct na een aankoop automatisch een aanvraag naar Kadonation gestuurd. Kadonation verwerkt daarna zelf de levering en verstuurt de voucher rechtstreeks naar het e-mailadres van de gebruiker. In de eerste fase van deze integratie krijgt elke aankoop een unieke banner onder het item in “Mijn aankopen”. Via deze banner kan de gebruiker doorklikken naar een aparte pagina met meer uitleg over de voucherstatus en de levering. Op deze pagina wordt bevestigd dat de voucher werd verstuurd, naar welk e-mailadres dit is gebeurd, en wat de gebruiker kan doen als de e-mail niet meteen zichtbaar is, zoals het controleren van de spamfolder of contact opnemen met support.",
    photo: "kadonation_1phase.png",
    id: 14
  },
  {
    name: "Regex voor data validatie",
    category: "Problem Solution",
    date: new Date("2026-02-28"),
    text: "Ik werkte aan een ticket rond datavalidatie met behulp van regex. Het was interessant om mij hierin verder te verdiepen en regex beter te leren begrijpen door zelf validatiepatronen op te bouwen voor verschillende invoervelden, zoals wachtwoorden, e-mailadressen, namen en telefoonnummers. Door deze aanpak kon ik zorgen voor een betrouwbaardere invoercontrole en een betere gebruikerservaring binnen de applicatie.",
    photo: "data-validation.png",
    id: 15
  },
  {
    name: "Buiten lunchen",
    category: "Teambuilding",
    date: new Date("2026-03-14"),
    text: "Bij mooi weer nemen we soms samen de tijd om buiten te gaan lunchen. Dit is niet alleen een fijne pauze tijdens de werkdag, maar ook een waardevol moment om elkaar beter te leren kennen buiten de dagelijkse taken om.",
    photo: "buiten-lunchen.jpeg",
    id: 16
  },
  {
    name: "Road map Buffl",
    category: "Teambuilding",
    date: new Date("2026-04-06"),
    text: "Tijdens de bedrijfsmeeting werden de resultaten van het afgelopen jaar besproken en werd er gekeken naar de plannen voor dit jaar. Zulke vergaderingen zijn belangrijk omdat ze medewerkers een duidelijk beeld geven van de richting waarin het bedrijf zich ontwikkelt. Tijdens de presentatie sprak het management over behaalde doelen, succesvolle projecten en belangrijke veranderingen binnen de organisatie. Daarnaast werden ook de nieuwe doelstellingen, toekomstige projecten en de verdere structuur van het bedrijf toegelicht.",
    photo: "roadmap.jpg",
    id: 17
  }, 
  {
    name: "Bevestigingsstap bij voucher-aankoop",
    category: "Problem Solution",
    date: new Date("2026-04-28"),
    text: "Bij het kopen van een voucher vult de gebruiker zijn gegevens in, waaronder e-mailadres. In sommige gevallen kan het gebeuren dat het ingevoerde e-mailadres niet overeenkomt met het e-mailadres dat aan het profiel van de gebruiker is gekoppeld. Dit kan leiden tot onzekerheid over de correcte levering van de voucher en mogelijk misbruik of fouten in de uitgifte. Om dit probleem op te lossen is er een extra “approve stage” toegevoegd aan het aankoopproces. Wanneer de e-mailadressen niet overeenkomen, wordt de aankoop eerst gecontroleerd en goedgekeurd voordat de voucher wordt verstuurd. Op deze manier wordt de veiligheid verhoogd, worden fouten voorkomen en ontvangt de gebruiker zijn voucher op een gecontroleerde en betrouwbare manier.",
    photo: "approve.png",
    id: 18
  },
  {
    name: "2-de phase integratie met Kadonatie",
    category: "Ticket",
    date: new Date("2026-05-05"),
    text: "Tijdens de tweede fase van de Kadonation-integratie werd het aankoopproces verder geautomatiseerd. Bij een aankoop wordt nu automatisch een nieuwe Kadonation-aankoop aangemaakt binnen het systeem. Daarnaast werd een controle op het e-mailadres toegevoegd, waardoor aankopen automatisch de juiste status krijgen op basis van de ingevoerde gegevens.",
    photo: "kadonation_1phase.png",
    id: 19
  }

];



