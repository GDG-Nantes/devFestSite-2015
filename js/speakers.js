'use strict';
/** 
 * Sessions controller 
 */
devfestApp.controller('SpeakersCtrl', ['$scope', function ($scope, $http, $location) {
	$scope.speakers = [
		{
			firstname : "Cyril",
			lastname : "Mottier",
			image : "cmottier_360x360.jpeg",
			ribon : {
				class : "gde",
				title : "GDE",
				link : "https://developers.google.com/experts/",
				tile_long : "Google Developer Expert"
			},
			company : "Capitaine Train", 
			about : "Passionné de technologies et de design, Cyril est un amoureux d'android et un développeur aux multiples talents. Il est aussi très actif dans la communauté android où il anime régulièrement des sessions et publie des articles sur son blog.",
			socials : [{				
				class : "google-plus",
				link : "https://plus.google.com/+CyrilMottier/"
				},{				
				class : "twitter",
				link : "https://twitter.com/cyrilmottier"
				},{				
				class : "github",
				link : "https://github.com/cyrilmottier"
				}
			]
		},
		{
			firstname : "CommitStrip",
			lastname : "",
			image : "commitstrip_360x360.jpeg",
			ribon : {
				class : "gdg",
				title : "Googler",
				tile_long : "Googler"
			},
			company : "CommitStrip", 
			about : "bla bla bla",
			socials : []
		},
		{
			firstname : "François",
			lastname : "Beaufort",
			image : "fbeaufort_360x360.jpg",
			ribon : {
				class : "gdgw",
				title : "Googler",
				tile_long : "Googler"
			},
			company : "Google", 
			about : "bla bla bla",
			socials : []
		},
		{
			firstname : "Geoffrey",
			lastname : "Dorne",
			image : "gdorne_360x360.jpeg",
			company : "Human & Design", 
			about : "bla bla bla",
			socials : []
		},
		{
			firstname : "Raphaël",
			lastname : "Goetter",
			image : "rgoetter_360x360.jpeg",
			company : "Alsacréations", 
			about : "bla bla bla",
			socials : []
		},
		{
			firstname : "Didier",
			lastname : "Girard",
			image : "dgirard_360x360.jpg",
			company : "Sfeir", 
			about : "bla bla bla",
			socials : []
		},
		{
			firstname : "Francesc",
			lastname : "Campoy Flores",
			image : "fcampoy_360x360.png",
			company : "Google", 
			about : "bla bla bla",
			socials : []
		}
	];
    
    for (var speakerIndex = 0; speakerIndex < $scope.speakers.length; speakerIndex++){
        var speaker = $scope.speakers[speakerIndex];
        if (speaker.socials.length > 0){
            for (var socialIndex = 0; socialIndex < speaker.socials.length; socialIndex++){
                var social = speaker.socials[socialIndex];
                social.svg = "/img/sprites/sprites.svg#icon-"+social.class;
            }
        }
    }
}]);
