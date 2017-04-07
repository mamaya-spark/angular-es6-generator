import ('./home.scss');
import HomeController from './home.controller';

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
