//* ************************************************************************ *//
//* <name-uppercase> DIRECTIVE                                               *//
//* Definition for the <<name-lowercase>> directive.                         *//
//* - To be used when <usage>.                                               *//
//* ************************************************************************ *//

//* Import <<name-lowercase>> styles
import './<name-lowercase>.scss';

//* Define <<name-lowercase>> tag
function <name-capitalize>Directive() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        template: require('./<name-lowercase>.html'),
        link: function(scope, el, attrs) {

        }
    }
}

export default <name-capitalize>Directive;
