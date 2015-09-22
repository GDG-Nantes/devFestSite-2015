'use strict';

devfestApp.factory('SpeakersService', [function () {
    var speakers = [
        {
            "id": "cmottier",
            "topspeaker": true,
            "firstname": "Cyril",
            "lastname": "Mottier",
            "image": "cmottier_360x360.jpg",
            "category": {
                "class": "mobile",
                "title": "Mobile"
            },
            "ribon": {
                "class": "gde",
                "title": "Google Developer Expert",
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
            "image": "commitstrip_360x360.jpg",
            "category": {
                "class": "discovery",
                "title": "Keynote"
            },
            "company": "CommitStrip",
            "about": "Etienne Issartial est le dessinateur de CommitStrip, chaque jour il met en scène et dessine la strip que son ami Thomas Gx écrit sur la vie des codeur. Après plus de 700 strips il est tomber dans le monde du code pour de bon (sans jamais avoir codé une ligne de sa vie). En 2004 il quitte l'Ecole des Beaux-Arts pour se concentrer sur le dessin de presse et la BD. Depuis Etienne dessine tous les jours pour CommitStrip et d'autres projets en freelance.",
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
            "lastname": "Gx",
            "image": "tguenoux_360x360.jpeg",
            "category": {
                "class": "discovery",
                "title": "Keynote"
            },
            "company": "CommitStrip",
            "about": "Thomas Gx est le fondateur de CommitStrip, le blog BD bien connu des codeurs : c'est lui qui écrit chaque jour depuis 2012 une strip sur la vie quotidienne des codeurs. Pionner du développement des réseaux sociaux en France dès 2006 en lançant Cancoon, Thomas co-fonde en 2007 l'agence KRDS, première agence spécialisée en social media marketing et aujourd'hui leader en Europe et en Asie. Il y occupe aujourd'hui la Direction de la Production, dirigeant un studio primé et une équipe de développeurs web ayant produit près de 2000 projets.",
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
            "company": "Google",
            "about": "François Beaufort travaille chez Google pour l'équipe Chrome Apps",
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
            "image": "gdorne_360x360.jpg",
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
            "image": "rgoetter_360x360.jpg",
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
            "image": "smoallic_360x360.jpg",
            "company": "B.Sensory",
            "about": "Développeuse informatique depuis plus de 15 ans, avec une prédilection pour le front-end, les trucs pour faire joli et les bonnes pratiques, dans les techno autour de Java et de la JVM voir du web. Passionnée d'informatique mais pas que...",
            "socials": [
                {"class": "twitter", "link": "http://twitter.com/steffy_29"},
                {"class": "github", "link": "http://github.com/Steffy29"}
            ]
        },
        {
            "id": "aneveu",
            "topspeaker": false,
            "firstname": "Audrey",
            "lastname": "Neveu",
            "category": {
                "class": "mobile",
                "title": "Ionic"
            },
            "image": "aneveu.jpg",
            "company": "GeoKaps",
            "about": "Software Engineer at GeoKaps, Devoxx4Kids Hacktivist and conferences addict",
            "socials": [
                {"class": "twitter", "link": "http://twitter.com/Audrey_Neveu"},
                {"class": "linkedin", "link": "https://fr.linkedin.com/in/audreyneveu"}
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
            "image": "rmenetrier.jpg",
            "company": "Makala",
            "about": "Orange Beacon CTO",
            "socials": []
        },
        {
            "id": "cwehrung",
            "topspeaker": false,
            "firstname": "Clément",
            "lastname": "Wehrung",
            "ribon": {
                "class": "gde",
                "title": "Google Developer Expert",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "category": {
                "class": "mobile",
                "title": "Mobile"
            },
            "image": "cwehrung_360x360.png",
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
            "image": "pcharriere_360x360.jpg",
            "company": "Centre R&D Nicolas Bourbaki",
            "about": "Le jour: je suis un développeur un peu particulier, je suis Responsable de communication pour un centre de R&D qui incube des startups (et plus particulièrement dans le monde de l'IOT).\nLa nuit: je deviens \"Golo Developer Advocate\" (Golo, le petit langage dynamique pour la JVM qui se fait incuber depuis peu chez Eclipse), mon rôle, évangéliser les geeks et former à Golo :)\nJ’ai aussi le plaisir d’être co-organisateur de la conférence Lyonnaise Mix-IT.",
            "socials": [
                {"class": "twitter", "link": "http://twitter.com/k33g_org"},
                {"class": "github", "link": "http://github.com/k33g"},
                {"class": "site", "link": "http://k33g.github.io/"}
            ]
        },
        {
            "id": "xhallade",
            "topspeaker": false,
            "firstname": "Xavier",
            "lastname": "Hallade",
            "ribon": {
                "class": "gde",
                "title": "Google Developer Expert",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "category": {
                "class": "mobile",
                "title": "Mobile"
            },
            "image": "xhallade_360x360.jpg",
            "company": "Intel Corporation",
            "about": "Developer Evangelist à Intel et Google Developer Expert pour Android. Il est en charge d'aider les développeurs d'Applications et librairies Android à améliorer le support des architectures x86(_64) et autres technologies développées par Intel.",
            "socials": [
                {"class": "linkedin", "link": "https://fr.linkedin.com/in/xavierhallade"},
                {"class": "twitter", "link": "https://twitter.com/ph0b"}
            ]
        },


        {
            "id": "mgruaz",
            "topspeaker": false,
            "firstname": "Manon",
            "lastname": "Gruaz",
            "image": "mgruaz_360x360.png",
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
            "image": "fcalzada_360x360.png",
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
            "image": "mchartier_360x360.jpg",
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
            "image": "dcavailles_360x360.jpg",
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
            "image": "tleriche_360x360.jpg",
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
        /*
        {
            "id": "acharbonnier",
            "topspeaker": false,
            "firstname": "Anthony",
            "lastname": "Charbonnier",
            "category": {
                "class": "discovery",
                "title": "Discovery"
            },
            "image": "acharbonnier.jpg",
            "company": "Intel Corporation",
            "about": "Key software account manager & Startup discovery",
            "socials": [
                {"class": "linkedin", "link": "https://fr.linkedin.com/pub/anthony-charbonnier/13/89b/b94"}
            ]
        },
        */
        {
            "id": "btalmard",
            "topspeaker": false,
            "firstname": "Benjamin",
            "lastname": "Talmard",
            "image": "btalmard_360x360.jpg",
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
            "ribon": {
                "class": "gde",
                "title": "Google Developer Expert",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "image": "dgageot_360x360.jpg",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "",
            "about": "David Gageot est développeur indépendant.<br>Sa passion ? L'écriture de logiciels pointus mais simples.<br>Il participe à des projets Java depuis 1998, comme responsable R&D chez l'éditeur Adesoft, comme expert Java et Scrum Master.<br>Depuis 2010, il a pris le leadership sur le projet open-source Infinitest.",
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
            "image": "lchampenois_360x360.jpg",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "Google",
            "about": "Ludo is a Tech Lead and Manager in the Google Cloud platform, leading the runtimes (Java, Python, GO, PHP, Node.js) and the Developer SDK.",
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
            "image": "blegras.jpg",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "Google",
            "about": "Bastien Legras a rejoint Google for Work en 2010 et assume aujourd'hui la responsabilité technique de l'offre Google Cloud Platform (IaaS/PaaS) en Europe du Sud.<br>Spécialiste des architectures Cloud, il accompagne les clients Google for Work de toutes tailles pour concevoir des solutions innovantes, en exploitant les nouvelles technologies et architectures Cloud comme le BigData, les Mobiles Backend, le Real Time Bidding, ...",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/bastienlegras"},
                {"class": "linkedin", "link": "https://fr.linkedin.com/pub/bastien-legras/a/957/a87"}
            ]
        },
        {
            "id": "arichard",
            "topspeaker": false,
            "firstname": "Antoine",
            "lastname": "Richard",
            "image": "arichard_360x360.jpg",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "Restlet",
            "about": "Antoine est \"Code Rider\" chez <a href='http://restlet.com/' target='_blank'>Restlet</a> où il implémente des trucs sympas sur APISpark, la plateforme d’API as a Service. Il développe des applications web de manière agile depuis plus de 10 ans en Java, Javascript et Ruby. Depuis quelques années il prend plaisir à partager ses expériences dans divers rassemblements de développeurs.",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/richard_antoine"},
                {"class": "github", "link": "https://github.com/antoine-richard"}
            ]
        },
        {
            "id": "mboillod",
            "topspeaker": false,
            "firstname": "Manuel",
            "lastname": "Boillod",
            "image": "mboillod_360x360.jpg",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "Restlet",
            "about": "Manuel est Code Artist chez <a href='http://restlet.com/' target='_blank'>Restlet</a>. Il aime par dessus tout le beau code et tout ce qui à attrait aux déploiement continu. pratiques qu’il applique lors du développement de la plateforme d’hébergement d’API REST et d’API management “APISpark” de Restlet. Manuel est également JUG leader à Nantes (<a href='http://www.nantesjug.org/' target='_blank'>nantesjug.org</a>) et aime échanger avec la communauté sur les différentes solutions techniques.",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/mboillod"},
                {"class": "linkedin", "link": "https://fr.linkedin.com/in/manuelboillod"}
            ]
        },
        {
            "id": "fxrousselot",
            "topspeaker": false,
            "firstname": "François-Xavier",
            "lastname": "Rousselot",
            "image": "fxrousselot.jpg",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "",
            "about": "François-Xavier Rousselot est Data Innovation and Machine Learning consultant.  He leverages his 4 years of experience in managing Machine Learning and Datascience projects to help executives find the right data opportunities for their international companies. Having both a strong business and technical experience, he has always been able to detect new opportunities, design and successfully implement solutions with the latest technologies.",
            "socials": [
                {"class": "linkedin", "link": "https://fr.linkedin.com/in/francoisxavierrousselot"}
            ]
        },

        {
            "id": "mlux",
            "topspeaker": false,
            "firstname": "Matthieu",
            "lastname": "Lux",
            "image": "mlux_360x360.jpg",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "Zenika",
            "about": "Développeur, formateur et responsable de l'offre Web au sein de l'agence lyonnaise de Zenika.\n\nAprès une solide expérience dans le monde Java, je suis focalisé aujourd'hui sur le monde du Web et du JavaScript. Plus précisément, mes technologies de prédilection sont actuellement Angular, Gulp, Yeoman, Node et React.\n\nJ'ai également donné un certain nombre de talks sur Angular au MixIt, mais aussi au DevoxxFR et même au <a href='https://www.youtube.com/watch?v=Mk2WwSxK218' target='_blank'>[ngEurope]</a>\n\nJ'organise également le <a href='http://www.meetup.com/LyonJS/' target='_blank'>LyonJS</a>, le meetup JavaScript de Lyon.\n\nJ'ai enfin crée un générateur Yeoman <a href='https://github.com/Swiip/generator-gulp-angular' target='_blank'>[generator-gulp-angular]</a> qui propose le démarrage de projets basées sur les technologies Angular & Gulp.",
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
            "image": "sdutton_360x360.jpg",
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
            "company": "Google",
            "about": "Sam Dutton <a href='https://twitter.com/sw12' target='_blank'>@sw12</a> is a Developer Advocate for Google. He publishes the free audio/video/realtime newsletter <a href='http://www.medianews.me' target='_blank'>http://www.medianews.me</a> and maintains <a href='http://www.simpl.info' target='_blank'>http://www.simpl.info</a>, which provides simplest possible examples of HTML, CSS and JavaScript.",
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
            "image": "emargraff.jpg",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "Microsoft",
            "about": "Je fais du dev depuis plusieurs années et je suis un geek passionné par la techno. ;-)\nJe m'amuse entre autres avec HTML5, JavaScript, CSS, Visual Studio, Cordova et la mobilité en général. \nJ'ai co-créé de l’outil open-source <a href='http://www.vorlonjs.io' target='_blank'>Vorlon.js</a>, un outil cross-plateformes pour débugger le web sur mobile.\n\nJe touche aussi un peu à la 3D avec une contribution pour <a href='http://www.babylonjs.com' target='_blank'>BabylonJS</a>. \n\nJe suis speaker dans plusieurs événéments comme les TechDays, la DroidCon, des meetups, la Kiwi Party, etc.",
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
            "image": "mbynens_360x360.jpg",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "Opera Software",
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
            "image": "mancelin_360x360.jpg",
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
            "image": "tchatel_360x360.jpg",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "ribon": {
                "class": "gde",
                "title": "Google Developer Expert",
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
            "id": "amoussine-pouchkine",
            "topspeaker": false,
            "firstname": "Alexis",
            "lastname": "Moussine-pouchkine",
            "image": "amoussine-pouchkine_360x360.jpg",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "Google",
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
            "image": "hgonzalez_360x360.jpg",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "company": "Cityzen Data",
            "about": "Spaniard lost in Brittany, unconformist coder, Java craftsman, dreamer and all-around geek.\n Works at <a href='https://twitter.com/CityzenData' target='_blank'>@CityzenData</a>. Founder & leader of <a href='https://twitter.com/FinistJUG' target='_blank'>@FinistJUG</a> & <a href='https://twitter.com/search?q=@FinistGDG' target='_blank'>@FinistGDG</a>",
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
            "image": "wchegham_360x360.jpg",
            "category": {
                "class": "web",
                "title": "Web"
            },
            "ribon": {
                "class": "gde",
                "title": "Google Developer Expert",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "company": "SII IDF",
            "about": "Front-stack JavaScript Consultant <a href='https://twitter.com/SII_IDF' target='_blank'>@SII_IDF</a> • Google Developer Expert for AngularJS • Author • Speaker • Trainer • Hacker • Photographer",
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
         "image": "jpgouigoux.jpg",
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
            "id": "fkelly",
            "topspeaker": false,
            "firstname": "Frank",
            "lastname": "Kelly",
            "image": "fkelly.jpg",
            "category": {
                "class": "cloud",
                "title": "Cloud"
            },
            "company": "",
            "about": "Frank Kelly is a data scientist at Analytics SEO in London.  With a degree from the University of Cambridge, he co-founded MathSight Ltd where he was responsible for the machine learning pipelines and data science.",
            "socials": [
                {"class": "linkedin", "link": "https://www.linkedin.com/profile/view?id=16668039"}
            ]
        },
        {
            "id": "acateland",
            "topspeaker": false,
            "firstname": "Axel",
            "lastname": "Cateland",
            "image": "acateland.jpg",
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
            "ribon": {
                "class": "gde",
                "title": "Google Developer Expert",
                "link": "https://developers.google.com/experts/",
                "tile_long": "Google Developer Expert"
            },
            "image": "dgirard_360x360.jpg",
            "company": "Sfeir",
            "about": "Directeur des Opérations de SFEIR. Expert sur les technologies Cloud de Google. Bonne connaissance de Java. A fait une thèse sur ce que l'on appelle maintenant le machine learning.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/+DidierGirard"},
                {"class": "twitter", "link": "https://twitter.com/@DidierGirard"}
            ]
        },


        {
            "id": "cbossard",
            "topspeaker": false,
            "firstname": "Cécilia",
            "lastname": "Bossard",
            "image": "cbossard.png",
            "category": {
                "class": "discovery",
                "title": "Discovery"
            },
            "company": "",
            "about": "ai un but : aider les équipes à produire des logiciels utiles aux utilisateurs finaux. Pour cela, je les accompagne en intégrant les équipes de développement ou en les assistant dans leur transition agile. Impliquée dans la communauté agile nantaise, je participe également à l'organisation de l'Agile Tour de Nantes. Femme développeuse, je suis également co-fondatrice du groupe <a href='http://nantes-wit.fr/' target='_blank'>Women In Technology à Nantes</a>, dont le but est de promouvoir les femmes dans la technique. Dans ce cadre, je participe également aux initiations à la programmation à destination des enfants avec des initiatives telles que les <a href='http://www.devoxx4kids.org/france/evenements/devoxx4kids-nantes/' target='_blank'>Devoxx4Kids</a> ou les <a href='https://nantescodinggouters.wordpress.com/' target='_blank'>Coding Goûters à Nantes</a>.",
            "socials": [
                {"class": "twitter", "link": "https://twitter.com/ceciliaBossard"},
                {"class": "site", "link": "https://javagile.wordpress.com/"}
            ]
        },
        {
            "id": "jpalies",
            "topspeaker": false,
            "firstname": "Jean",
            "lastname": "Paliès",
            "image": "jpalies.jpg",
            "category": {
                "class": "discovery",
                "title": "Discovery"
            },
            "company": "",
            "about": "Développeur Java, Angular JS le jour, bidouilleur la nuit. Après quelques années de bricolage et découvertes, j'ai repris les bases de la programmation il y a 15 ans avec Scratch, que je réutilise avec bonheur maintenant dans les <a href='http://www.devoxx4kids.org/france/evenements/devoxx4kids-nantes/' target='_blank'>Devoxx4Kids</a> ou les <a href='https://nantescodinggouters.wordpress.com/' target='_blank'>Coding Goûters à Nantes</a>, dont je suis cofondateur. Je suis aussi membre et confondateur des <a href='http://nantes-wit.fr/' target='_blank'>Women In Technology à Nantes</a>.",
            "socials": [
                {"class": "google-plus", "link": "https://plus.google.com/u/0/106552014287288043542/"},
                {"class": "twitter", "link": "https://twitter.com/jpalies"},
                {"class": "github", "link": "https://github.com/JeanPalies"},
                {"class": "site", "link": "https://javagile.wordpress.com/"}
            ]
        }
    ];

    speakers = _.chain(speakers).forEach(function(speaker){
        _.forEach(speaker.socials, function(social){
            social.svg = "/img/sprites/sprites.svg#icon-" + social.class;
        });
    }).sortBy(function(speaker){
        return speaker.firstname;
    }).value();

   

    return speakers;
}]);

/**
 * Sessions controller
 */
devfestApp.controller('SpeakersCtrl', ['$scope', 'SpeakersService', function ($scope, speakerService) {

    var isTopSpeaker = function (speaker) {
        return true;
        //return speaker.topspeaker;
    };
    $scope.speakers = speakerService.filter(isTopSpeaker);

}]);