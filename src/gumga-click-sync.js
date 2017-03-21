(() => {
    'use strict';

    const controller = (scope, elm, attr) => {

        elm.bind('click', (event) => {
            event.stopImmediatePropagation();

            const promise = scope.gumgaClickSync();

            if(!promise){
                throw 'A diretiva gumgaClickSync necessita que a função retorne uma promise.';
            }

            elm[0].disabled = true;

            promise.then(()=>{
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