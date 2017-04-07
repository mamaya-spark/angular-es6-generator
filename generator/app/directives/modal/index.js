//* *************** *//
//* MODAL DIRECTIVE *//
//* *************** *//

import './modal.scss';

function ModalDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        template: require('./modal.html'),
        link: function(scope, el, attrs) {

        }
    }
}

export default ModalDirective;
