'use strict'

/**
 * Sessions controller
 */
devfestApp.factory('FavoritesService', ['$http', function ($http) {

    function toggleFav(element){
    	element.fav = !element.fav;
    	var favs = localStorage['fav'];
    	if (!favs){
    		favs = [];
    	}else{
    		favs = JSON.parse(localStorage['fav']);
    	}
    	if (element.fav){
    		favs.push(element.id);
    	}else{
    		_.remove(favs, function(favTmp){
    			return favTmp === element.id
    		});
    	}
    	localStorage['fav'] = JSON.stringify(favs);
    	

    }

   	function applyFav(sessions, favs){
   		_(sessions).forEach(function(session){
   			session.fav = _.indexOf(favs, session.id) != -1;
   		}).value();
   	}

    return {
    	toggleFav : toggleFav,
    	applyFav : applyFav
    }

}]);