//* ************************************************************************ *//
//* ANGULAR APP MODULE                                                       *//
//* Configure, create, and bootstrap the application.                        *//
//* ************************************************************************ *//

//* Import global app stylings
import './styles/global.scss';

//* Import app configs
import AppConstants from './config/app.constants';
import AppConfig from './config/app.config';
import AppRun from './config/app.run';

//* Import app child modules
import './components';
import './directives';
import './filters';
import './routes';
import './services';

//* Declare app dependencies
const requires = [
    //- vendors
    'ui.router',
    'ngCookies',
    'ngAnimate',
    'ngLodash',
    'nvd3',

    //- child modules
    'app.components',
    'app.directives',
    'app.filters',
    'app.routes',
    'app.services'
];

//* Create application
angular
    .module(AppConstants.appName, requires)
    .constant('AppConstants', AppConstants)
    .config(AppConfig)
    .run(AppRun);

//* Bootstrap application
angular
    .bootstrap(document, [ AppConstants.appName ], { strictDi: true });
