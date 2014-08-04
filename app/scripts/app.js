/** app/scripts/app.js */

var app = angular.module('app', []);

app.controller('linkController', function($scope) {
  $scope.links = [
    {'address': 'http://www.candrsolutions.net/resume.html', 'desc': 'My Resume'},
    {'address': 'http://www.google.com/', 'desc': 'Google'},
    {'address': 'http://richards-ramblings.blogspot.com/', 'desc': 'My Blog'},
    {'address': 'http://rshives.backpackit.com/', 'desc': 'Backpack'},
    {'address': 'http://www.techmeme.com/', 'desc': 'Techmeme'},
    {'address': 'http://friendfeed.com/', 'desc': 'Friend Feed'},
    {'address': 'http://www.books24x7.com/login.asp?ic=0', 'desc': 'Books 24x7'},
    {'address': 'https://mycampus.phoenix.edu/', 'desc': 'University of Phoenix'}];
});
