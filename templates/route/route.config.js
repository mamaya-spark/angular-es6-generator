//* ************************************************************************ *//
//* <name-uppercase> STATE CONFIGURATION                                     *//
//* - state: '<name-lowercase>'                                              *//
//* - route: '<route>'                                                       *//
//* ************************************************************************ *//

//* Import '<name-lowercase>' styles
import './<name-lowercase>.scss';

//* Import '<name-lowercase>' controller
import <name-capitalize>Controller from './<name-lowercase>.controller';

//* Define '<route>' route
function <name-capitalize>Config($stateProvider) {
    'ngInject';

    $stateProvider
        .state('<name-lowercase>', {
            url: '<route>',
            template: require('./<name-lowercase>.html'),
            controller: <name-capitalize>Controller,
            controllerAs: 'ctrl_<name-underscore>'
        });
}

export default <name-capitalize>Config;
