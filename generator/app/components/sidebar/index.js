//* ************************************************************************ *//
//* SIDEBAR COMPONENT                                                        *//
//* Definition for the <sidebar> component.                                  *//
//* - To be used as the app's sidebar navigation.                            *//
//* ************************************************************************ *//

//* Import <sidebar> styles
import './sidebar.scss';

//* Import <sidebar> controller
import SidebarController from './sidebar.controller';

//* Define <sidebar> tag
let SidebarComponent = {
    bindings: {

    },
    controller: SidebarController,
    controllerAs: 'ctrl_sidebar',
    template: require('./sidebar.html')
};

export default SidebarComponent;
