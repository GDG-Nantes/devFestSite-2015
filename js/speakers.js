'use strict';


/**
 * Sessions controller
 */
devfestApp.controller('SpeakersCtrl', ['$scope', 'ProgrammeService', function ($scope, progService) {

    $scope.speakers = [];
    progService.getProgramme(function(programme){
        $scope.speakers = programme.speakers;
    });

}]);