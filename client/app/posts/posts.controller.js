'use strict';
(function(){

class PostsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yoHackerNewsApp')
  .component('posts', {
    templateUrl: 'app/posts/posts.html',
    controller: PostsComponent
  });

})();
