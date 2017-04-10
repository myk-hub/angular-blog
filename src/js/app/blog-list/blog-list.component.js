'use strict';

angular.module('blogList').
component('blogList', {
    templateUrl: 'templates/blog-list.html',
    controller: function(Post, $location, $routeParams, $scope, $rootScope) {
        $scope.goToItem = function(post) {
            $rootScope.$apply(function() {
                $location.path("/blog/" + post.id)
            })
        }
        $scope.items = Post.query();
    }
});
