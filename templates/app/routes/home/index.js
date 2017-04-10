//* ************************************************************************ *//
//* HOME STATE ROUTE                                                         *//
//* Definition for the 'home' state.                                         *//
//* - A route for the app's layout.                                          *//
//* ************************************************************************ *//

//* Import 'home' config
import HomeConfig from './home.config';

//* Define 'home' module
let HomeModule = angular.module(
    'route.home', [ ]
)

//* Register '/' route
HomeModule
    .config(HomeConfig);

export default HomeModule;
