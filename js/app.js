'use strict';

var devfestApp = angular.module('devfest2015', ['ngSanitize', 'ngAnimate', 'ui.bootstrap']);

devfestApp.directive('ngcDone', function ($timeout) {  
    return function (scope, element, attrs) {  
        scope.$watch(attrs.ngcDone, function (callback) {  
  
            if (scope.$last === undefined) {  
                scope.$watch('htmlElement', function () {  
                    if (scope.htmlElement !== undefined) {  
                        $timeout(eval(callback), 1);  
                    }  
                });  
            }  
  
            if (scope.$last) {  
                eval(callback)();  
            }  
        });  
    }  
});  