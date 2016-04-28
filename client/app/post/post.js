'use strict';

angular.module('yoHackerNewsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('posts', {
        template: '<post></post>'
      });
  });
