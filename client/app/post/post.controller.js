'use strict';
(function(){

class PostComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yoHackerNewsApp')
  .component('post', {
    templateUrl: 'app/post/post.html',
    controller: PostComponent
  });

})();
