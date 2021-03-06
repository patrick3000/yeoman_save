'use strict';

  angular.module('yoHackerNewsApp').factory('PostsService', ['$http', function($http){
   var api = {
     getPosts : function() {
           return $http.get('/api/posts')
     },
     addPost : function(post) {
          return $http.post('/api/posts',post)
     },
     addPostComment : function(post_id, comment) {
          return $http.post('/api/posts/' + post_id + '/comments' ,
                            comment)
     },
     upvotePost : function(post_id, new_upvote_count ) {
          return $http.post('/api/posts/' + post_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
     upvotePostComment : function(post_id, comment_id, new_upvote_count ) {
          return $http.post( '/api/posts/' +
                      post_id + '/comments/' +  comment_id + '/upvotes', 
                     {upvotes: new_upvote_count })
     },
     getPost : function(post_id) {
        return $http.get('/api/posts/' + post_id )
     }
  }
  return api
}])