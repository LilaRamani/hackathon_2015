/**
 * Created by elliotcobb on 10/11/15.
 */

// initialize AngularJS
var tripWebApp = angular.module('tripWebApp', []);

tripWebApp.controller('tripWebCtrl', function ($scope) {
    $scope.locations = [{address : ''}];
    $scope.hello = 'world';
    $scope.addLocation = function() {
        $scope.locations.push({address : ''});
        setTimeout(function() {
            addAutoCompleteToAllInputs();
        }, 700);
    };
});