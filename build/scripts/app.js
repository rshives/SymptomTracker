/** app/scripts/app.js */

var symptomTrackerApp = angular.module('symptomTrackerApp', [])

.controller('linkCtrl', function($scope) {
  $scope.links = [
    {address: 'http://rshives.github.io', desc: 'My Resume'},
    {address: 'http://www.google.com/', desc: 'Google'},
    {address: 'http://richards-ramblings.blogspot.com/', desc: 'My Blog'},
    {address: 'http://www.books24x7.com/login.asp?ic=0', desc: 'Books 24x7'},
  ];
});
