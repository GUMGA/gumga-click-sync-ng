angular.module('app', ['gumga.click-sync'])
  .controller('Ctrl', function($scope, $q, $timeout){

    $scope.save = function (x) {
        return service(x).then(function (resp) {
            console.log(resp)
        })
    }

    var service = function (x) {
        return $q(function (resolve) {
            $timeout(function () {
                resolve({data: x})
            }, 3000)
        })
    }

  })
