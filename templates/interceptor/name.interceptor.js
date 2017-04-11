//* ************************************************************************ *//
//* <name-uppercase> INTERCEPTOR                                             *//
//* An interceptor for <usage>.                                              *//
//* ************************************************************************ *//

function <name-camelcase>Interceptor() {
    'ngInject';

    return {
        request(config) {
            return config;
        },

        response(res) {
            return res;
        }
    }
}

export default <name-camelcase>Interceptor;
