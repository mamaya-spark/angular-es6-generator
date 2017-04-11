//* ************************************************************************ *//
//* CSRF INTERCEPTOR                                                         *//
//* An interceptor for handling CSRF tokens.                                 *//
//* ************************************************************************ *//

function csrfInterceptor(csrfService) {
    'ngInject';

    return {
        //* Send CSRF token on every request
        request(config) {
            config.headers['X-CSRFToken'] = csrfService.get();
            return config;
        }
    }
}

export default csrfInterceptor;
