//* ************************************************************************ *//
//* COMPONENTS MODULE                                                        *//
//* A child module that registers all the components on the app.             *//
//* ************************************************************************ *//

let ComponentsModule = angular.module(
    'app.components', [ ]
);

//* Import components
import HeaderComponent from './header';
import SidebarComponent from './sidebar';

//* Register components
ComponentsModule
    .component('header', HeaderComponent)
    .component('sidebar', SidebarComponent);

export default ComponentsModule;
