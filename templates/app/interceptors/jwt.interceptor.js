//* ************************************************************************ *//
//* JWT INTERCEPTOR                                                          *//
//* An interceptor for handling jwt authentication tokens.                   *//
//* ************************************************************************ *//

function jwtInterceptor(jwtService) {
    'ngInject';

    return {
        //* Send jwt as a Bearer token on every request
        request(config) {
            config.headers['Authorization'] = `Bearer ${jwtService.get()}`;
            return config;
        }
    }
}

export default jwtInterceptor;
