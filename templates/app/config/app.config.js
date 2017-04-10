//* ************************************************************************ *//
//* APP CONFIGURATION                                                        *//
//* Provide any app configuration here.                                      *//
//* ************************************************************************ *//

//* Import interceptors here.
import csrfInterceptor from '../interceptors/csrf.interceptor';
import jwtInterceptor from '../interceptors/jwt.interceptor';

function AppConfig($httpProvider) {
    'ngInject';

    $httpProvider.interceptors.push(csrfInterceptor);
    $httpProvider.interceptors.push(jwtInterceptor);
}

export default AppConfig;
