//* ************************************************************************ *//
//* <name-uppercase> COMPONENT                                               *//
//* Definition for the <<name-lowercase>> component.                         *//
//* - To be used as <usage>.                                                 *//
//* ************************************************************************ *//

//* Import <<name-lowercase>> styles
import './<name-lowercase>.scss';

//* Import <<name-lowercase>> controller
import <name-capitalize>Controller from './<name-lowercase>.controller';

//* Define <<name-lowercase>> tag
let <name-capitalize>Component = {
    bindings: {

    },
    controller: <name-capitalize>Controller,
    controllerAs: 'ctrl_<name-underscore>',
    template: require('./<name-lowercase>.html')
};

export default <name-capitalize>Component;
