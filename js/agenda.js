'use strict';

/**
 * Sessions controller
 */
devfestApp.controller('AgendaCtrl', ['$scope', '$uibModal', '$http', '$location', '$anchorScroll', 'ProgrammeService', 'FavoritesService'
    , function ($scope, $uibModal, $http, $location, $anchorScroll, progService, favService) {

    $scope.agenda = {};
    progService.getProgramme(function(agenda){
        $scope.agenda = agenda;
    });
    $scope.showAgenda = false;

    $scope.openModal = function(sessionToDisplay) {
        var modalInstance = $uibModal.open({
          templateUrl: '/partials/modal-schedule.html',
          controller: ['$scope', '$uibModalInstance', 'FavoritesService',
            function($scope, $uibModalInstance, favService) {
                $scope.session = sessionToDisplay;
                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };
                $scope.toggleFav = function(session){
                    favService.toggleFav(session);
                }
            }],
          windowClass: 'text-left people-modal',
        });
    };

    $scope.scrollTo = function(id) {
       var old = $location.hash();
       $location.hash(id);
       $anchorScroll();
       //reset to old to keep any additional routing logic from kicking in
       $location.hash(old);
    };

    $scope.toggleAgenda = function(){
        $scope.showAgenda = !$scope.showAgenda;
        textBtnToggleAgenda();
    }


    $scope.toggleFav = function(session){
        favService.toggleFav(session);
    }

    function textBtnToggleAgenda(){
        $scope.btnToggleAgenda = $scope.showAgenda ? "Cacher mes favoris" : "Afficher mes favoris";
    }

    textBtnToggleAgenda();

    $scope.favInSessions = function(arraySession){      
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