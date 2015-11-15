devfestApp.controller('PresseCtrl', ['$scope', '$http', function ($scope, $http) {

 	$scope.presse = [];
    $http({
            url: '/assets/presse.json',
        }).then(function (response) {
        	$scope.presse = response.data.presse;
    	});
}]);