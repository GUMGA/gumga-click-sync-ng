(function(angular){

    angular.module('app', ['gumga.click-sync'])

        .controller('ctrl', function($scope, $q, $timeout) {


            $scope.salvar = function (x) {
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

            $scope.teste = function(){
              alert('clicou');
            }


        });

})(window.angular);
