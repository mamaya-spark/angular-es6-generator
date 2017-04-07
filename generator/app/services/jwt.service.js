//* ************************************************************************ *//
//* JWT SERVICE                                                              *//
//* A service for handling the retrieval/removal of jwt tokens.              *//
//* ************************************************************************ *//

export default class jwtService {
    constructor(AppConstants, $cookies) {
        'ngInject';

        this.$cookies = $cookies;
        this._jwtKey = AppConstants.jwtKey;
    }

    get() {
        return this.$cookies.get(this._jwtKey);
    }

    remove() {
        return this.$cookies.remove(this._jwtKey);
    }
}
