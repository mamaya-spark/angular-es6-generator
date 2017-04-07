//* ************************************************************************ *//
//* HEADER COMPONENT                                                         *//
//* Definition for the <header> component.                                   *//
//* - To be used as the app's main header.                                   *//
//* ************************************************************************ *//

//* Import <header> styles
import './header.scss';

//* Import <header> controller
import HeaderController from './header.controller';

//* Define <header> tag
let HeaderComponent = {
    bindings: {

    },
    controller: HeaderController,
    controllerAs: 'ctrl_header',
    template: require('./header.html')
};

export default HeaderComponent;
