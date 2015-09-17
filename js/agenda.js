'use strict';

devfestApp.factory('AgendaService', ['SpeakersService', function (speakerService) {
    var agenda = {
        categories: {
            android: "Mobile et Objets Connectés"
            , web: "Web"
            , cloud: "Cloud et Big Data"
            , decouverte: "Découverte"
            , codelabweb: "CodeLab Web"
            , codelabcloud: "CodeLab Cloud"
        },
        hours: {
            "h01": {
                "id": "h01",
                "hourStart": "07",
                "minStart": "30",
                "hourEnd": "08",
                "minEnd": "30"
            },
            "h02": {
                "id": "h02",
                "hourStart": "08",
                "minStart": "30",
                "hourEnd": "09",
                "minEnd": "30"
            },
            "h03": {
                "id": "h03",
                "hourStart": "09",
                "minStart": "40",
                "hourEnd": "10",
                "minEnd": "30"
            },
            "h04": {
                "id": "h04",
                "hourStart": "10",
                "minStart": "40",
                "hourEnd": "11",
                "minEnd": "30"
            },
            "h05": {
                "id": "h05",
                "hourStart": "11",
                "minStart": "40",
                "hourEnd": "12",
                "minEnd": "30"
            },
            "h06": {
                "id": "h06",
                "hourStart": "12",
                "minStart": "30",
                "hourEnd": "14",
                "minEnd": "00"
            },
            "h07": {
                "id": "h07",
                "hourStart": "14",
                "minStart": "00",
                "hourEnd": "14",
                "minEnd": "50"
            },
            "h08": {
                "id": "h08",
                "hourStart": "15",
                "minStart": "00",
                "hourEnd": "15",
                "minEnd": "50"
            },
            "h09": {
                "id": "h09",
                "hourStart": "15",
                "minStart": "50",
                "hourEnd": "16",
                "minEnd": "40"
            },
            "h10": {
                "id": "h10",
                "hourStart": "16",
                "minStart": "40",
                "hourEnd": "17",
                "minEnd": "30"
            },
            "h11": {
                "id": "h11",
                "hourStart": "17",
                "minStart": "40",
                "hourEnd": "18",
                "minEnd": "30"
            },
            "h12": {
                "id": "h12",
                "hourStart": "18",
                "minStart": "30",
                "hourEnd": "22",
                "minEnd": "30"
            },
            "h13": {
                "id": "h13",
                "hourStart": "09",
                "minStart": "40",
                "hourEnd": "11",
                "minEnd": "30"
            },
            "h14": {
                "id": "h14",
                "hourStart": "14",
                "minStart": "00",
                "hourEnd": "15",
                "minEnd": "50"
            },
            "h15": {
                "id": "h15",
                "hourStart": "16",
                "minStart": "40",
                "hourEnd": "18",
                "minEnd": "30"
            }
        },
        sessions: [
            {
                "id": "s3",
                "title": "Android Auto : Rolling Droid gather no moss",
                "confRoom": "Salle Bretagne",
                "desc": "Android Auto est une nouvelle extension de la plateforme Android. A l'image d'Android Wear, il s'agit d'une interface pour proposer des notifications et des interactions rapides ou faibles à l'utilisateur. La particularité est que les traditionnellement flexibles guidelines de Google sont devenues des contraintes fermes. Nous vous proposons ici une analyse complète de ce nouvel horizon pour Android.",
                "type": "discovery",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h11",
                "video": "",
                "slides": "",
                "speakers": [
                    "dcavailles"
                ]
            },
            {
                "id": "s4",
                "title": "Hand's on Web Components with Polymer 1.0",
                "confRoom": "",
                "desc": "The W3C has been working on a Web Components standard for almost three years, but it is still a work in progress. But polyfills like allows current developers to use Web Components today, and incorporate to their apps widgets from any library of web components. <br><br>The best known of these libraries is Google's Polymer. In Google IO 2015 conference, Google has at last released the long awaited version 1.0 of Polymer, making it even faster, more stable and at least suitable for \"serious\" applications. In this lab you will use Polymer 1.0 with Material Design Polymer Elements to design and develop a web application using web components.<br><br>You will learn to use the following technologies:<ul><li> Polymer and Web Components (for mobile and desktop)</li><li> The Paper Elements for Polymer (material design)</li></ul><br><br>Mandatory Installs prior to lab:<ul><li> npm </li><li> bower</li><li> your favorite HTML/CSS/JS IDE (I suggest Sublime Text)</li></ul>",
                "type": "codelab-web",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h13",
                "video": "",
                "slides": "",
                "speakers": [
                    "hgonzalez"
                ]
            },
            {
                "id": "s5",
                "title": "TBD",//real sense
                "confRoom": "Salle Graslin",
                "desc": "",
                "type": "discovery",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h03",
                "video": "",
                "slides": "",
                "speakers": []
            },
            {
                "id": "s6",
                "title": "L'innovation technologique n'existe pas.",
                "confRoom": "Salle Titan",
                "desc": "L'innovation doit être sociale avant d'être technologique. Comment regarder les nouvelles technologies sous un angle utile, social, humain et engagé ? Un aperçu du paysage technologique contemporain sous le regard d'un designer",
                "type": "discovery",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h07",
                "video": "",
                "slides": "",
                "speakers": [
                    "gdorne"
                ]
            },
            {
                "id": "s7",
                "title": "Prise en main de Kubernetes",
                "confRoom": "Hangar",
                "desc": "Mise en oeuvre d'un cluster Kubernetes pour déployer une architecture comprenant une stack MySQL, PHP et Memcache.<br>Rolling updates et redimensionnement de replication controlers. Le déploiement se fera sur Google Container Engine (GKE).",
                "type": "codelab-cloud",
                "difficulty": 202,
                "all": false,
                "lang": "fr",
                "hour": "h14",
                "video": "",
                "slides": "",
                "speakers": [
                    "amoussine-pouchkine"
                ]
            },
            {
                "id": "s8",
                "title": "Cloud Ops",
                "confRoom": "Salle Graslin",
                "desc": "Come and see how you can improve your Devops tasks with Google Cloud",
                "type": "cloud",
                "difficulty": 202,
                "all": false,
                "lang": "fr",
                "hour": "h11",
                "video": "",
                "slides": "",
                "speakers": [
                    "blegras"
                ]
            },
            {
                "id": "s9",
                "title": "Eddystone, un format ouvert pour les beacons et les objets connectés",
                "confRoom": "Salle Bellem",
                "desc": "Eddystone, annoncé par Google le 14 juillet 2015, propose un format plus ouvert et plus riche que iBeacon, et supporté par près de 70% des téléphones portables à travers le monde. Nous allons décrypter cette technologie, et voir comment interagir depuis un téléphone Android ou iOS, avec ou sans application.",
                "type": "mobile",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h10",
                "video": "",
                "slides": "",
                "speakers": [
                    "rmenetrier"
                ]
            },
            {
                "id": "s10",
                "title": "React + Redux : les mains dans le cambouis.",
                "confRoom": "Les machines",
                "desc": "Ce workshop se propose de réaliser une application de chat avec React, Redux et Firebase. De la création des composants React à la consommation de webservices en passant par l'implémentation de l'architecture Flux via Redux, cet exercice sera également l'occasion de découvrir les outils de devs construits autour de Redux : rechargement de composants à chaud, outil d'enregistrement des actions utilisateurs, replay des actions utilisateur, etc...<br><br>Une liste de pré-requis sera disponible sur le repos https://github.com/cateland/nantes-devfest-2015-react-redux, celui-ci seras rendu public deux semaines avant le workshop pour vous donner le temps de préparer vos machines.",
                "type": "codelab-web",
                "difficulty": 202,
                "all": false,
                "lang": "fr",
                "hour": "h15",
                "video": "",
                "slides": "",
                "speakers": [
                    "acateland"
                ]
            },
            {
                "id": "s11",
                "title": "Management en couleur avec DISC",
                "confRoom": "Salle Graslin",
                "desc": "Chaque personne est unique. Chacun de nous voit le monde à sa façon. Chacun communique et se comporte d’une manière qui lui est propre. Ce constat est unanimement admis. Pourtant, nous répétons tous la même erreur de communication : nous parlons aux autres comme on aimerait qu’ils nous parlent. Cette erreur est essentielle. Il faut parler aux autres comme ils aimeraient qu’on leur parle. Une des règles d’or est qu’il faut s’adapter à son interlocuteur. Mais, pour cela, encore faut-il connaitre son profil…<br><br>DISC est un outil d'évaluation (coloré) utilisé pour améliorer la productivité, le travail d'équipe et la communication. DISC est l'acronyme de Dominant (rouge), Influent (jaune), Stable (vert) et Consciencieux (bleu). DISC mesure des styles de communication et de comportement. Ce n’est PAS un test de QI. Ça ne mesure PAS l’intelligence, les aptitudes, la santé mentale, les valeurs, etc. Les profils DISC décrivent les comportements humains dans de nombreuses situations, par exemple en réponse au stress, aux défis, aux challenges, aux crises, aux procédures, etc.<br><br>En connaissant bien son profil et celui de ses interlocuteurs, on peut communiquer de manière plus efficace, à l’écrit comme à l’oral. Cela permet de distribuer efficacement les tâches selon leurs types, les objectifs, les besoins, les contraintes, etc. Cela permet également de constituer une équipe en choisissant ses membres en fonction du contexte.",
                "type": "discovery",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h10",
                "video": "",
                "slides": "",
                "speakers": [
                    "tleriche"
                ]
            },
            {
                "id": "s12",
                "title": "OMG!, Terminator sera codé en JavaScript!",
                "confRoom": "Salle Bellem",
                "desc": "Tout le monde est persuadé que l’ancêtre de SkyNet, est le Turk (cf. The Sarah Connor Chronicles) … Eh bien non!, C’est B.O.B.! Un robot à roulette (le T-0). Et je vais vous expliquer comment tout à commencé: en devenant un “maker du dimanche”!.<br><br>La genèse de BOB (*):<br><br>*: Bot Operative Behaviour<br><br><ul><li> un thermomètre à leds avec un Arduino et Johnny-Five</li><li> SAM (j’aime bien donner des petits noms à mes jouets), qui va rendre le Nest obsolète, avec un Raspberry et une GrovePi qui va discuter avec le monde grâce à MQTT</li><li> BOB, le T-0, avec un Raspberry et une GoPiGo … Et bien sûr BOB et SAM discuteront entre eux</li></ul><br><br>Et tout ça propulsé par du JavaScript! <br>Il y aura donc de la démo live avec du hardware.<br>Je vous parlerais aussi de l’écosystème “hardware + javascript\"<br><br>Cette présentation a plusieurs objectifs:<br><br>- montrer que JavaScript peut servir à autre chose que du web<br>- montrer qu'il est facile de devenir un \"maker\" du dimanche même si l'on n'y connait pas grand chose<br>- faire une petite introduction à l'IOT<br><br>d'un point de vue démo, ce ne sera pas forcément du code mais de l'exécution de programmes avec impact sur des composants électronique (j'aurais donc une petite caméra, type webcam)",
                "type": "mobile",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h11",
                "video": "",
                "slides": "",
                "speakers": [
                    "pcharriere"
                ]
            },
            {
                "id": "s13",
                "title": "Usages des robots humanoïdes dans les espaces grand publics, et connectés à notre monde numérique",
                "confRoom": "Salle Bellem",
                "desc": "Les nouveaux robots humanoïdes ont maintenant des capacités qui permettent d'interagir naturellement et intuitivement avec leur environnement.<br>Ainsi, ils peuvent être utilisés en tant que nouvelles interfaces de communication avec un humain, ou avec notre monde numérique.<br><br>Différents cas d'usages sur l’intérêt de ces robots seront évoqués lors de cette conférence, tels que : Le conseil en magasin, l'orientation dans les espaces grand publics, l'accueil dans les hôtels, l'animation dans les musées, ou bien le divertissement. Les domaines d'applications sont sans limites.<br>L'intégration de ces interfaces homme/machine soulève de nouveaux défis techniques, qui seront également abordés au travers de différents cas d'usages.",
                "type": "discovery",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h05",
                "video": "",
                "slides": "",
                "speakers": [
                    "fcalzada"
                ]
            },
            {
                "id": "s14",
                "title": "Déploiement continu, test en production, autoscaling et workflow métiers pour vos applications web dans le Cloud",
                "confRoom": "Salle Bretagne",
                "desc": "Déployer des applications webs dans le Cloud permet aux développeurs de tirer partie de fonctionnalités Dev Ops comme le déploiement continu, le test en production, l'autoscaling, etc sans avoir à se soucier de l'infrastructure sous jacente.<br>Dans cette session, nous verrons comment le service Azure App Service de Microsoft vous permet d'obtenir cette flexibilité.",
                "type": "cloud",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h03",
                "video": "",
                "slides": "",
                "speakers": [
                    "btalmard"
                ]
            },
            {
                "id": "s15",
                "title": "Firebase, au-delà du Chat. Et si on développait un plugin Atom de pair-programming?",
                "confRoom": "Salle Bellem",
                "desc": "Firebase permet d'écrire de façon simple et robuste des applications collaboratives.<br>Souvent on en fait la démonstration en développant un Chat en 10 lignes de code.<br><br>Nous allons voir comment aller plus loin en développant un plugin Atom de pair-programming permettant de binôme sur du code grâce à Firebase.<br><br>Gestion des sessions, synchronisation de plusieurs curseurs, modifications simultanées, connections/déconnections...<br><br>Ce live-coding montrera comment mettre en oeuvre Firebase sur une vraie application.<br>Avec des tests !",
                "type": "cloud",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h08",
                "video": "",
                "slides": "",
                "speakers": [
                    "dgageot"
                ]
            },
            {
                "id": "s16",
                "title": "Angular 2 in action",
                "confRoom": "Les machines",
                "desc": "Dans ce codelab, nous allons découvrir le développement d'applications Web avec Angular 2. Nous prendrons comme exemple, une application de QUIZ que nous allons développer de A à Z et qui nous permettra de manipuler les nouveaux concepts proposés par cette nouvelle version. Soyez prêt à mettre les mains dans le cambouis et à débugger du code.<br>WARNING: angular 2 est en developer preview !!!",
                "type": "codelab-web",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h14",
                "video": "",
                "slides": "",
                "speakers": [
                    "wchegham"
                ]
            },
            {
                "id": "s17",
                "title": "Flexrox",
                "confRoom": "Salle Titan",
                "desc": "Acceptez mon bref soliloque<br>De louanges flattant Flexbox<br>Une spec bien loin d'être en toc !<br><br>Avant l'avènement de Flexbox,<br>Les CSS furent un paradoxe :<br>Alambiqués et mastocs<br>Parfois un peu loufoques<br>Et pas toujours très orthodoxes<br>... Même sur Firefox !<br><br>Aujourd'hui, véritable électrochoc<br>Louons les bienfaits de Flexbox<br>Retirez vos toques, posez vos breloques<br>Laissez de côté vos docs et vos forks<br>Et lâchez s'il vous plaît ce phoque !<br>(et réciproque)<br><br>Quelle belle époque<br>Bref... ça roxe !<br><br>KAMOULOX !",
                "type": "web",
                "difficulty": 202,
                "all": false,
                "lang": "fr",
                "hour": "h11",
                "video": "",
                "slides": "",
                "speakers": [
                    "rgoetter"
                ]
            },
            {
                "id": "s18",
                "title": "Harald à la dent bleue dans ton navigateur web",
                "confRoom": "Salle Bretagne",
                "desc": "Interagir avec des appareils en Bluetooth depuis une application Web est sur le point de devenir possible grâce à une nouvelle API Web standardisée qui se veut moderne et simple d'utilisation.",
                "type": "mobile",
                "difficulty": 202,
                "all": false,
                "lang": "fr",
                "hour": "h05",
                "video": "",
                "slides": "",
                "speakers": [
                    "fbeaufort"
                ]
            },
            {
                "id": "s19",
                "title": "React, une autre façon de penser vos composants web",
                "confRoom": "Salle Titan",
                "desc": "React est une librairie JavaScript développée par Facebook pour créer facilement des interfaces graphiques. Contrairement à d'autres librairies, ici pas de templates et de pseudo code, React permet d'utiliser la pleine expressivité de JavaScript et de bénéficier de tous les goodies du langage.<br><br>Le but de React est de proposer une solution permettant de construire des applications conséquentes avec des données qui évoluent dans le temps en écrivant exclusivement des composants réutilisables et testables tout en gardant une approche simple et efficace.<br><br>Durant ce live coding, nous verrons comment utiliser React dans diverses situations, comment écrire des composants en utilisant ES2015, comment exposer ses composants React en WebComponents et pourquoi écrire des petites applications mobiles natives.",
                "type": "web",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h05",
                "video": "",
                "slides": "",
                "speakers": [
                    "mancelin"
                ]
            },
            {
                "id": "s20",
                "title": "Advanced Scrolling Techniques on Android",
                "confRoom": "Salle Bellem",
                "desc": "Scrolling is one of the most important gesture on mobile platforms. Indeed, it easily allows users to access a fairly large amount of content just by swiping their fingers on screen. In order to implement such gestures, the Android SDK comes with a bunch of scrolling containers: View, ListView, RecyclerView, ScrollView, etc. While using these components independently is relatively simple, it starts getting complicated when nesting them… In this session we will go through a complete overview of how Android deals with scrolling in general and how to master the scrolling mechanism to create compelling mobile user experience.",
                "type": "mobile",
                "difficulty": 303,
                "all": false,
                "lang": "fr",
                "hour": "h03",
                "video": "",
                "slides": "",
                "speakers": [
                    "cmottier"
                ]
            },
            {
                "id": "s21",
                "title": "Mark, Marque et Marques",
                "confRoom": "Salle Titan",
                "desc": "Mark, Marque et Marques… ou comment créer une marque et la faire vivre sur une interface. <br>Que ce soit une startup, un nouveau produit ou un projet client, la marque se doit d’être au centre de nos pensées. <br>Tout est lié par la Marque : interface, animations, architecture… <br>Designers et développeurs sont l’équipe parfaite pour créer et faire vivre La Marque. <br>Et pourtant, ce n’est pas ce qui se passe aujourd’hui...<br>Cette conférence est donc pour expliquer ce processus et faire que les développeurs et designers travaillent main dans la main pour créer une expérience inoubliable pour l’utilisateur, inspirante et technologiquement innovante.",
                "type": "discovery",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h04",
                "video": "",
                "slides": "",
                "speakers": [
                    "mgruaz"
                ]
            },
            {
                "id": "s22",
                "title": "Ionic : un framework fun et productif pour développer des applications mobiles hybrides",
                "confRoom": "Salle Bellem",
                "desc": "Après 20 ans de Java, vous pensez qu'il est temps de basculer du côté mobile de la force mais vous n'avez pas envie de passer des jours à vous former au développement natif pour toutes les plateformes existantes ? Alors Ionic est fait pour vous !<br><br>Ionic c'est un framework mobile hybride basé sur HTML5, qui va rapidement vous rendre accro tellement il facilite le développement d'application pour mobile. Il est open source, il embarque avec lui la simplicité et la puissance d'AngularJS et il ne vous faudra que quelques heures pour développer une application simple mais déjà fonctionnelle qui pourra être déployée sur tous les mobiles ... what else?",
                "type": "mobile",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h07",
                "video": "",
                "slides": "",
                "speakers": [
                    "smoallic",
                    "aneveu"
                ]
            },
            {
                "id": "s23",
                "title": "Angular 2 : templates, composants et injection de dépendances",
                "confRoom": "Salle Titan",
                "desc": "La genèse d'Angular 2 n'est pas achevée, mais la version alpha permet déjà de se faire une bonne idée de ce à quoi il va ressembler. Et c'est bluffant ! Si la version 1 a paru magique, dans sa version 2 c'est un Angular épuré, à la fois plus puissant et plus limpide.<br><br>Dans cette session, rien que du code, pour vous montrer comment se créent les composants, s'écrivent les templates et s'injectent les dépendances.",
                "type": "web",
                "difficulty": 202,
                "all": false,
                "lang": "fr",
                "hour": "h03",
                "video": "",
                "slides": "",
                "speakers": [
                    "tchatel"
                ]
            },
            {
                "id": "s24",
                "title": "8 pratiques clés en SEO pour les développeurs",
                "confRoom": "Salle Graslin",
                "desc": "Le référencement web s'apparente souvent à des pratiques propres aux web-marketeurs et rédacteurs. Dans les faits, la technique web se fait de plus en plus présente et permet réellement de passer certains caps pour optimiser le positionnement des pages web. Nous allons faire le tour de plusieurs pratiques phares du référencement que les développeurs peuvent mettre en place pour réussir leur boost SEO.",
                "type": "discovery",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h08",
                "video": "",
                "slides": "",
                "speakers": [
                    "mchartier"
                ]
            },
            {
                "id": "s25",
                "title": "REST from zero to hero in 45 minutes",
                "confRoom": "Salle Bretagne",
                "desc": "Venez découvrir - ou redécouvrir ! - les différents ingrédients qui sont a l’origine d’une bonne API.<br><br>Nous présenterons la transformation d’une API Web fictive (d'une conception assez discutable ;-) ) en une API REST vraiment user-friendly. Chaque étape sera l’occasion d’introduire un concept ou une bonne pratique supplémentaire en partant des bases de REST jusqu’aux sujets avancés tels que le versioning ou l’hypermédia.<br><br>Vous sortirez de cette session avec une vision claire des concepts cachés derrière le terme \"REST\".",
                "type": "cloud",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h07",
                "video": "",
                "slides": "",
                "speakers": [
                    "arichard",
                    "mboillod"
                ]
            },
            {
                "id": "s26",
                "title": "3.14 things I didn’t know about CSS",
                "confRoom": "Salle Bretagne",
                "desc": "This talk will showcase a series of obscure CSS fun facts, such as CSS syntax gimmicks and quirks, weird tricks that involve CSS in one way or another, and security vulnerabilities that are enabled by (ab)using CSS in unexpected ways.",
                "type": "web",
                "difficulty": 101,
                "all": false,
                "lang": "en",
                "hour": "h04",
                "video": "",
                "slides": "",
                "speakers": [
                    "mbynens"
                ]
            },
            {
                "id": "s27",
                "title": "WebRTC Update",
                "confRoom": "Salle Graslin",
                "desc": "What's new and next for WebRTC for native apps and on the web.<br><br>Draft topics:<br><ul><li>What are the big achievements of the last 12 months?</li><li> What are the big goals for the next 12 months? </li><li> ORTC, Unified Plan, WebRTC 0.9, WebRC 1.0 — WTF?</li><li> Codecs</li><li> WebRTC for Android and iOS</li><li> Hardware support</li><li> Amazing apps</li><li> Predictions?</li><li> Developer resources</li></ul>",
                "type": "web",
                "difficulty": 202,
                "all": false,
                "lang": "en",
                "hour": "h07",
                "video": "",
                "slides": "",
                "speakers": [
                    "sdutton"
                ]
            },
            {
                "id": "s28",
                "title": "Découvrir ES6 par le code",
                "confRoom": "Salle Titan",
                "desc": "ES6 ou ES2015, la nouvelle version du JavaScript vient de sortir. Vous avez peut être déjà vu une conférence à ce sujet mais comment se faire une idée en ne faisant que parcourir une liste de nouvelles syntaxe ?<br><br>Ici, nous allons faire du code ! En partant de la base d’un code d’une application Angular 1 en JavaScript \"standard\", nous allons la transformer progressivement avec toutes les nouvelles notations.<br><br>Nous passerons ainsi en revu la plupart des nouveaux concepts. En commençant par les facilités de syntaxe mais en étudiant aussi les nouveaux paradigmes comme les classes, les promesses jusqu'au generators.<br><br>Le livecoding sera réalisé avec un environnement de build avec Gulp, Webpack et Babel. Rien que vous ne puissiez reproduire chez vous le soir même !",
                "type": "web",
                "difficulty": 202,
                "all": false,
                "lang": "fr",
                "hour": "h08",
                "video": "",
                "slides": "",
                "speakers": [
                    "mlux"
                ]
            }, {
                "id": "s29",
                "title": "Vorlon.js : le debug de sites web plus simple",
                "confRoom": "Salle Bretagne",
                "desc": "Quand on est sur son PC avec un navigateur : F12 nous rend toujours un très bon service. Cependant comment avoir la même expérience quand veut débugger le site sur un téléphone ? Des solutions existent mais rien de très simple d’utilisation ou qui fonctionne dans tous les cas.<br><br>Dans ce talk, je vous présenterais Vorlon.js, un nouvel outil que j'ai co-créé et qui permet d’obtenir l’expérience F12, en remote et pour tous les navigateurs",
                "type": "web",
                "difficulty": 202,
                "all": false,
                "lang": "fr",
                "hour": "h10",
                "video": "",
                "slides": "",
                "speakers": [
                    "emargraff"
                ]
            },
             {
             "id": "s30",
             "title": "Mon architecture microservices sur un cas d'usage urbanisé en 2 heures chrono avec Docker",
             "confRoom": "Hangar",
             "desc": "Le but de cette conférence est de faire construire une (mini) architecture microservices sur un scénario d'utilisation simple qui sera décomposé en quelques appels de services autonomes selon les méthodes de découplage de responsabilités. Afin que les participants puissent se consacrer à la compréhension de l'architecture et à l'assemblage final, des squelettes de code seront fournis ainsi que des images Docker.",
             "type": "codelab-cloud",
             "difficulty": 101,
             "all": false,
             "lang": "fr",
             "hour": "h13",
             "video": "",
             "slides": "",
             "speakers": [
             "jpgouigoux"
             ]
             },
            {
                "id": "s31",
                "title": "Redefining PaaS: Managed container based microservices on Google App Engine",
                "confRoom": "Salle Bellem",
                "desc": "Microservices are a great model for developing modern applications. But microservice based architectures are more complicated than traditional monolithic apps and can come with a significant management overhead particularly when you need to maintain different environments for dev, test and production. This overhead either falls on your development team or to people you hire specifically to manage it. <br><br>This talk with multiple demos, looks at how to build, test and deploy container based microservice architectures without having to worry about managing the platform on which they run, thus freeing up your developers to do what they do best, writing application code.<br>We'll look at new and enhanced features of Google App Engine and walk through the staged deployment of both a simple application and a more complicated microservices based architecture. We'll also look at how App Engine has evolved from it's original sandboxed runtime environment to what it is today, a next generation platform for building and deploying modern day applications.",
                "type": "cloud",
                "difficulty": 202,
                "all": false,
                "lang": "fr",
                "hour": "h04",
                "video": "",
                "slides": "",
                "speakers": [
                    "lchampenois"
                ]
            },
            {
                "id": "s32",
                "title": "Open the door to the engaging world of real-time, with Firebase",
                "confRoom": "Salle Graslin",
                "desc": "Real-time apps are infinitely more engaging. <b>Forget \"pull-to-refresh\"</b>, reload buttons, update timers, ... Say \"hi\" to new generation apps that mimic real world behaviors and push updates, info and notifications to your users \"as it happens.\"<br><br>Though, <b>how to make an existing app real-time</b> or start from scratch a new mobile-first real-time application may seem like a major challenge. Here comes <b>Firebase</b>.<br><br>It has actually never been easier to build mobile apps which are both <b>real-time and offline first</b>. Through concrete examples and APIs walkthrough, this talk will show how it is now possibly to build new features like Instant Messaging, Chat, Notifications or Presence effortlessly, and in a scalable way.<br><br>A special focus will be put on <b>building mobile apps</b> in this context and <b>the challenges of building a reactive User Interface</b> (using notably FirebaseUI or KVO on iOS).<br><br>Examples will focus on iOS and JavaScript.",
                "type": "mobile",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h04",
                "video": "",
                "slides": "",
                "speakers": [
                    "cwehrung"
                ]
            },
            {
                "id": "s33",
                "title": "L'impact du Machine Learning dans les entreprises et les bests practices pour maximiser les chances de réussites d'un projet data",
                "confRoom": "Salle Graslin",
                "desc": "Une version peut etre vu ici : https://www.youtube.com/watch?v=oMwKPV9amDE",
                "type": "cloud",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h05",
                "video": "",
                "slides": "",
                "speakers": [
                    "fxrousselot"
                ]
            },
            {
                "id": "s34",
                "title": "TBD",
                "confRoom": "Salle Bretagne",
                "desc": "TBD",
                "type": "mobile",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h08",
                "video": "",
                "slides": "",
                "speakers": [
                    "xhallade"
                ]
            },
            {
                "id": "s35",
                "title": "Golang TBD",
                "confRoom": "Salle Titan",
                "desc": "TBD",
                "type": "cloud",
                "difficulty": 101,
                "all": false,
                "lang": "fr",
                "hour": "h10",
                "video": "",
                "slides": "",
                "speakers": [
                    "fcampoy"
                ]
            },
            {
                "id": "s36",
                "title": "Graph clustering in Python",
                "confRoom": "Hangar",
                "desc": "Clustering of data in a way that will make use of inherent structural information is an increasingly important task for many data scientists. This talk will explore the challenges associated with clustering of complex networked data for the commercial application of search keyword optimisation. We'll take a look at several techniques and demonstrate some of them with the package iGraph, available to Python users. If time permits we shall round off by examining how to visualise the results in an interactive fashion.",
                "type": "codelab-cloud",
                "difficulty": 101,
                "all": false,
                "lang": "en",
                "hour": "h15",
                "video": "",
                "slides": "",
                "speakers": [
                    "fkelly"
                ]
            },
            {
                "id": "s1",
                "title": "Accueil",
                "confRoom": "Espace Chateau des ducs",
                "desc": "Profitez de cet instant pour déguster une collation et un café avant d'enchaîner sur une journée bien remplie ! ;)",
                "type": "white",
                "all": true,
                "hour": "h01"
            },
            {
                "id": "s2",
                "title": "Keynote",
                "confRoom": "Salle Titan",
                "desc": "Conférence d'ouverture du DevFest",
                "type": "white",
                "all": true,
                "video": "",
                "hour": "h02",
                "speakers": [
                    "tguenoux",
                    "eissartial"
                ]
            },
            {
                "id": "s97",
                "confRoom": "Espace Tour Lu",
                "title": "Déjeuner / Table Ronde “Programmer avec les enfants : pourquoi ? comment ?“",
                "type": "white",
                "desc": "<strong>Repas offert pour tous les participants.</strong><br>Profitez-en pour faire un tour des différents stands et démos.<br><br><b>Table Ronde : “Programmer avec les enfants : pourquoi ? comment ?“</b> - Espace Bellem - 13h00 : <br>Beaucoup d'initiatives actuelles permettent aux enfants d'apprendre à programmer.<br><br>Pourquoi un tel intérêt ? Que cela peut-il apporter à nos chères têtes blondes ? Et comment s'y prendre ?<br><br>Cette table ronde présentera rapidement les différentes initiatives présentes et la liste des outils utilisables.",
                "all": true,
                "hour": "h06",
                "speakers": [
			      "cbossard",
			      "jpalies"
			    ]
            },
            {
                "id": "s98",
                "confRoom": "Espace Chateau des ducs",
                "title": "Pause",
                "type": "white",
                "all": true,
                "hour": "h09"
            },
            {
                "id": "s99",
                "confRoom": "Espace Bouffay",
                "title": "Afterparty",
                "type": "white",
                "desc": "Un moment de networking convivial pour les plus motivés :)<br> L'utilisation de votre smartphone est fortement recommandée ;)",
                "all": true,
                "hour": "h12"
            }
        ]
    };

    // On map les speakers
    _(agenda.sessions).map(function (session) {
        if (!session.speakers)
            return session;
        session.speakers = _(session.speakers).map(function (speaker) {
            return speakerService[_.findIndex(speakerService, function (speakerTmp) {
                return speakerTmp.id === speaker;
            })];
        }).value();
        return session;
    }).value();

    // On prépare les données pour mieux les afficher
    agenda.sessionsTransform = _.chain(agenda.sessions).filter(function(session){
    	return session.type === 'white'
    		|| session.type === 'mobile'
    		|| session.type === 'web'
    		|| session.type === 'cloud'
    		|| session.type === 'discovery';
    }).forEach(function (session) {
        session.hourContent = agenda.hours[session.hour]
    }).groupBy(function (session) {
        return session.hour;
    }).mapValues(function (sessionValues) {
        return _(sessionValues).forEach(function (session) {
            session.classCol = sessionValues.length === 1 ? 'col-md-12' : 'col-md-3';
        }).sortBy(function (session) {
            switch (session.type) {
                case 'mobile':
                    return 0;
                case 'web' :
                    return 1;
                case 'cloud' :
                    return 2;
                case 'discovery' :
                    return 3;
                default :
                    return 4;
            }
        }).value();
    }).values().sortBy(function (sessionValues) {
        return sessionValues[0].hour;
    }).value();

    agenda.codelabTransform = _.chain(agenda.sessions).filter(function(session){
    	return session.type === 'codelab-web'
    		|| session.type === 'codelab-cloud';
    }).forEach(function (session) {
        session.hourContent = agenda.hours[session.hour]
    }).groupBy(function (session) {
        return session.hour;
    }).mapValues(function (sessionValues) {
        return _(sessionValues).forEach(function (session) {
            session.classCol = sessionValues.length === 1 ? 'col-md-12' : 'col-md-3';
        }).sortBy(function (session) {
            switch (session.type) {
                case 'codelab-web':
                    return 0;
                case 'codelab-cloud' :
                    return 1;
                default :
                    return 2;
            }
        }).value();
    }).values().sortBy(function (sessionValues) {
        return sessionValues[0].hour;
    })
        .value();


    return agenda;
}]);

/**
 * Sessions controller
 */
devfestApp.controller('AgendaCtrl', ['$scope', 'AgendaService', function ($scope, agendaService) {

    $scope.agenda = agendaService;

    var first = true;
    $scope.repeatFinish = function(){
    	if (first){
    		first = false;
    	}else{
    		window.angularReadyForSticky = true;
    		if (window.domReadyForSticky){
	    		setTimeout(function() {  			
		    		var navHeight = jQuery('#top-header').height();
					var headerHeight = jQuery('.track-header').first().height();
					jQuery('.stick-header').stick_in_parent({
					    sticky_class: 'sticky',
					    offset_top: navHeight
					});
					jQuery('.stick-label').stick_in_parent({
					    offset_top: navHeight + headerHeight
					});
				}, 500);
    		}
    	}
    }

}]);