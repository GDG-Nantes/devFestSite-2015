'use strict'

devfestApp.factory('AgendaService', ['SpeakersService', function(speakerService){
	var agenda = {
		categories : {
			android : "Android et Objets Connectés"
			, web : "Web"
			, cloud : "Cloud et Big Data"
			, decouverte : "Découverte"
		},
		hours : {  
		  "h01":{
		    "id":"h01",
		    "hourStart":"07",
		    "minStart":"30",
		    "hourEnd":"08",
		    "minEnd":"30"
		  },
		  "h02":{
		    "id":"h02",
		    "hourStart":"08",
		    "minStart":"30",
		    "hourEnd":"09",
		    "minEnd":"30"
		  },
		  "h03":{
		    "id":"h03",
		    "hourStart":"09",
		    "minStart":"40",
		    "hourEnd":"10",
		    "minEnd":"30"
		  },
		  "h04":{
		    "id":"h04",
		    "hourStart":"10",
		    "minStart":"40",
		    "hourEnd":"11",
		    "minEnd":"30"
		  },
		  "h05":{
		    "id":"h05",
		    "hourStart":"11",
		    "minStart":"40",
		    "hourEnd":"12",
		    "minEnd":"30"
		  },
		  "h06":{
		    "id":"h06",
		    "hourStart":"12",
		    "minStart":"30",
		    "hourEnd":"14",
		    "minEnd":"00"
		  },
		  "h07":{
		    "id":"h07",
		    "hourStart":"14",
		    "minStart":"00",
		    "hourEnd":"14",
		    "minEnd":"50"
		  },
		  "h08":{
		    "id":"h08",
		    "hourStart":"15",
		    "minStart":"00",
		    "hourEnd":"15",
		    "minEnd":"50"
		  },
		  "h09":{
		    "id":"h09",
		    "hourStart":"15",
		    "minStart":"50",
		    "hourEnd":"16",
		    "minEnd":"40"
		  },
		  "h10":{
		    "id":"h10",
		    "hourStart":"16",
		    "minStart":"40",
		    "hourEnd":"17",
		    "minEnd":"30"
		  },
		  "h11":{
		    "id":"h11",
		    "hourStart":"17",
		    "minStart":"40",
		    "hourEnd":"18",
		    "minEnd":"30"
		  },
		  "h12":{
		    "id":"h12",
		    "hourStart":"18",
		    "minStart":"30",
		    "hourEnd":"22",
		    "minEnd":"30"
		  }
		},
		sessions:[
			  {
			    "id":"s1",
			    "title":"Accueil",
			    "confRoom":"Espace Les Machines",
			    "desc":"Profitez de cet instant pour déguster une collation et un café avant d'enchaîner sur une journée bien remplie ! ;)",
			    "type":"white",
			    "all" : true,
			    "hour":"h01"
			  },
			  {
			    "id":"s2",
			    "title":"Keynote",
			    "confRoom":"Salle Titan",
			    "desc":"Conférence d'ouverture du DevFest",
			    "type":"white",
			    "all" : true,
			    "video" : "https://www.youtube.com/watch?v=NZ9DwaAbMcg",
			    "hour":"h02"
			  },{
			    "id":"s3",
				"title":"Advanced Scrolling Techniques on Android",
	            "confRoom":"Salle Titan",
	            "desc":"Scrolling is one of the most important gesture on mobile platforms. Indeed, it easily allows users to access a fairly large amount of content just by swiping their fingers on screen. In order to implement such gestures, the Android SDK comes with a bunch of scrolling containers: View, ListView, RecyclerView, ScrollView, etc. While using these components independently is relatively simple, it starts getting complicated when nesting them… In this session we will go through a complete overview of how Android deals with scrolling in general and how to master the scrolling mechanism to create compelling mobile user experience.",
	            "type":"mobile",
	            "difficulty":303,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h03",
			    "video":"",
			    "slides":"",
			    "speakers":["cmottier"]
			  },{
			    "id":"s4",
			    "title":"Harald à la dent bleue dans ton navigateur web",
	            "confRoom":"Salle Titan",
	            "desc":"Interagir avec des appareils en Bluetooth depuis une application Web est sur le point de devenir possible grâce à une nouvelle API Web standardisée qui se veut moderne et simple d'utilisation.",
	            "type":"mobile",
	            "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h11",
			    "video":"",
			    "slides":"",
			    "speakers":["fbeaufort"]
			  },{
			    "id":"s5",
			    "title":"Ionic : un framework fun et productif pour développer des applications mobiles hybrides",
			    "confRoom":"Salle Titan",
			    "desc":"Après 20 ans de Java, vous pensez qu'il est temps de basculer du côté mobile de la force mais vous n'avez pas envie de passer des jours à vous former au développement natif pour toutes les plateformes existantes ? Alors Ionic est fait pour vous !\n\nIonic c'est un framework mobile hybride basé sur HTML5, qui va rapidement vous rendre accro tellement il facilite le développement d'application pour mobile. Il est open source, il embarque avec lui la simplicité et la puissance d'AngularJS et il ne vous faudra que quelques heures pour développer une application simple mais déjà fonctionnelle qui pourra être déployée sur tous les mobiles ... what else?",
			    "type":"mobile",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h05",
			    "video":"",
			    "speakers":["smoallic"]
			  },{
			    "id":"s6",
			    "title":"Eddystone, un format ouvert pour les beacons et les objets connectés",
			    "confRoom":"Salle Graslin",
			    "desc":"Eddystone, annoncé par Google le 14 juillet 2015, propose un format plus ouvert et plus riche que iBeacon, et supporté par près de 70% des téléphones portables à travers le monde. Nous allons décrypter cette technologie, et voir comment interagir depuis un téléphone Android ou iOS, avec ou sans application.",
			    "type":"mobile",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h07",
			    "video":"",
			    "slides":"",
			    "speakers":["rmenetrier"]
			  },{
			    "id":"s7",
			    "title":"Open the door to the engaging world of real-time, with Firebase",
			    "confRoom":"Salle Bellem",
			    "desc":"Real-time apps are infinitely more engaging. **Forget \"pull-to-refresh\"**, reload buttons, update timers, ... Say \"hi\" to new generation apps that mimic real world behaviors and push updates, info and notifications to your users \"as it happens.\"\n \nThough, **how to make an existing app real-time** or start from scratch a new mobile-first real-time application may seem like a major challenge. Here comes **Firebase**.\n\nIt has actually never been easier to build mobile apps which are both **real-time and offline first**. Through concrete examples and APIs walkthrough, this talk will show how it is now possibly to build new features like Instant Messaging, Chat, Notifications or Presence effortlessly, and in a scalable way.\n\nA special focus will be put on **building mobile apps** in this context and **the challenges of building a reactive User Interface** (using notably FirebaseUI or KVO on iOS).\n\nExamples will focus on iOS and JavaScript.",
			    "type":"mobile",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h10",
			    "video":"",
			    "slides":"",
			    "speakers":["cwehrung"]
			  },{
			    "id":"s8",
			    "title":"OMG!, Terminator sera codé en JavaScript!",
			    "confRoom":"Salle Titan",
			    "desc":"Tout le monde est persuadé que l’ancêtre de SkyNet, est le Turk (cf. The Sarah Connor Chronicles) … Eh bien non!, C’est B.O.B.! Un robot à roulette (le T-0). Et je vais vous expliquer comment tout à commencé: en devenant un “maker du dimanche”!.\n\nLa genèse de BOB (*):\n\n*: Bot Operative Behaviour\n\n- un thermomètre à leds avec un Arduino et Johnny-Five\n- SAM (j’aime bien donner des petits noms à mes jouets), qui va rendre le Nest obsolète, avec un Raspberry et une GrovePi qui va discuter avec le monde grâce à MQTT\n- BOB, le T-0, avec un Raspberry et une GoPiGo … Et bien sûr BOB et SAM discuteront entre eux\n\nEt tout ça propulsé par du JavaScript! \nIl y aura donc de la démo live avec du hardware.\nJe vous parlerais aussi de l’écosystème “hardware + javascript“",
			    "type":"mobile",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h04",
			    "video":"",
			    "slides":"",
			    "speakers":["pcharriere"]
			  },{
			    "id":"s9",
			    "title":"Google Cloud Platform: Managed VMs unification",
			    "confRoom":"Salle Bellem",
			    "desc":"You are a developer and dream about scaling your application like Snapchat? You need latest support for Java 8, Servlet 3.1, WebSockets, optimized annotation processing, Gradle, Maven, Jenkins pipeline and Android clients? Well, we have it all with Managed VMs. The session will introduce you to the latest Cloud SDK, a multi language environment (Java, Node.js, Dart, yours…), all sharing the same APIs and Services for developing Docker images and containers that can run locally and which can be deployed unchanged to the Google Cloud in a fully managed environment.",
			    "type":"cloud",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h07",
			    "video":"https://www.youtube.com/watch?v=RAkJTw2WOW4",
			    "speakers":["cmottier"]
			  },{
			    "id":"s10",
			    "title":"Guerrilla design en milieu hostile : responsive et mobilité",
			    "confRoom":"Salle Titan",
			    "desc":"A l'heure actuelle, il n'est plus le possible de désigner tous les gabarits d'un site en tenant compte de tous les terminaux existants. C'est pour celà que de plus en plus de décisions d'optimisation du design mobile sont prises lors des tests en réel dans les navigateurs. Je vous propose donc 45 minutes d’astuces de toute sorte tirées de vrais projets qui nous ont permis de nous en sortir dans cette jungle mobile et communiquer efficacement entre créatifs de toute taille, clients et intégrateurs.",
			    "type":"discovery",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h10",
			    "video":"https://www.youtube.com/watch?v=ubDAng9cJmU",
			    "slides":"https://speakerdeck.com/inpixelitrust/guerrilla-design-en-milieu-hostile-responsive-et-mobilite",
			    "speakers":["cmottier"]
			  },{
			    "id":"s11",
			    "confRoom" : "Espace Tour Lu",
			    "title":"Déjeuner && Table Ronde : Mon Job en IT",
			    "type":"white",
			    "desc":"Repas gratuit pour tous les participants.<br>Profitez-en pour faire un tour des différents stands et démos.<br><br><b>Table Ronde : Mon nouveau job en IT</b> - Espace Bellem - 13h00 : <br> Aujourd'hui, quels choix avons-nous et comment s'y retrouver ? <br> Des professionnels du recrutement seront là pour échanger et partager sur les nouvelles pratiques, les conseils pour trouver le job de ses rêves, les attentes des sociétés, ….",
			    "all" : true,
			    "hour":"h06"
			  },{
			    "id":"s12",
			    "title":"Introduction to Android Wear – A Glimpse Into the Future",
			    "confRoom":"Salle Titan",
			    "desc":"The recent unveiling of Android Wear introduced a brand new set of challenges and opportunities for application designers and developers. Indeed, wearable computing requires designers to think in a radically different manner while offering tremendous new ways to improve people lives. This session acts as a complete overview of the new Android Wear ecosystem and explains how developers can push their existing apps to the wearable level from both a designer and a developer perspective.",
			    "type":"mobile",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h07",
			    "video":"https://www.youtube.com/watch?v=bdFr4AkZ4E0",
			    "slides":"https://speakerdeck.com/cyrilmottier/introduction-to-android-wear-a-glimpse-into-the-future",
			    "speakers":["cmottier"]
			  },{
			    "id":"s13",
			    "title":"JHipster, a Yeoman generator for AngularJS and Spring Boot",
			    "confRoom":"Salle Bretagne",
			    "desc":"JHipster is an application generator that creates a modern JavaScript application (with AngularJS, Grunt, Bower...) that works seamlessly with a more classical Java back-end (with Spring Boot, Spring Data, Hibernate, Maven). With more 800 Github stars, 50 contributors, and articles on Infoworld and SDTimes, JHipster has become in less than a year the most widely used Spring application generator, and the #3 Yeoman generator. <br> In this session, we will show how to quickly create an application, modify it, work with hot reloading of both JavaScript and Java code, and deploy everything to the cloud. There will be live coding.",
			    "type":"web",
			    "difficulty":303,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h10",
			    "video":"https://www.youtube.com/watch?v=cWMJqc_qfHI",
			    "speakers":["cmottier"]
			  },{
			    "id":"s14",
			    "title":"'No one at Google uses MapReduce anymore' - Cloud Dataflow explained for dummies",
			    "confRoom":"Salle Titan",
			    "desc":"Warning: this an an algorithmics talk, and it also involves parallel processing. <br> The MapReduce paper, published by Google 10 years ago (2004!), sparked the parallel processing revolution and gave birth to countless open source and research projects. We have been busy since then and the MapReduce model is now officially obsolete. The new data processing models we use are called Flume (for the processing pipeline definition) and MillWheel for the real-time dataflow orchestration. We are releasing them as a public tool called Cloud Dataflow which allows you to specify both batch and real-time data processing pipelines and have them deployed and maintained automatically - and yes, dataflow can deploy *lots* of machines to handle Google-scale problems. <br> What is the magic behind the scenes ? What is the post-MapReduce dataflow model ? What are the flow optimisation algorithms ? Read the papers or come for a walk through of the algorithms with me.",
			    "type":"cloud",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h08",
			    "video":"https://www.youtube.com/watch?v=v_wdCc07M48",
			    "slides":"https://docs.google.com/presentation/d/1jrIY93r9HpB98tV4gUMybEPFd5x_R1vCNcVNQKtNl6g/edit#slide=id.p",
			    "speakers":["cmottier"]
			  },{
			    "id":"s15",
			    "title":"Google Tag Manager",
			    "confRoom":"Salle Graslin",
			    "desc":"Launched in October 2012, Google Tag Manager is huge change for any businesses which are used to analyze behaviors on their own websites and applications. This session will introduce the tool and the best practices in order to be able to try it on your own and use it for your next projects.",
			    "type":"discovery",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h11",
			    "video":"https://www.youtube.com/watch?v=FvTgS4-V8Oc",
			    "speakers":["cmottier"]
			  },{
			    "id":"s16",
			    "title":"Tests étendus pour construire des applications Android robustes, avec Genymotion",
			    "confRoom":"Salle Bretagne",
			    "desc":"Les applications Android sont de plus en riches. Les tests qualités deviennent donc de plus en plus primordiaux et il est important qu'ils soient les plus complets possibles. <br> Durant cette session, nous vous présenterons comment il est facile d'utiliser Genymotion, ses APIs Java (pour les tests unitaires), et ses outils de contrôle scriptables (en ligne de commande et via Gradle) pour améliorer vos tests et votre système d'integration continue.",
			    "type":"mobile",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h08",
			    "video":"https://www.youtube.com/watch?v=fK0cU7M0WzA",
			    "slides":"https://docs.google.com/presentation/d/10vZSlFHMS32qRUdvYIu2FH02EgEMK3zPenPbrb11nC7g/edit#slide=id.g11bf35b0a_2157",
			    "speakers":["cmottier","fcampoy"]
			  },{
			    "id":"s17",
			    "title":"Dans un monde où tout est composant",
			    "confRoom":"Salle Bretagne",
			    "desc":"OSGI est une approche en composants. Polymer est une approche en composants. Je vais vous faire voir comment marier les deux. <br> Avec les conteneurs OSGI on peut facilement (re)déployer des bundles et avec des versions différentes, le tout à chaud. <br>Seule ombre au tableau, l’UI. Dans le cadre de SPA (Single Page App), il faut systématiquement redéployer tout le front. <br>C’est là que Polymer intervient…",
			    "type":"web",
			    "difficulty":303,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h07",
			    "video":"https://www.youtube.com/watch?v=rG0OgU848IE",
			    "slides":"./assets/slides/devfest_medy.pdf",
			    "speakers":["cmottier"]
			  },{
			    "id":"s18",
			    "title":"Launching and growing a startup on the Google Cloud Platform",
			    "confRoom":"Salle Bretagne",
			    "desc":"You are a developer with exciting ideas to launch online, and you want to be all set for success from the start? This session will introduce the Google Cloud Platform key components by replaying the past 5 years at SnapEngage on the Cloud Platform, adding components of the platform one by one to grow from an idea, to a feature and finally to a software as a service serving billions of queries every month. We will cover Google AppEngine, Google CloudStorage, Google BigQuery, Google Compute Engine and also mention some interesting non-Google developer products which complement the Cloud Platform.",
			    "type":"cloud",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h04",
			    "video":"https://www.youtube.com/watch?v=U9oM7dEJCvk",
			    "speakers":["cmottier"]
			  },{
			    "id":"s19",
			    "title":"The fine art of deploying web apps online",
			    "confRoom":"Salle Bellem",
			    "desc":"Nous savons tous coder, mais nous ne sommes pas tous à l'aise pour déployer. <br> La livraison d'une application est souvent un peu traumatique, mais c'est pourtant loin d'être une fatalité. Quelques outils essentiels, un peu de communication et d'anticipation vous feront oublier à tout jamais les sueurs froides du 'glisser-déposer' via FTP.  <br> La pratique du Delivery Driven Development n'est pas réservée à de grosses entreprises : nous l'appliquerons ici à des projets web à petits budgets et courts délais, typiques d'une agence web. Nos objectifs : Mettre en prod' beaucoup plus souvent, rattraper rapidement une mise en ligne qui a foiré, et mieux partager les connaissances et les responsabilités entre collègues. <br> En améliorant et en automatisant le processus de livraison des applications web, votre équipe gagne en assurance, se réconcilie avec les infogéreurs, conquiert la confiance du chef de projet, l'estime du client final, mais surtout elle dort l'esprit tranquille.",
			    "type":"discovery",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h04",
			    "video":"https://www.youtube.com/watch?v=ysKczC2kFis",
			    "slides":"https://speakerdeck.com/ronanguilloux/the-fine-art-of-deploying-web-apps-online",
			    "speakers":["cmottier"]
			  },{
			    "id":"s20",
			    "confRoom" : "Espace Les Machines",
			    "title":"Pause",
			    "type":"white",
			    "all" : true,
			    "hour":"h09"
			  },{
			    "id":"s21",
			    "title":"v.zero SDK for android",
			    "confRoom":"Salle Bellem",
			    "desc":"Are you ready for the new generation of mobile payments? Braintree presents the new client-side SDK of the future: fast, elegant, light and secure. v.zero sdk is the new cross platform way for accepting payments: From your first payment to your billionth. In this talk you'll see the new features of the v.zero SDK and how it fits on Android devices.",
			    "type":"mobile",
			    "difficulty":202,
			    "all" : false,
			    "lang":"en",
			    "hour":"h11",
			    "video": "https://www.youtube.com/watch?v=7QpU6_GkFHc",
			    "slides":"https://www.dropbox.com/s/6q4nhz4dz33lb2y/new%20v.zero%20SDK%20Braintree%20-%20DevFest%20Nantes.pdf?dl=0",
			    "speakers":["cmottier"]
			  },{
			    "id":"s22",
			    "title":"AngularDart 1.0 and beyond!",
			    "confRoom":"Salle Bellem",
			    "desc":"AngularJS is awesome and acclaimed, but few days ago AngularDart 1.0 has just landed and is the most structured and easy to understand version of Angular yet.<br>It keeps all the powerful features of its parent such as the two-way binding, the dependency injection but brings many changes and improvements on the APIs. For instance, it standardizes the way of registering core components to ease the immersion into the Dart version of Angular.<br>During this talk, I'll show the changes from AngularJS and I'll introduce the Dartisms which provides all its power to this whole new version of the framework.",
			    "type":"web",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h08",
			    "video":"https://www.youtube.com/watch?v=waNQ0ziAZeU",
			    "slides":"http://pierrereliquet.github.io/talks/angulardart_1.0_beyond/index.html#/",
			    "speakers":["cmottier"]
			  },{
			    "id":"s23",
			    "title":"Lucy in the sky with docker",
			    "confRoom":"Salle Bellem",
			    "desc":"On parle beaucoup de Docker en ce moment. Je vais tenter de vous expliquer comment fonctionne Docker comme j’aurais aimé qu’on me l’explique. <br> Nous allons apprendre à prendre en main Docker pour construire une application web Java 8 et la déployer sur la Google Cloud Platform.",
			    "type":"cloud",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h03",
			    "video":"https://www.youtube.com/watch?v=wEghVJygoOw",
			    "speakers":["cmottier"]
			  },{
			    "id":"s24",
			    "title":"L'expérience utilisateur est importante pour vous",
			    "confRoom":"Salle Bretagne",
			    "desc":"Une bonne expérience utilisateur facilite l’adoption de l’application et améliore la productivité. Pourtant, cette discipline est très souvent négligée lors de la conception d’applications métier, du fait de budgets restreints et d’utilisateurs captifs.  <br> Dans beaucoup de projets, en particulier en mode agile, le développeur peut participer à la conception de l’interface utilisateur. Il est donc important qu’il soit sensibilisé à l’ergonomie afin de pouvoir faire des propositions pertinentes prenant en compte cette dimension essentielle pour la réussite d’un projet. C’est là le but de cette conférence, qui donnera également quelques pratiques pour améliorer l’expérience utilisateur. ",
			    "type":"discovery",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h03",
			    "video":"https://www.youtube.com/watch?v=m5X3nfR5wew",
			    "slides":"http://fr.slideshare.net/FlorenceHerrou/lexprience-utilisateur-est-importante-pour-nous",
			    "speakers":["cmottier"]
			  },{
			    "id":"s25",
			    "title":"Mettez un Panda roux dans votre Webview Android !",
			    "confRoom":"Salle Graslin",
			    "desc":"Au-delà du simple navigateur pour Android, Firefox est aussi une plateforme d'exécution d'applications HTML5 ouverte, les Open Web Apps.<br>Après une présentation de Mozilla Geckoview et de ce qu'il peut apporter à vos applications HTML5 sous Android par rapport à une Webview standard (modernité, performances...), nous détaillerons l'initiative de Mozilla avec les Open Web Apps et verrons concrètement comment l'utiliser pour déployer des applications HTML5 sous Android.",
			    "type":"mobile",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h04",
			    "video":"https://www.youtube.com/watch?v=SBzsADcBdBE",
			    "slides":"http://blog.dlecan.com/devfestnantes2014/prez-panda-roux-webview-android/",
			    "speakers":["cmottier"]
			  },{
			    "id":"s26",
			    "title":"Best development practices for GWT web applications",
			    "confRoom":"Salle Graslin",
			    "desc":"GWT est un framework puissant destiné à développer des applications web complexes. <br>Cependant développer de larges applications avec plusieurs développeurs peut devenir assez vite problématique tant pour maintenir une certaine structure dans le code que pour faire passer l'information à travers les développeurs ou encore garder un niveau de qualité du code élevé.<br>Dans cette présentation, nous allons développer les différentes bonne pratiques à mettre en oeuvre,<br>les différents outils et librairies à utiliser ainsi les différents processus que nous utilisons chez ArcBees pour développer des larges applications GWT de qualité.<br/>On en profitera également pour faire le point sur la technologie et parler des prochaines releases à venir.",
			    "type":"web",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h03",
			    "video":"https://www.youtube.com/watch?v=IId5E5kQ3iw",
			    "slides":"https://docs.google.com/presentation/d/14ywGLNxh06Wjn7XR-kOjXybROn5kscURT8qF-UD__JS0/pub?start=false&loop=false&delayms=5000&slide=id.p",
			    "speakers":["cmottier"]
			  },{
			    "id":"s27",
			    "title":"Fier d'etre polyglotte!",
			    "confRoom":"Salle Bellem",
			    "desc":"C'est un fait! Les nouvelles applications, et les nouveaux développeurs sont polyglottes!  Ils utilisent de différents langages, différentes solution de persistence...<br>Au cours de cette présentation vous verrez pourquoi il est intéressant, et important d'utiliser plusieurs technologies, langages et datastore, dans vos applications. Vous verrez comment mélanger des programmes Java/Java EE, des langages fonctionnels et langages de scripts mais aussi pourquoi utiliser plusieurs solution de persistence telles que des bases de données relationnelles, des bases NoSQL comme MongoDB mais aussi Hadoop pour répondre aux nouveaux besoin 'Big Data/Big Users'<br>En résumé : le bon outil pour le bon usage",
			    "type":"discovery",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h05",
			    "video":"https://www.youtube.com/watch?v=Epy4GdWX2x4",
			    "slides":"http://www.slideshare.net/tgrall/proud-to-be-polyglot",
			    "speakers":["cmottier"]
			  },{
			    "id":"s28",
			    "title":"Transformez vos Google Spread Sheets en API Web",
			    "confRoom":"Salle Graslin",
			    "desc":"Les données, il parait que c’est la clé du monde de demain : big data, objets connectés, open data, … Mais pourquoi se ruer vers le NoSQL ou vers nos chers SGBD ?<br>Venez découvrir comment faire simple avec Google Spreadsheet.<br><br>Lors de cette session, nous verrons comment tirer pleinement parti de vos Google Spreadsheets.<br>Venez découvrir :<br><ul><li>comment utiliser le SDK de Google pour manipuler vos spreadsheets à partir d’applications Java,</li><li>comment ajouter une API REST en quelques minutes pour exposer vos données,</li><li>comment mettre à profit les fonctions intégrées du tableur,</li><li>comment ajouter de la valeur a vos APIs.</li></ul>",
			    "type":"cloud",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h10",
			    "video":"https://www.youtube.com/watch?v=wBZmY5cQNyQ",
			    "speakers":["cmottier"]
			  },{
			    "id":"s29",
			    "title":"This session might interest you: an introduction to recommendation engines",
			    "confRoom":"Salle Graslin",
			    "desc":"Les moteurs de recommendation jouent un rôle de plus en plus important dans nos projets. Nous allons commencer avec une introduction aux principes, quelques exemples (parfois non-évident), et comment un moteur de recommandation peut aider (ou détruire) un projet.",
			    "type":"discovery",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h08",
			    "video":"https://www.youtube.com/watch?v=0zkSSJGcueQ",
			    "slides":"https://github.com/JeffAbrahamson/talks/tree/master/devfest-2014-recommendation",
			    "speakers":["cmottier"]
			  },{
			    "id":"s30",
			    "title":"The Dart side of the moon, la face cachée du cloud",
			    "confRoom":"Salle Bretagne",
			    "desc":"Dart est un nouveau langage, un runtime et un ensemble de bibliothèques et d’outils pour construire des applications web modernes et scalables. Dans un avenir proche, il sera possible de profiter de la puissance et de la productivité de Dart sur le Cloud Google. Dans cette session, vous découvrirez comment construire une application Dart du serveur jusqu’au navigateur et comment la déployer sur les Managed VMs de Google App Engine. Vous apprendrez comment structurer votre application pour une factorisation maximale du code et une meilleure maintenabilité.",
			    "type":"cloud",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h11",
			    "video":"https://www.youtube.com/watch?v=gWeWpfC6XzU",
			    "slides":"http://dartlangfr.net/conferences/2014-11-07/",
			    "speakers":["cmottier","fcampoy"]
			  },{
			    "id":"s31",
			    "title":"Développer pour Android TV",
			    "confRoom":"Salle Bretagne",
			    "desc":"Le Nexus Player est basé sur un SOC Intel. Découvrez ce que cela implique pour une application ou librairie existante, comme pour tout device Android utilisant une plateforme Intel, et ce qu’il faut faire pour rendre une application compatible Android TV de manière générale.",
			    "type":"mobile",
			    "difficulty":202,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h05",
			    "video":"https://www.youtube.com/watch?v=2dm_dRrnZE0",
			    "slides":"http://www.slideshare.net/ph0b/developing-for-android-tv-and-the-nexus-player",
			    "speakers":["cmottier"]
			  },{
			    "id":"s32",
			    "title":"Build et déploiement sur les stores avec Intel XDK",
			    "confRoom":"Salle Graslin",
			    "desc":"Le Intel XDK est un software permettant de développer et créer des applications en HTML/JS et de les émuler pour différents devices.<br>Le but de ce talk est de montrer l'utilisation ce SDK pour créer et exporter une application HTML/JS en application native via le déploiement multi store.<br>Nous verrons durant ce talk du code en HTML/JS avec un exemple de déploiement sur téléphone Android.",
			    "type":"web",
			    "difficulty":101,
			    "all" : false,
			    "lang":"fr",
			    "hour":"h05",
			    "video":"https://www.youtube.com/watch?v=oGxAFHM1O68",
			    "speakers":["cmottier"]
			  },{
			    "id":"s33",
			    "confRoom":"Espace Tour Lu",
			    "title":"Afterparty",
			    "type":"white",
			    "desc":"Un moment de networking convivial pour les plus motivés :)<br> L'utilisation de votre smartphone est fortement recommandée ;)",
			    "all" : true,
			    "hour":"h12"
			  }
			   ]
	}
	// On map les speakers
	_(agenda.sessions).map(function(session){
		if (!session.speakers)
			return session;
		session.speakers = _(session.speakers).map(function(speaker){
			return speakerService[_.findIndex(speakerService,function(speakerTmp){
				return speakerTmp.id === speaker;
			})];
		}).value();
		return session;
	}).value();

	// On prépare les données pour mieux les afficher
	agenda.sessionsTransform = _.chain(agenda.sessions).forEach(function(session){
		session.hourContent = agenda.hours[session.hour]
	}).groupBy(function(session){
		return session.hour;
	}).mapValues(function(sessionValues){
		return _(sessionValues).forEach(function(session){
			session.classCol = 	sessionValues.length === 1 ? 'col-md-12' : 'col-md-3';
		}).sortBy(function(session){
			switch (session.type){
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
	}).values().sortBy(function(sessionValues){return sessionValues[0].hour;})
	.value();

	return agenda;
}]);

/**
 * Sessions controller
 */ 
devfestApp.controller('AgendaCtrl', ['$scope', 'AgendaService', function ($scope, agendaService) {

    $scope.agenda = agendaService;
    

}]);