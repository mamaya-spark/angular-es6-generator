//* ************************************************************************ *//
//* HOME STATE CONFIGURATION                                                 *//
//* - state: 'home'                                                          *//
//* - route: '/'                                                             *//
//* ************************************************************************ *//

//* Import 'home' styles
import ('./home.scss');

//* Import 'home' controller
import HomeController from './home.controller';

//* Define '/' route
function HomeConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            abstract: true,
            url: '/',
            template: require('./home.html'),
            controller: HomeController,
            controllerAs: 'ctrl_home'
        });
}

export default HomeConfig;
