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
    createApp(appName) {
        const description = {
            appName: 'App name'.gray,
            apiAddress: 'API address'.gray,
            socketAddress: 'Socket server address'.gray,
            csrfKey: 'CSRF cookie'.gray,
            jwtKey: 'JWT cookie'.gray
        }
        const message = "Expecting a 'http://' address.\n";
        const appNameDefault = appName || 'app';

        return {
            properties: {
                appName: {
                    description: description.appName,
                    type: 'string',
                    default: appNameDefault
                },
                apiAddress: {
                    description: description.apiAddress,
                    type: 'string',
                    pattern: /^http/,
                    message,
                    default: 'http://localhost:3000/api'
                },
                socketAddress: {
                    description: description.socketAddress,
                    type: 'string',
                    pattern: /^http/,
                    message,
                    default: `http://localhost:3000/${appNameDefault}`
                },
                csrfKey: {
                    description: description.csrfKey,
                    type: 'string',
                    default: 'csrftoken'
                },
                jwtKey: {
                    description: description.jwtKey,
                    type: 'string',
                    default: `${appNameDefault}.jwt`
                }
            }
        }
    }
}
