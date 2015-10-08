'use strict';

/**
 * Sessions controller
 */
devfestApp.controller('AgendaCtrl', ['$scope', '$http', 'ProgrammeService', 'FavoritesService'
    , function ($scope, $http, progService, favService) {

    $scope.agenda = {};
    progService.getProgramme(function(agenda){
        $scope.agenda = agenda;
    });
    $scope.showAgenda = false;

    $scope.toggleAgenda = function(){
        $scope.showAgenda = !$scope.showAgenda;
        textBtnToggleAgenda();
    }


    $scope.toggleFav = function(session){
        favService.toggleFav(session);
    }

    function textBtnToggleAgenda(){
        $scope.btnToggleAgenda = $scope.showAgenda ? "Cacher mon Agenda" : "Afficher mon Agenda";
    }

    textBtnToggleAgenda();

    $scope.favInSessions = function(arraySession){
        console.log(arraySession);
        console.log(!_.every(arraySession, function(session){
            console.log(session);            
            if (!session.type){
                return true;
            }else{
                return !session.fav;
            }
        }));
        return !_.every(arraySession, function(session){
            if (!session.type){
                return true;
            }else{
                return !session.fav;
            }
        });
    }
    
    var first = true;
    $scope.repeatFinish = function(){
    	if (first){
    		first = false;
    	}else{
            //window.devfestReadyFunction();
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