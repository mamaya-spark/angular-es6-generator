//* ************************************************************************ *//
//* COMPONENTS MODULE                                                        *//
//* A child module that registers all the components on the app.             *//
//* ************************************************************************ *//

let ComponentsModule = angular.module(
    'app.components', [ ]
);

//* Import components
import BannerComponent from './banner';
import SidebarComponent from './sidebar';

//* Register components
ComponentsModule
    .component('banner', BannerComponent)
    .component('sidebar', SidebarComponent);

export default ComponentsModule;
