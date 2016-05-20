'use strict';

require('angular') ;
require('angular-route');
require('angular-animate'); 
require('angular-resource'); 

require('./controllers.js'); 
require('./animations.js');
require('./filters.js');
require('./services.js');
require('../css/app.css');
require('../css/animations.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');


var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        template: require('../partials/phone-list.html'),
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        template: require('../partials/phone-detail.html'),
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
module.exports = phonecatApp;