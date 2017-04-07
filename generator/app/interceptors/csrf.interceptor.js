//* **************** *//
//* CSRF INTERCEPTOR *//
//* **************** *//

function csrfInterceptor(csrfService) {
    'ngInject';

    return {
        //* Send CSRF token on every request
        request: function(config) {
            config.headers['X-CSRFToken'] = csrfService.get();
            return config;
        }
    }
}

export default csrfInterceptor;
