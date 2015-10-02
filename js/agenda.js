'use strict';

/**
 * Sessions controller
 */
devfestApp.controller('AgendaCtrl', ['$scope', '$http', 'ProgrammeService', function ($scope, $http, progService) {

    $scope.agenda = {};
    progService.getProgramme(function(agenda){
        $scope.agenda = agenda;
    });

    
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