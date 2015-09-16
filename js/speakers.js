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