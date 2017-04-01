'use strict';

angular.module('blogList').
component('blogList', {
            //template: "<div class=''><h2 class='new-class'>{{ title }} </h2><button ng-click='someClickTest()'>Click me</button></div>",
            templateUrl: 'templates/blog-list.html',
            controller: function($routeParams, $scope) {
                console.log($routeParams);

                var blogItems = [
                    {title: "Some title", id: 1, description: "This is a book", publishDate: "25-03-2017"},
                    {title: "Title", id: 2, description: "This is a book"},
                    {title: "Tea", id: 3, description: "This is a book"},
                    {title: "Lite", id: 4, description: "This is a book"},
                ]

                $scope.items = blogItems;

                $scope.title = 'Hi there'
                $scope.clicks = 0
                $scope.someClickTest = function() {
                    console.log('clicked')
                    $scope.clicks += 1
                    $scope.title = 'clicked ' + $scope.clicks + ' times'
                }
            }
        });

            // controller('BlogListController', function($scope) {
            // console.log("Hello Michan")
            // $scope.title = 'Hi there'
            // $scope.clicks = 0
            // $scope.someClickTest = function() {
            //     console.log('clicked')
            //     $scope.clicks += 1
            //     $scope.title = 'clicked ' + $scope.clicks + ' times'
            // }
        // });

        //component('blogList');
