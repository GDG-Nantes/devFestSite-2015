'use strict';

devfestApp.factory('SpeakersService', [function () {
    var speakers = [
        {
            "id": "cmottier",
            "topspeaker": true,
            "firstname": "Cyril",
            "lastname": "Mottier",
            "image": "cmottier_360x360.jpeg",
            "category": {
                "class": "mobile",
                "title": "Mobile"
            },
            "ribon": {
                "class": "gde",
                "title": "GDE",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "company": "Capitaine Train",
            "about": "Cyril Mottier is the Android Lead at Capitaine Train and Android Google Developer Expert. Passionate about technology and design, Cyril is an avid lover of Android and a multi-skilled engineer. He is actively involved in the Android community and shares his passion writing blog posts, creating open source libraries and giving talks. His motto: “Do less, but do it insanely great”",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+CyrilMottier/"},
                {"class": "twitter", "link": "https://twitter.com/cyrilmottier"},
                {"class": "github", "link": "https://github.com/cyrilmottier"},
                {"class": "site", "link": "http://www.cyrilmottier.com/"}
            ]
        },
        {
            "id": "eissartial",
            "topspeaker": false,
            "firstname": "Etienne",
            "lastname": "Issartial",
            "image": "commitstrip_360x360.jpeg",
            "category": {
                "class": "discovery",
                "title": "Keynote"
            },
            "company": "CommitStrip",
            "about": "",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+Commitstrip"},
                {"class": "twitter", "link": "https://twitter.com/CommitStrip_fr"},
                {"class": "site", "link": "http://www.commitstrip.com/"}
            ]
        },
        {
            "id": "tguenoux",
            "topspeaker": false,
            "firstname": "Thomas",
            "lastname": "Guenoux",
            "image": "commitstrip_360x360.jpeg",
            "category": {
                "class": "discovery",
                "title": "Keynote"
            },
            "company": "CommitStrip",
            "about": "",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+Commitstrip"},
                {"class": "twitter", "link": "https://twitter.com/CommitStrip_fr"},
                {"class": "site", "link": "http://www.commitstrip.com/"}
            ]
        },
        {
            "id": "fbeaufort",
            "topspeaker": false,
            "firstname": "François",
            "lastname": "Beaufort",
            "category": {
                "class": "mobile",
                "title": "Mobile"
            },
            "image": "fbeaufort_360x360.jpg",
            "ribon": {
                "class": "gdgw",
                "title": "Googler",
                "tile_long": "Googler"
            },
            "company": "Google",
            "about": "",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+FrancoisBeaufort"},
                {"class": "github", "link": "https://github.com/beaufortfrancois"}
            ]
        },
        {
            "id": "gdorne",
            "topspeaker": true,
            "firstname": "Geoffrey",
            "lastname": "Dorne",
            "category": {
                "class": "discovery",
                "title": "UX"
            },
            "image": "gdorne_360x360.jpeg",
            "company": "Design & Human",
            "about": "Je m’appelle Geoffrey Dorne, je suis designer indépendant et fondateur de Design & Human, atelier de design éthique, social et radical.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/116718314329691158716"},
                {"class": "linkedin", "link": "https://fr.linkedin.com/in/geoffreydorne"},
                {"class": "twitter", "link": "http://twitter.com/geoffreydorne"},
                {"class": "site", "link": "http://graphism.fr"},
                {"class": "facebook", "link": "http://facebook.com/geoffreydorne"}
            ]
        },
        {
            "id": "rgoetter",
            "topspeaker": true,
            "firstname": "Raphaël",
            "lastname": "Goetter",
            "category": {
                "class": "web",
                "title": "CSS"
            },
            "image": "rgoetter_360x360.jpeg",
            "company": "Alsacréations",
            "about": "Intégrateur du Dimanche, dompteur de CSS et tripoteur de HTML, créateur de Alsacreations.com, auteur de quelques livres CSS, Alsacien",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+RaphaelGoetter"},
                {"class": "twitter", "link": "https://twitter.com/goetter"},
                {"class": "github", "link": "https://github.com/raphaelgoetter"},
                {"class": "site", "link": "http://www.goetter.fr/"},
                {"class": "linkedin", "link": "https://www.linkedin.com/in/raphaelgoetter"}
            ]
        },
        {
            "id": "fcampoy",
            "topspeaker": true,
            "firstname": "Francesc",
            "lastname": "Campoy Flores",
            "ribon": {
                "class": "google",
                "title": "Google Developer Advocate",
                "link": "https://www.google.com/about/careers/teams/client-facing/dev-rel/",
                "tile_long": "Google Developer Advocate"
            },
            "category": {
                "class": "cloud",
                "title": "Go"
            },
            "image": "fcampoy_360x360.png",
            "company": "Google",
            "about": "Francesc Campoy Flores joined the Go team in 2012 as Developer Programs Engineer.<br>Since then, he has written some considerable didactic resources and traveled the world attending conferences and organizing live courses. He joined Google in 2011 as a backend software engineer working mostly in C++ and Python, but it was with Go that he rediscovered how fun programming can be.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+FrancescCampoyFlores"},
                {"class": "twitter", "link": "http://twitter.com/francesc"},
                {"class": "github", "link": "http://github.com/campoy"},
                {"class": "site", "link": "http://blog.campoy.cat/"},
                {"class": "linkedin", "link": "http://www.linkedin.com/in/campoy"}
            ]
        },
        {
            "id": "smoallic",
            "topspeaker": false,
            "firstname": "Stéphanie",
            "lastname": "Moallic",
            "category": {
                "class": "mobile",
                "title": "Ionic"
            },
            "image": "",
            "company": "B.Sensory",
            "about": "Développeuse informatique depuis plus de 15 ans, avec une prédilection pour le front-end, les trucs pour faire joli et les bonnes pratiques, dans les techno autour de Java et de la JVM voir du web. Passionnée d'informatique mais pas que...",
            "socials": [
                {"class": "twitter", "link": "http://twitter.com/steffy_29"},
                {"class": "github", "link": "http://github.com/Steffy29"}
            ]
        },
        {
            "id": "rmenetrier",
            "topspeaker": false,
            "firstname": "Romain",
            "lastname": "Menetrier",
            "category": {
                "class": "mobile",
                "title": "Mobile"
            },
            "image": "",
            "company": "Makala",
            "about": "Orange Beacon CTO",
            "socials": []
        },
        {
            "id": "cwehrung",
            "topspeaker": false,
            "firstname": "Clément",
            "lastname": "Wehrung",
            "category": {
                "class": "mobile",
                "title": "Mobile"
            },
            "image": "",
            "company": "Fuze",
            "about": "Product Guy & Passionate Developer, Passionate about Tech, Product and UX. Strong Focus on Firebase, iOS, JavaScript (Angular, Backbone), Node. Member of Firebase Experts Program.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+cwehrung"},
                {"class": "twitter", "link": "http://twitter.com/cwehrung"},
                {"class": "github", "link": "http://github.com/iclems"}
            ]
        },
        {
            "id": "pcharriere",
            "topspeaker": false,
            "firstname": "Philippe",
            "lastname": "Charriere",
            "category": {
                "class": "mobile",
                "title": "Mobile"
            },
            "image": "",
            "company": "Centre R&D Nicolas Bourbaki",
            "about": "Le jour: je suis un développeur un peu particulier, je suis Responsable de communication pour un centre de R&D qui incube des startups (et plus particulièrement dans le monde de l'IOT).\nLa nuit: je deviens \"Golo Developer Advocate\" (Golo, le petit langage dynamique pour la JVM qui se fait incuber depuis peu chez Eclipse), mon rôle, évangéliser les geeks et former à Golo :)\nJ’ai aussi le plaisir d’être co-organisateur de la conférence Lyonnaise Mix-IT.",
            "socials": [
                {"class": "twitter", "link": "http://twitter.com/k33g_org"},
                {"class": "github", "link": "http://github.com/k33g"},
                {"class": "site", "link": "http://k33g.github.io/"}
            ]
        },


        {
            "id": "mgruaz",
            "topspeaker": false,
            "firstname": "Manon",
            "lastname": "Gruaz",
            "image": "",
            "category": {
                "class": "discovery",
                "title": "Discovery"
            },
            "company": "ARCBEES",
            "about": "Branding goddess and Design adventuress who believe in changing the world by EMotional and kick ass designs. Meaning is my Quest, Be inside a user’s brain is my job.\nBorn as French, Raised as a Citizen of the world and Sarcastic by design.",
            "socials": [
                {"class": "twitter", "link": "http://twitter.com/manongruaz"},
                {"class": "site", "link": "http://manongruaz.com"}
            ]
        },
        {
            "id": "fcalzada",
            "topspeaker": false,
            "firstname": "Franck",
            "lastname": "Calzada",
            "image": "",
            "category": {
                "class": "discovery",
                "title": "Discovery"
            },
            "company": "INTUITIVE ROBOTS",
            "about": "Fondateur et dirigeant d'Intuitive Robots, une jeune startup Nantaise, dont la mission est de concevoir et réaliser des applications pour robots humanoïdes, tels que les fameux robots NAO et PEPPER, le tout dernier robot d'Aldebaran Robotics. Notre but: Donner une étincelle de vie aux robots afin de les accueillir dans nos vies.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+Intuitive-robots"},
                {"class": "twitter", "link": "http://twitter.com/IntuitiveRobots"},
                {"class": "site", "link": "http://www.intuitive-robots.com"}
            ]
        },
        {
            "id": "mchartier",
            "topspeaker": false,
            "firstname": "Mathieu",
            "lastname": "Chartier",
            "image": "",
            "category": {
                "class": "discovery",
                "title": "Discovery"
            },
            "company": "Internet-Formation",
            "about": "Mathieu Chartier est un jeune entrepreneur et formateur web basé à Poitiers.\nPassionné par le webmarketing et le développement web (PHP et Javascript/jQuery notamment), il s'est surtout spécialisé dans le référencement web et les réseaux sociaux au travers de différents livres qu'il a rédigés ces dernières années, notamment au côté d'Alexandra Martin (Miss SEO Girl) et d'Olivier Andrieu.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+MathieuChartierSEO"},
                {"class": "twitter", "link": "https://twitter.com/Formation_web"},
                {"class": "site", "link": "http://blog.internet-formation.fr"}
            ]
        },
        {
            "id": "dcavailles",
            "topspeaker": false,
            "firstname": "Damien",
            "lastname": "Cavaillès",
            "image": "",
            "category": {
                "class": "discovery",
                "title": "Discovery"
            },
            "company": "Tripndrive",
            "about": "Je suis passionné par la mobilité et ses nouveaux usages et en particulier l'interaction avec les objets connectés.\nJe suis également organisateur du Startup Weekend Lille \"Maker Edition\" et Facilitateur Startup Weekend.\n=D",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/thedamfr"}
            ]
        },
        {
            "id": "tleriche",
            "topspeaker": false,
            "firstname": "Thierry",
            "lastname": "Leriche",
            "image": "",
            "category": {
                "class": "discovery",
                "title": "Discovery"
            },
            "company": "ICAUDA",
            "about": "Je suis consultant freelance avec une quinzaine d'années d'expérience. J’interviens principalement sur des projets Web JEE Agile sur de l’architecture, du développement et du team lead. \n\nJe m’investis dans la formation des plus jeunes mais aussi de mes collègues et amis. Je suis d’ailleurs professeur de Génie Logiciel à l'ESIEA et coach sur des projets de formation humaine. \n\nQuand j'ai un peu de temps, entre deux biberons, je suis aussi rédacteur (cf. mes articles, blogs, mémentos, etc.) pour la communauté Developpez.com et le magazine Programmez. Et quand j'ai vraiment du temps, vous pouvez m'entendre en tant qu'orateur (Conférences, JUG, Podcast, etc.)",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/thierryleriche"},
                {"class": "linkedin", "link": "https://fr.linkedin.com/in/thierryler"}
            ]
        },


        {
            "id": "btalmard",
            "topspeaker": false,
            "firstname": "Benjamin",
            "lastname": "Talmard",
            "image": "",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "Microsoft France",
            "about": "En tant que conseiller technologique sur Microsoft Azure dans l'entité « Developers Experience & Evangelism » de Microsoft France, Benjamin est en charge de l'évangélisation de la stack Web et Cloud de Microsoft. Les architectures Web sur Microsoft Azure et le Framework ASP.NET 5 sont donc les sujets sur lequel il passe son temps en ce moment.",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/benjiiim"},
                {"class": "github", "link": "https://github.com/Benjiiim"}
            ]
        },
        {
            "id": "dgageot",
            "topspeaker": false,
            "firstname": "David",
            "lastname": "Gageot",
            "image": "",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "",
            "about": "",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+DavidGageot/"},
                {"class": "twitter", "link": "https://twitter.com/dgageot"},
                {"class": "github", "link": "https://github.com/dgageot"},
                {"class": "site", "link": "http://blog.javabien.net"}
            ]
        },
        {
            "id": "lchampenois",
            "topspeaker": false,
            "firstname": "Ludovic",
            "lastname": "Champenois",
            "image": "",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "ribon": {
                "class": "gde",
                "title": "GDE",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "company": "Google Inc.",
            "about": "Tech Lead, Manager Google Cloud Platform, Java.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+LudovicChampenois/"},
                {"class": "twitter", "link": "https://twitter.com/ludoch"},
                {"class": "github", "link": "https://github.com/ludoch"}
            ]
        },
        {
            "id": "blegras",
            "topspeaker": false,
            "firstname": "Bastien",
            "lastname": "Legras",
            "image": "",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "ribon": {
                "class": "gde",
                "title": "GDE",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "company": "Google Inc.",
            "about": "",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/bastienlegras"},
                {"class": "linkedin", "link": "https://fr.linkedin.com/pub/bastien-legras/a/957/a87"}
            ]
        },
        {
            "id": "rantoine",
            "topspeaker": false,
            "firstname": "Antoine",
            "lastname": "Richard",
            "image": "",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "Restlet",
            "about": "Antoine est \"Code Rider\" chez Restlet où il implémente des trucs sympas sur APISpark, la plateforme d’API as a Service. Il développe des applications web de manière agile depuis plus de 10 ans en Java, Javascript et Ruby. Depuis quelques années il prend plaisir à partager ses expériences dans divers rassemblements de développeurs.",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/richard_antoine"},
                {"class": "github", "link": "https://github.com/antoine-richard"}
            ]
        },

        {
            "id": "mlux",
            "topspeaker": false,
            "firstname": "Matthieu",
            "lastname": "Lux",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "Zenika",
            "about": "Développeur, formateur et responsable de l'offre Web au sein de l'agence lyonnaise de Zenika.\n\nAprès une solide expérience dans le monde Java, je suis focalisé aujourd'hui sur le monde du Web et du JavaScript. Plus précisément, mes technologies de prédilection sont actuellement Angular, Gulp, Yeoman, Node et React.\n\nJ'ai également donné un certain nombre de talks sur Angular au MixIt, mais aussi au DevoxxFR et même au [ngEurope](https://www.youtube.com/watch?v=Mk2WwSxK218)\n\nJ'organise également le LyonJS, le meetup JavaScript de Lyon [http://www.meetup.com/LyonJS/](http://www.meetup.com/LyonJS/)\n\nJ'ai enfin crée un générateur Yeoman [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) qui propose le démarrage de projets basées sur les technologies Angular & Gulp.",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/swiip"},
                {"class": "github", "link": "https://github.com/swiip"}
            ]
        },
        {
            "id": "sdutton",
            "topspeaker": false,
            "firstname": "Sam",
            "lastname": "Dutton",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "ribon": {
                "class": "google",
                "title": "Google Developer Advocate",
                "link": "https://www.google.com/about/careers/teams/client-facing/dev-rel/",
                "tile_long": "Google Developer Advocate"
            },
            "company": "Google Inc.",
            "about": "Sam Dutton @sw12 is a Developer Advocate for Google. He publishes the free audio/video/realtime newsletter http://www.medianews.me and maintains http://www.simpl.info, which provides simplest possible examples of HTML, CSS and JavaScript.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+samdutton"},
                {"class": "twitter", "link": "https://twitter.com/sw12"},
                {"class": "github", "link": "https://github.com/samdutton"},
                {"class": "site", "link": "http://www.samdutton.com/"}
            ]
        },
        {
            "id": "emargraff",
            "topspeaker": false,
            "firstname": "Etienne",
            "lastname": "Margraff",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "Microsoft",
            "about": "Je fais du dev depuis plusieurs années et je suis un geek passionné par la techno. ;-)\nJe m'amuse entre autres avec HTML5, JavaScript, CSS, Visual Studio, Cordova et la mobilité en général. \nJ'ai co-créé de l’outil open-source Vorlon.js (http://www.vorlonjs.io), un outil cross-plateformes pour débugger le web sur mobile.\n\nJe touche aussi un peu à la 3D avec une contribution pour BabylonJS (www.babylonjs.com). \n\nJe suis speaker dans plusieurs événéments comme les TechDays, la DroidCon, des meetups, la Kiwi Party, etc.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+EtienneMargraff"},
                {"class": "twitter", "link": "https://twitter.com/meulta"},
                {"class": "github", "link": "https://github.com/meulta"},
                {"class": "site", "link": "http://blogs.msdn.com/emargraff"}
            ]
        },
        {
            "id": "mbynens",
            "topspeaker": false,
            "firstname": "Mathias",
            "lastname": "Bynens",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "VOF Qiwi.be",
            "about": "Mathias is a Belgian web standards enthusiast. He likes HTML, CSS, JavaScript, Unicode, performance, and security. At Opera Software he’s a member of the Developer Relations team.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/u/0/+mathiasbynens/posts"},
                {"class": "twitter", "link": "https://twitter.com/mathias"},
                {"class": "github", "link": "https://github.com/mathiasbynens"},
                {"class": "site", "link": "https://mathiasbynens.be/"}
            ]
        },
        {
            "id": "mancelin",
            "topspeaker": false,
            "firstname": "Mathieu",
            "lastname": "Ancelin",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "SERLI",
            "about": "Mathieu ANCELIN est développeur à SERLI, spécialisé dans la programmation web et les frameworks web modernes avec un bon background autour des technologies Java EE. Mathieu est impliqué dans plusieurs projets open-source comme GlassFish et Weld, et en lead également quelques un comme ReactiveCouchbase et Weld-OSGi; Il est membre de l'expert group de la JSR-346, de la JSR 371 et fait partie de l'équipe du Poitou-Charentes JUG.",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/TrevorReznik"},
                {"class": "github", "link": "https://github.com/mathieuancelin"},
                {"class": "site", "link": "http://reactivecouchbase.org/"}
            ]
        },
        {
            "id": "tchatel",
            "topspeaker": false,
            "firstname": "Thierry",
            "lastname": "Chatel",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "ribon": {
                "class": "gde",
                "title": "GDE",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "company": "",
            "about": "Je suis consultant et formateur, passionné par l'achitecture des applications web, et spécialiste de JavaScript et du framework AngularJS.\nEt Google Developer Expert sur AngularJS depuis 2014.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/u/0/+ThierryChatel"},
                {"class": "twitter", "link": "https://twitter.com/ThierryChatel"},
                {"class": "github", "link": "https://github.com/tchatel"}
            ]
        },

        {
            "id": "alexismp",
            "topspeaker": false,
            "firstname": "Alexis",
            "lastname": "Moussine-pouchkine",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "Google Inc.",
            "about": "Google Developer Relations",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/u/0/+AlexisMP"},
                {"class": "twitter", "link": "https://twitter.com/alexismp"},
                {"class": "site", "link": "http://cloud.google.com"}
            ]
        },
        {
            "id": "hgonzalez",
            "topspeaker": false,
            "firstname": "Horacio",
            "lastname": "Gonzalez",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "Cityzen Data",
            "about": "Spaniard lost in Brittany, unconformist coder, Java craftsman, dreamer and all-around geek.\n Works at @CityzenData. Founder & leader of @FinistJUG & @FinistGDG",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/u/0/100578619938900089909"},
                {"class": "twitter", "link": "https://twitter.com/LostInBrittany"}
            ]
        },
        {
            "id": "wchegham",
            "topspeaker": false,
            "firstname": "Wassim",
            "lastname": "Chegham",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "ribon": {
                "class": "gde",
                "title": "GDE",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "company": "SII IDF",
            "about": "Front-stack JavaScript Consultant @SII_IDF • Google Developer Expert for AngularJS • Author • Speaker • Trainer • Hacker • Photographer",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+WassimCheghamJavaScript/"},
                {"class": "twitter", "link": "https:/twitter.com/manekinekko"},
                {"class": "github", "link": "https:/github.com/manekinekko"},
                {"class": "site", "link": "http://wassimchegham.com"}
            ]
        },
        {
            "id": "jpgouigoux",
            "topspeaker": false,
            "firstname": "Jean-Philippe",
            "lastname": "Gouigoux",
            "image": "",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "MVP",
            "about": "JP Gouigoux est CTO d'un éditeur de logiciel, pour lequel il organise une équipe de 50 personnes autour d'une refonte de progiciel en architecture microservices. Auteur de quelques livres, blogueur, MVP depuis 4 ans dans la spécialité Intégration, il intervient régulièrement en universités, écoles ou conférences. Sa spécialité est l'urbanisation des systèmes logiciels, au carrefour de l'architecture et de l'agilité. Lorsqu'il n'est pas derrière un clavier, JP est le plus souvent sur un vélo, en train de bricoler ou de faire du Lego.",
            "socials": [
                {"class": "twitter", "link": "http://twitter.com/jpgouigoux"},
                {"class": "github", "link": "http://github.com/jp-gouigoux"},
                {"class": "site", "link": "http://gouigoux.com/blog-fr"}
            ]
        },
        {
            "id": "acatelandaxel",
            "topspeaker": false,
            "firstname": "Axel",
            "lastname": "Cateland",
            "image": "",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "Santéclair",
            "about": "Électrotechnicien de formation Axel s'engage à 17 ans dans la Marine Nationale, s'échappe de son sous-marin nucléaire 3 ans plus tard, redécouvre le développement à 24 ans, développeur back (JAVA, PHP) pendant quelques années il s'enfuit cette fois définitivement de l'armée en 2012 pour se lancer dans une carrière de développeur front. Sa seule constance finalement c'est de savoir apprécier une bonne bière.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+axelcateland"},
                {"class": "twitter", "link": "https://twitter.com/catelandaxel"}
            ]
        },
        {
            "id": "dgirard",
            "topspeaker": false,
            "firstname": "Didier",
            "lastname": "Girard",
            "category": {
                "class": "cloud",
                "title": "BigQuery"
            },
            "image": "dgirard_360x360.jpg",
            "company": "Sfeir",
            "about": "Directeur des Opérations de SFEIR. Expert sur les technologies Cloud de Google. Bonne connaissance de Java. A fait une thèse sur ce que l'on appelle maintenant le machine learning.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+DidierGirard"},
                {"class": "twitter", "link": "https://twitter.com/@DidierGirard"}
            ]
        }

    ];


    for (var speakerIndex = 0; speakerIndex < speakers.length; speakerIndex++) {
        var speaker = speakers[speakerIndex];
        if (speaker.socials.length > 0) {
            for (var socialIndex = 0; socialIndex < speaker.socials.length; socialIndex++) {
                var social = speaker.socials[socialIndex];
                social.svg = "/img/sprites/sprites.svg#icon-" + social.class;
            }
        }
    }

    return speakers;
}]);

/**
 * Sessions controller
 */
devfestApp.controller('SpeakersCtrl', ['$scope', 'SpeakersService', function ($scope, speakerService) {

    var isTopSpeaker = function (speaker) {
        //return true;
        return speaker.topspeaker;
    };
    $scope.speakers = speakerService.filter(isTopSpeaker);

}]);