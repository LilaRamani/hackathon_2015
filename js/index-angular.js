/**
 * Created by elliotcobb on 10/11/15.
 */

// initialize AngularJS
var rrApp = angular.module('tripWebApp', []);

rrApp.controller('tripWebCtrl', function () {
    var tripWeb = this;
    tripWeb.hello = "WoRlD";
});