const colors = require('colors');

module.exports = {
    shouldSetDir() {
        const description = 'Would you like to set the project directory? [Y/n]'.gray;
        const message = "Expecting a 'Y' or 'N'.\n";

        return {
            properties: {
                shouldSetDir: {
                    description,
                    type: 'string',
                    pattern: /(y|n)/i,
                    message,
                    default: 'Y',
                    before: function(value) {
                        const answer = value.toUpperCase();

                        if(answer === 'Y') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    },
    pathToDir() {
        const description = 'Where would you like the project to be generated?'.gray;
        const message = "Expecting an absolute path.\n";

        return {
            properties: {
                pathToDir: {
                    description,
                    type: 'string',
                    pattern: /^\/.*$/,
                    message,
                    default: process.cwd()
                }
            }
        }
    },
    createApp() {
        const description = {
            appName: '',
            apiAddress: '',
            socketAddress: '',
            csrfKey: '',
            jwtKey: ''
        }

        return {
            properties: {
                appName: {

                },
                apiAddress: {

                },
                socketAddress: {

                },
                csrfKey: {

                },
                jwtKey: {

                }
            }
        }
    }
}
