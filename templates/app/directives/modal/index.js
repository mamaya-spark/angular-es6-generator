//* ************************************************************************ *//
//* MODAL DIRECTIVE                                                          *//
//* Definition for the <modal> directive.                                    *//
//* - To be used when the app needs a modal.                                 *//
//* ************************************************************************ *//

//* Import <modal> styles
import './modal.scss';

//* Define <modal> tag
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
