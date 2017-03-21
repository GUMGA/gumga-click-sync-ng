(() => {
    'use strict';

    const controller = (scope, elm, attr) => {

        elm.bind('click', (event) => {
            event.stopImmediatePropagation();

            const promisse = scope.gumgaClickSync();

            if(!promisse){
                throw 'A diretiva gumgaClickSync necessita que a função retorne uma promisse.';
            }

            elm[0].disabled = true;

            promisse.then(()=>{
                elm[0].disabled = false;
            })

        });

    }

    const GumgaClickSync = () => {
        return {
            restrict: 'A',
            priority : -1,
            scope: {
                gumgaClickSync: '&'
            },
            link: controller
        }
    }

    GumgaClickSync.$inject = [];

    angular.module('gumga.click-sync', [])
        .directive('gumgaClickSync', GumgaClickSync);

})();