// module1
const angular = require('angular');


angular.module('directoryApp', [])
    .controller('directoryController', function($scope) {
        $scope.list = [
          {name:'Ben', age: 44, img:'http://lorempixel.com/400/200/'},
          {name:'Jerrey', age: 36, img:'http://lorempixel.com/400/200/'},
          {name:'Jacob', age: 24, img:'http://lorempixel.com/400/200/'}
          ]
       });
