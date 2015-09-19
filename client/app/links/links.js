angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  console.log("LINKS:", Links);
  console.log("SCOPE:", $scope);
  $scope.data = {};
  $scope.data.links = [];

  $scope.getLinks = function () {
    Links.getLinks()
      .then(function (data) {
        $scope.data.links = data;
      })
      .catch(function (err) {
        console.error('getLinks err: ', err);
      });
  };

  $scope.getLinks();
 
});

