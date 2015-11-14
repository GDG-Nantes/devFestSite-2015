'use strict';


/**
 * Sessions controller
 */
devfestApp.controller('SpeakersCtrl', ['$scope', '$uibModal', 'ProgrammeService', function ($scope, $uibModal, progService) {

    $scope.speakers = [];
    progService.getProgramme(function(programme){
        $scope.speakers = programme.speakers;
    });

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

}]);