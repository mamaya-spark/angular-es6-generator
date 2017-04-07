//* ************************************************************************ *//
//* INTERCEPTORS MODULE                                                      *//
//* A child module that registers all the interceptors on the app.           *//
//* ************************************************************************ *//

let InterceptorsModule = angular.module(
    'app.interceptors', [ ]
);

//* Import interceptors
import csrfInterceptor from './csrf.interceptor';
import jwtInterceptor from './jwt.interceptor';

//* Register interceptors
InterceptorsModule
    .factory('csrfInterceptor', csrfInterceptor)
    .factory('jwtInterceptor', jwtInterceptor);

export default InterceptorsModule;
