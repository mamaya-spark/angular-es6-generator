//* **************** *//
//* HOME STATE ROUTE *//
//* **************** *//

import HomeConfig from './home.config';

let HomeModule = angular.module(
    'route.home', [ ]
)

HomeModule
    .config(HomeConfig);

export default HomeModule;
