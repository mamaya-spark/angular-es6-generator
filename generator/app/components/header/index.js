//* **************** *//
//* HEADER COMPONENT *//
//* **************** *//

import './header.scss';
import HeaderController from './header.controller';

let HeaderComponent = {
    bindings: {

    },
    controller: HeaderController,
    controllerAs: 'ctrl_header',
    template: require('./header.html')
};

export default HeaderComponent;
