'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'link': '/'
  },
  {
    'title': 'Posts',
    'link': '/posts'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('yoHackerNewsApp')
  .controller('NavbarController', NavbarController);
