//* ************************************************************************ *//
//* CSRF SERVICE                                                             *//
//* A service for handling the retrieval/removal of csrf tokens.             *//
//* ************************************************************************ *//

export default class csrfService {
    constructor(AppConstants, $cookies) {
        'ngInject';

        this.$cookies = $cookies;
        this._csrfKey = AppConstants.csrfKey;
    }

    get() {
        return this.$cookies.get('this._csrfKey');
    }

    remove() {
        return this.$cookies.remove(this._csrfKey);
    }
}
