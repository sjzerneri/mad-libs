var app = angular.module('ngMadLibs', [])

app.constant('VERSION', "1")
app.run(function (VERSION, $rootScope) {
    $rootScope.version = VERSION;
})

app.controller('madLibsController', function ($scope) {

    $scope.data = {};

    $scope.gender = {
        pronoun: 'she',
        poss: 'her'
    };

});
