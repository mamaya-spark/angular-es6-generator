//* ************************************************************************ *//
//* ANGULAR APP MODULE                                                       *//
//* Set up, create, and bootstrap the application.                           *//
//* ************************************************************************ *//

//* Import global stylings
import './styles/global.scss';

//* Import app configs
import AppConstants from './config/app.constants';
import AppConfig from './config/app.config';
import AppRun from './config/app.run';

//* Import app child modules
import './components';
import './directives';
import './filters';
import './interceptors';
import './routes';
import './services';

//* Declare app dependencies
const requires = [
    //- vendors
    'ui.router',
    'ngAnimate',
    'ngLodash',
    'nvd3',

    //- child modules
    'app.components',
    'app.directives',
    'app.filters',
    'app.interceptors',
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
