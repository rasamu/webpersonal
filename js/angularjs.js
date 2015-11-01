// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

angularRoutingApp.controller('mainController', function() {

});

angularRoutingApp.controller('estudiosController', function() {

});

angularRoutingApp.controller('proyectosController', function() {

});

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'pages/sobremi.html',
      controller: 'mainController',
    })
    .when('/estudios', {
      templateUrl: 'pages/estudios.html',
      controller: 'estudiosController',
    })
    .when('/proyectos', {
      templateUrl: 'pages/proyectos.html',
      controller: 'proyectosController',
    })
    .otherwise({
      redirectTo: '/',
    });
});
