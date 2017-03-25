'use strict';

angular.module('blogList').
component('blogList', {
            //template: "<div class=''><h2 class='new-class'>{{ title }} </h2><button ng-click='someClickTest()'>Click me</button></div>",
            templateUrl: 'templates/blog-list.html',
            controller: function($scope) {
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
