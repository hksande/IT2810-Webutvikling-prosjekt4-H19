const data = [
  {
    id: "product01",
    name: "Poliziano Vino Nobile di Montepulciano 2016",
    price: 285,
    type: "Rødvin",
    purchased: 0,
    origin: "Italia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3309301-1.jpg",
    description:
      "Saftig og pågående med avslepne tanniner, mørk kirsebærfrukt og kjøttfull avslutning."
  },
  {
    id: "product02",
    name: "Agostino Barb d'Asti Superiore Moliss",
    price: 200,
    type: "Rødvin",
    purchased: 0,
    origin: "Italia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3379301-1.jpg",
    description: "Rund, bløt med avslepne tanniner. Balansert."
  },
  {
    id: "product03",
    name: "D'Ouréa Gigondas 2014",
    price: 235,
    type: "Rødvin",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/5482401-1.jpg",
    description:
      "Rik smak med god konsentrasjon av bringebær, plommer og mineraler."
  },
  {
    id: "product04",
    name: "Risky Grapes La Traca Bobal 2018",
    price: 150,
    type: "Rødvin",
    purchased: 0,
    origin: "Spania",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/5495601-1.jpg",
    description: "Smak av fruktige røde bær. Frisk."
  },
  {
    id: "product05",
    name: "Jean-Paul Brun Saint-Amour 2017",
    price: 270,
    type: "Rødvin",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/7161601-1.jpg",
    description:
      "Frisk, delikat fruktighet av røde bær, dyp, saftig med fin fasthet. Lang."
  },
  {
    id: "product06",
    name: "Berthier Pouilly-Fumé 2018",
    price: 210,
    type: "Hvitvin",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/591901-1.jpg",
    description: "Mineralpreget fruktighet med toner av stikkelsbær og urter."
  },
  {
    id: "product07",
    name: "Tralivio Verdicchio dei Castelli di Jesi Classico Superiore 2017",
    price: 200,
    type: "Hvitvin",
    purchased: 0,
    origin: "Italia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3185601-1.jpg",
    description: "Frisk og ren av eple, sitrus, nøtter og mineralsk."
  },
  {
    id: "product08",
    name: "Ioppa San Grato 2018",
    price: 160,
    type: "Hvitvin",
    purchased: 0,
    origin: "Italia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3872301-1.jpg",
    description: "Fruktdreven med frisk avslutning."
  },
  {
    id: "product09",
    name: "Geiler Terroirs d´Alluvions Pinot Gris 2018",
    price: 180,
    type: "Hvitvin",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/6840301-1.jpg",
    description: "Halvtørr med frisk syre, lang mineralsk ettersmak."
  },
  {
    id: "product10",
    name: "Dom. Hatzimichalis Malagousia Oaked 2017",
    price: 163,
    type: "Hvitvin",
    purchased: 0,
    origin: "Hellas",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/5405001-1.jpg",
    description:
      "Saftig og fokusert, preg av moden frukt, krydder og urter, ettersmak med god lengde."
  },
  {
    id: "product11",
    name: "Geiler Terroirs d´Alluvions Pinot Gris 2018",
    price: 180,
    type: "Hvitvin",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/6840301-1.jpg",
    description: "Halvtørr med frisk syre, lang mineralsk ettersmak."
  },
  {
    id: "product12",
    name: "Maredsous Blond 6",
    price: 50,
    type: "Øl",
    purchased: 0,
    origin: "Belgia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/1116802-1.jpg",
    description: "Fyldig smak med fruktsødme."
  },
  {
    id: "product13",
    name: "Nøisom Corvus Saison Imperial Stout",
    price: 78,
    type: "Øl",
    purchased: 0,
    origin: "Norge",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/2772802-1.jpg",
    description: "Fyldig bærsødme, lakris, eik, saison-gjær, sjokolade."
  },
  {
    id: "product14",
    name: "Eiker Saison",
    price: 63,
    type: "Øl",
    purchased: 0,
    origin: "Norge",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/2780202-1.jpg",
    description: "Fruktig, balansert, lang avslutning."
  },
  {
    id: "product15",
    name: "Rochefort 6",
    price: 61,
    type: "Øl",
    purchased: 0,
    origin: "Belgia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/5133802-1.jpg",
    description: "Krydret, malt, gjær og noe søtlig. God lengde."
  },
  {
    id: "product16",
    name: "Veltins Pilsener",
    price: 38,
    type: "Øl",
    purchased: 0,
    origin: "Tyskland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/7313902-1.jpg",
    description: "Godt balansert mellom bitterheten fra humle og maltet."
  },
  {
    id: "product17",
    name: "E.C. Dahls Kyoto",
    price: 175,
    type: "Øl",
    purchased: 0,
    origin: "Norge",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/7997101-1.jpg",
    description:
      "Fruktig og kremet, preg av lyst malt og peppermynte, innslag av sitrus og tropisk frukt."
  },
  {
    id: "product18",
    name: "Sagene IPA",
    price: 61,
    type: "Øl",
    purchased: 0,
    origin: "Norge",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/10181402-1.jpg",
    description: "Lett bitter med noe maltsødme og innslag av tropiske frukter."
  },
  {
    id: "product19",
    name: "Thornbridge Jaipur",
    price: 51,
    type: "Øl",
    purchased: 0,
    origin: "England",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/8262402-1.jpg",
    description: "Sitrus, malt og tropisk frukt."
  },
  {
    id: "product20",
    name: "Omnipollo Zodiak",
    price: 57,
    type: "Øl",
    purchased: 0,
    origin: "Sverige",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/7968802-1.jpg",
    description:
      "Florale humletoner med grapefrukt, appelsinskall, fersken og sitron."
  },
  {
    id: "product21",
    name: "St Austell Big Job Double IPA",
    price: 65,
    type: "Øl",
    purchased: 0,
    origin: "England",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/1596402-1.jpg",
    description: "Balansert bitterhet i en kremet munnfølelse."
  },
  {
    id: "product22",
    name: "Bollinger Spécial Cuvée Brut",
    price: 2510,
    type: "Musserende",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/87907-1.jpg",
    description:
      "Fruktig og fint kremet, preg av sitrus, pære og eple, ettersmak med god lengde."
  },
  {
    id: "product23",
    name: "Delorme Terroir d’Exception Cremant de Bourgogne Brut",
    price: 430,
    type: "Musserende",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/118405-1.jpg",
    description: "Fint utviklet og frisk med preg av sjømineraler og kjeks."
  },
  {
    id: "product24",
    name: "Alta Alella Laietà Gran Reserva Brut Nature 2013",
    price: 230,
    type: "Musserende",
    purchased: 0,
    origin: "Spania",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/8197201-1.jpg",
    description:
      "Fokusert og fint kremet, preg av sitrus, eple, blomst og urter, innslag av nøtt og kjeks,god lengde."
  },
  {
    id: "product25",
    name: "Freixenet Italian Sparkling Rosé",
    price: 157,
    type: "Musserende",
    purchased: 0,
    origin: "Italia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/8268801-1.jpg",
    description:
      "Frisk og fruktig. fin balanse mellom rød frukter og syrlighet."
  },
  {
    id: "product26",
    name: "Dom. Bulliat Crémant de Bourgogne Brut Nature",
    price: 212,
    type: "Musserende",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/10382901-1.jpg",
    description: "Tørr og frisk med god mineralitet."
  },
  {
    id: "product27",
    name: "Bottega Gold Treviso Prosecco Brut",
    price: 500,
    type: "Musserende",
    purchased: 0,
    origin: "Italia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/9793705-1.jpg",
    description: "Ung, ren og fruktig. Preg av pære og urter. Frisk ettersmak."
  },
  {
    id: "product28",
    name: "Whispering Bubbles Durello",
    price: 145,
    type: "Musserende",
    purchased: 0,
    origin: "Itlia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/10275201-1.jpg",
    description:
      "Frisk og fruktig med smak av modne gule stenfrukter og mineraler."
  },
  {
    id: "product29",
    name: "Hattingley Valley Rosé 2014",
    price: 430,
    type: "Musserende",
    purchased: 0,
    origin: "England",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3872101-1.jpg",
    description: "Tørr og ren med god mousse og frisk syre."
  },
  {
    id: "product30",
    name: "Vaux Riesling Brut 2017",
    price: 250,
    type: "Musserende",
    purchased: 0,
    origin: "Tyskland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/2001701-1.jpg",
    description:
      "Rund og fyldig mousse. Aroma av eple, modne sitroner og elegant kalkpreg i avslutningen."
  },
  {
    id: "product31",
    name: "Codorníu Cuvée Barcelona 1872 Brut",
    price: 146,
    type: "Musserende",
    purchased: 0,
    origin: "Spania",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/2882401-1.jpg",
    description: "Ren, fyldig og kremet, preg av pære, eple og sitrus."
  },
  {
    id: "product32",
    name: "Most Wanted Prosecco",
    price: 140,
    type: "Musserende",
    purchased: 0,
    origin: "England",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/10460401-1.jpg",
    description: "Pære, eple og hvite blomster."
  },
  {
    id: "product33",
    name: "Scapa Glansa",
    price: 630,
    type: "Sprit",
    purchased: 0,
    origin: "Skottland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/7852901-1.jpg",
    description:
      "Fyldig smak av vanilje, honning og frukttoner. Litt røykaktig ettersmak."
  },
  {
    id: "product34",
    name: "Il Gusto della Costa Limoncello",
    price: 250,
    type: "Sprit",
    purchased: 0,
    origin: "Italia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/7721002-1.jpg",
    description: "Syrlig med søt avslutning."
  },
  {
    id: "product35",
    name: "The Bitter Truth Lemon Bitters",
    price: 225,
    type: "Sprit",
    purchased: 0,
    origin: "Tyskland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/8305604-1.jpg",
    description: "Bitter med kardemomme og korianderfrø i bakgrunnen."
  },
  {
    id: "product36",
    name: "Egge Gård Snaps av eple",
    price: 403,
    type: "Sprit",
    purchased: 0,
    origin: "Norge",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/5967902-1.jpg",
    description: "Frisk og fruktig, streif av sødme. Middels fylde."
  },
  {
    id: "product37",
    name: "Wodqa",
    price: 400,
    type: "Sprit",
    purchased: 0,
    origin: "Østerrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/6505102-1.jpg",
    description: "Myk, mineralsk og lang smak."
  },
  {
    id: "product38",
    name: "Kong Christian IV Akevitt",
    price: 329,
    type: "Sprit",
    purchased: 0,
    origin: "Norge",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/110302-1.jpg",
    description: "Ren og karvepreget med innslag av sitrus og fat, god fylde."
  },
  {
    id: "product39",
    name: "Bombay Sapphire English Estate LE",
    price: 435,
    type: "Sprit",
    purchased: 0,
    origin: "England",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/11095301-1.jpg",
    description:
      "Bløt og ren med god fylde. Preg av einerbær, nøtter. Frisk ettersmak av mynte."
  },
  {
    id: "product40",
    name: "LIV",
    price: 210,
    type: "Sprit",
    purchased: 0,
    origin: "Danmark",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/11088401-1.jpg",
    description: "Lett, ren og nøytral."
  },
  {
    id: "product41",
    name: "Wizla Vodka",
    price: 396,
    type: "Sprit",
    purchased: 0,
    origin: "Polen",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/10425601-1.jpg",
    description: "Ren, lett og nøytral vodka med hint av sitrus."
  },
  {
    id: "product42",
    name: "Filipa Pato Nosso Calcario Baga 2017",
    price: 310,
    type: "Rødvin",
    purchased: 0,
    origin: "Portugal",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/7817001-1.jpg",
    description:
      "Tørr med faste tanniner, god friskhet. Fruktdrevet med fin mineralitet i ettersmaken. Lang."
  },
  {
    id: "product43",
    name: "Casal Garcia Tinto",
    price: 120,
    type: "Rødvin",
    purchased: 0,
    origin: "Portugal",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/9424201-1.jpg",
    description: "Fruktig med lett bløt ettersmak."
  },
  {
    id: "product44",
    name: "Gnarly Head Petite Sirah 2014",
    price: 170,
    type: "Rødvin",
    purchased: 0,
    origin: "USA",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/2890601-1.jpg",
    description:
      "Smak av kirsebær, mandler og toast med blåbær og plomme i avslutningen."
  },
  {
    id: "product45",
    name: "Jacob's Creek Double Barrel Cabernet Sauvignon 2013",
    price: 190,
    type: "Rødvin",
    purchased: 0,
    origin: "Australia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/5466401-1.jpg",
    description: "Smak av fruktige røde bær. Frisk."
  },
  {
    id: "product46",
    name: "Mullineux Granite Syrah 2014",
    price: 699,
    type: "Rødvin",
    purchased: 0,
    origin: "Sør-Afrika",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/6395301-1.jpg",
    description: "Ung og saftig med preg av mørke bær og urter. God lengde."
  },
  {
    id: "product47",
    name: "Peter Lehmann Margaret Barossa Semillon 2010",
    price: 220,
    type: "Hvitvin",
    purchased: 0,
    origin: "Australia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/9420501-1.jpg",
    description: "Balansert med mineralske toner og god lengde."
  },
  {
    id: "product48",
    name: "Pennon Hills Chardonnay",
    price: 260,
    type: "Hvitvin",
    purchased: 0,
    origin: "Australia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/10859201-1.jpg",
    description:
      "Saftig og nyansert, fint preg av eple og steinfrukt over nøtt, fat og litt røyk."
  },
  {
    id: "product49",
    name: "Nautilus Sauvignon Blanc 2018",
    price: 195,
    type: "Hvitvin",
    purchased: 0,
    origin: "New Zealand",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/521801-1.jpg",
    description:
      "Tørr og frisk med god fruktighet, mineralitet og frisk ettersmak."
  },
  {
    id: "product50",
    name: "Finca Las Moras Barrel Select Chardonnay 2016",
    price: 130,
    type: "Hvitvin",
    purchased: 0,
    origin: "Argentina",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/7612501-1.jpg",
    description: "God fruktighet med smak av gule frukter, fyldig munnfølelse."
  },
  {
    id: "product51",
    name: "Graham's 10 Years Old Tawny",
    price: 350,
    type: "Portvin",
    purchased: 0,
    origin: "Portugal",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/5482001-1.jpg",
    description: "Rik og balansert med elegant ettersmak."
  },
  {
    id: "product52",
    name: "Medalla Real Cabernet Sauvignon 2012",
    price: 220,
    type: "Rødvin",
    purchased: 0,
    origin: "Chile",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/242901-1.jpg",
    description: "Balansert, innslag av solbær, røde bær, eik, lær og krydder."
  },
  {
    id: "product53",
    name: "Canepa Classico Cabernet Sauvignon 2018",
    price: 98,
    type: "Rødvin",
    purchased: 0,
    origin: "Chile",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/661401-1.jpg",
    description: "Ren, fruktig og umiddelbar, preg av mørke bær og urter."
  },
  {
    id: "product54",
    name: "Cono Sur Pinot Noir Reserva 2016",
    price: 155,
    type: "Rødvin",
    purchased: 0,
    origin: "Chile",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/1051401-1.jpg",
    description: "Frisk og fyldig med bløte tanniner."
  },
  {
    id: "product55",
    name: "Tommasi Amarone della Valpolicella Classico 2013",
    price: 810,
    type: "Rødvin",
    purchased: 0,
    origin: "Italia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/629905-1.jpg",
    description:
      "Fyldig og kompleks, med toner av kirsebær og plomme. Strukturerte tanniner og lang avslutning."
  },
  {
    id: "product56",
    name: "Baron de Ley Gran Reserva 2012",
    price: 236,
    type: "Rødvin",
    purchased: 0,
    origin: "Spania",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3377901-1.jpg",
    description:
      "Fint utviklet, preg av mørke bær, tørket frukt, urter og fat, litt varm ettersmak med god lengde."
  },
  {
    id: "product57",
    name: "Ch. Musar 1998",
    price: 650,
    type: "Rødvin",
    purchased: 0,
    origin: "Libanon",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/4966801-1.jpg",
    description:
      "Rik, fyldig frukt med fine utviklede elementer. Lang og kompleks."
  },
  {
    id: "product58",
    name: "Veuve Clicquot Vintage Reserve Brut 2012",
    price: 610,
    type: "Musserende",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3102101-1.jpg",
    description:
      "Kandiserte frukt, ristede pærer, grønne hasselnøtter og mandler."
  },
  {
    id: "product59",
    name: "Bouvet Rosé Excellence",
    price: 153,
    type: "Musserende",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/90101-1.jpg",
    description: "Preg av røde bær, urter og sevje."
  },
  {
    id: "product60",
    name: "Freixenet Cordon Negro Brut",
    price: 126,
    type: "Musserende",
    purchased: 0,
    origin: "Spania",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/94601-1.jpg",
    description: "Kremet og umiddelbar, preg av eple og sitrus."
  },
  {
    id: "product61",
    name: "Hitachino Nest White Ale",
    price: 53,
    type: "Øl",
    purchased: 0,
    origin: "Japan",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/490802-1.jpg",
    description: "Friskhet og god balanse."
  },
  {
    id: "product62",
    name: "Harviestoun Schiehallion Craft Lager",
    price: 40,
    type: "Øl",
    purchased: 0,
    origin: "Skottland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/631402-1.jpg",
    description: "Tørr, frisk grapefrukt og humle."
  },
  {
    id: "product63",
    name: "Flying Dog Raging Bitch",
    price: 65,
    type: "Øl",
    purchased: 0,
    origin: "USA",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/9894402-1.jpg",
    description:
      "Middels fyldig med en anelse maltsødme, mye humlebitterhet og en lang fin avslutning."
  },
  {
    id: "product64",
    name: "Borg Leifur Nr.32 Nordic Saison",
    price: 55,
    type: "Øl",
    purchased: 0,
    origin: "Island",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3569802-1.jpg",
    description: "Frisk og fruktig med hint av islandske urter."
  },
  {
    id: "product65",
    name: "Balder Agave IPA",
    price: 70,
    type: "Øl",
    purchased: 0,
    origin: "Danmark",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/2217602-1.jpg",
    description: "Humlepreget, sitrus, og tropisk frukt."
  },
  {
    id: "product66",
    name: "Staropromen",
    price: 34,
    type: "Øl",
    purchased: 0,
    origin: "Tsjekkia",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3401202-1.jpg",
    description:
      "Kremet med fint sødmefullt maltpreg, innslag av urter, moderat bittert."
  },
  {
    id: "product67",
    name: "Amundsen Arctic Vodka",
    price: 305,
    type: "Sprit",
    purchased: 0,
    origin: "Norge",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/247401-1.jpg",
    description: "Lett, ren og nøytral vodka."
  },
  {
    id: "product68",
    name: "Belvedere Vodka",
    price: 540,
    type: "Sprit",
    purchased: 0,
    origin: "Polen",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/4445701-1.jpg",
    description: "Ren og middels fyldig vodka med hint av korn og sitrus."
  },
  {
    id: "product69",
    name: "Snow Leopard Vodka",
    price: 616,
    type: "Sprit",
    purchased: 0,
    origin: "Polen",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/3704301-1.jpg",
    description: "Smak av vanilje, nøtter og pepperkorn."
  },
  {
    id: "product70",
    name: "Glenwood Blended Scotch Whisky",
    price: 170,
    type: "Sprit",
    purchased: 0,
    origin: "Skottland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/2872702-1.jpg",
    description:
      "Lett, mild og ren whisky med innslag av korn, urter og litt fat."
  },
  {
    id: "product71",
    name: "The Ileach Islay Single Malt Scotch Whisky",
    price: 555,
    type: "Sprit",
    purchased: 0,
    origin: "Skottland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/9053601-1.jpg",
    description: "Bittersøt kombinasjon av olje, torvrøyk og bygg."
  },
  {
    id: "product72",
    name: "Cognac Park Borderies Mizunara",
    price: 700,
    type: "Sprit",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/10632401-1.jpg",
    description:
      "Mykt anslag, tørket frukt, lang avslutting med toner av kandisert appelsin."
  },
  {
    id: "product73",
    name: "Haldenkanalen Cognac XO Limited Edition 2018",
    price: 935,
    type: "Sprit",
    purchased: 0,
    origin: "Frankrike",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/1815601-1.jpg",
    description: "Rund og lang med fyldig ettersmak."
  },
  {
    id: "product74",
    name: "McManis Chardonnay 2017",
    price: 193,
    type: "Hvitvin",
    purchased: 0,
    origin: "USA",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/870801-1.jpg",
    description: "Rik, kremet, søte pærer."
  },
  {
    id: "product75",
    name: "Noble Vines 242 Sauvignon Blanc 2017",
    price: 170,
    type: "Hvitvin",
    purchased: 0,
    origin: "USA",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/1275001-1.jpg",
    description:
      "Frisk og fruktig med hint av guava, pasjonsfrukt og limefrukter."
  },
  {
    id: "product76",
    name: "Graziano Chenin Blanc 2016",
    price: 239,
    type: "Hvitvin",
    purchased: 0,
    origin: "USA",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/1788601-1.jpg",
    description: "Mineralsk og syrefrisk. Meloner og tropiske frukter."
  },
  {
    id: "product77",
    name: "Kongsgaard Napa Valley Chardonnay 2015",
    price: 889,
    type: "Hvitvin",
    purchased: 0,
    origin: "USA",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/2745801-1.jpg",
    description: "God fylde med distinkt friskhet og syre."
  },
  {
    id: "product78",
    name: "Kloster Eberbach Marcobrunn Riesling Auslese 2015",
    price: 350,
    type: "Hvitvin",
    purchased: 0,
    origin: "Tyskland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/157602-1.jpg",
    description: "Fruktig, balansert, søt. Fruktkarakter som på nesen."
  },
  {
    id: "product79",
    name: "Blue Nun 2018",
    price: 100,
    type: "Hvitvin",
    purchased: 0,
    origin: "Tyskland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/79101-1.jpg",
    description: "Ren og umiddelbar, preg av blomst og sitrus."
  },
  {
    id: "product80",
    name: "Russian Standard Imperia",
    price: 550,
    type: "Sprit",
    purchased: 0,
    origin: "Russland",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/5600201-1.jpg",
    description: "Ekstremt bløt og myk vodka med lang ettersmak."
  },
  {
    id: "product81",
    name: "Kweichow Moutai",
    price: 3000,
    type: "Sprit",
    purchased: 0,
    origin: "Kina",
    img: "https://bilder.vinmonopolet.no/cache/300x300-0/10777402-1.jpg",
    description:
      "Tørr rik og kompleks. Lang. Kompleks duft av soya, pære, valnøtt og mandler."
  }
];

module.exports = data;
