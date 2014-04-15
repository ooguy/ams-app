angular
  .module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl : 'views/main.html',
          controller : 'MainController'
        })
        .when('/board', {
          templateUrl : 'views/board.html',
          controller : 'BoardController'
        });

      $locationProvider.html5Mode(true);
    }]);