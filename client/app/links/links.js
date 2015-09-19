angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  // Your code here
  $scope.data = {};
  $scope.data.links = [];

  $scope.getLinks = function () {
    Links.getLinks()
      .then(function (data) {
        $scope.data.links = data;
        console.log("LINKS:", $scope.data.links);
      })
      .catch(function (err) {
        console.error('getLinks err: ', err);
      });
  };

  $scope.goToLink = function (url) {
    $location.absUrl(url);
  };

  $scope.getLinks();
});

