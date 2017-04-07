//* *************** *//
//* JWT INTERCEPTOR *//
//* *************** *//

function jwtInterceptor(jwtService) {
    'ngInject';

    return {
        //* Send jwt as a Bearer token on every request
        request: function(config) {
            config.headers['Authorization'] = `Bearer ${jwtService.get()}`;
            return config;
        }
    }
}

export default jwtInterceptor;
