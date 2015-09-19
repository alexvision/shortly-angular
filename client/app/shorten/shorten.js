angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = [];

  $scope.addLink = function () {
    Links.addLink($scope.url)
      .then(function (link) {
        $scope.link.push(link);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
});
