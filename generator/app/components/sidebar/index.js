//* ***************** *//
//* SIDEBAR COMPONENT *//
//* ***************** *//

import './sidebar.scss';
import SidebarController from './sidebar.controller';

let SidebarComponent = {
    bindings: {

    },
    controller: SidebarController,
    controllerAs: 'ctrl_sidebar',
    template: require('./sidebar.html')
};

export default SidebarComponent;
