const colors = require('colors');

module.exports = {
    shouldSetDir() {
        const description = 'Would you like to set the project directory? [Y/n]'.gray;
        const message = "Expecting a 'Y' or 'N'.\n".red;

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
        const message = "Expecting an absolute path.\n".red;

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
        const message = "Expecting a 'http://' address.\n".red;
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
    },

    createComponent(name) {
        const description = {
            name: 'Component name [use dashes (-) for breaks]'.gray,
            usage: 'To be used as [e.g. \'the app\'s sidebar navigation\']'.gray
        }

        const message = {
            usage: 'Must provide a usage.\n'.red
        }

        return {
            properties: {
                name: {
                    description: description.name,
                    type: 'string',
                    default: name,
                },
                usage: {
                    description: description.usage,
                    type: 'string',
                    message: message.usage,
                    required: true
                }
            }
        }
    },

    createDirective(name) {
        const description = {
            name: 'Directive name [use dashes (-) for breaks]'.gray,
            usage: 'To be used when [e.g. \'the app needs a modal\']'.gray
        }

        const message = {
            usage: 'Must provide a usage.\n'.red
        }

        return {
            properties: {
                name: {
                    description: description.name,
                    type: 'string',
                    default: name,
                },
                usage: {
                    description: description.usage,
                    type: 'string',
                    message: message.usage,
                    required: true
                }
            }
        }
    },

    createFilter(name) {
        const description = {
            name: 'Filter name [use dashes (-) for breaks]'.gray,
            usage: 'To be used for [e.g. \'searching through an array of objects\']'.gray
        }

        const message = {
            usage: 'Must provide a usage.\n'.red
        }

        return {
            properties: {
                name: {
                    description: description.name,
                    type: 'string',
                    default: name,
                },
                usage: {
                    description: description.usage,
                    type: 'string',
                    message: message.usage,
                    required: true
                }
            }
        }
    },

    createInterceptor(name) {
        const description = {
            name: 'Interceptor name [use dashes (-) for breaks]'.gray,
            usage: 'To be used for [e.g. \'handling CSRF tokens\']'.gray
        }

        const message = {
            usage: 'Must provide a usage.\n'.red
        }

        return {
            properties: {
                name: {
                    description: description.name,
                    type: 'string',
                    default: name,
                },
                usage: {
                    description: description.usage,
                    type: 'string',
                    message: message.usage,
                    required: true
                }
            }
        }
    },

    createRoute(state) {
        const description = {
            state: 'State [e.g. \'home.contacts\']'.gray,
            route: 'Route [e.g. \'contacts/\']'.gray,
            usage: 'Used for [e.g. \'the app\'s contact page\']'.gray
        }

        const message = {
            route: "Expecting a route in the form of '<state>/<?>/'.\n".red,
            usage: 'Must provide a usage.\n'.red
        }

        return {
            properties: {
                state: {
                    description: description.state,
                    type: 'string',
                    default: state,
                },
                route: {
                    description: description.route,
                    type: 'string',
                    pattern: /^[^\/]([a-zA-z\:]+\/){1,}$/gm,
                    message: message.route,
                    required: true
                },
                usage: {
                    description: description.usage,
                    type: 'string',
                    message: message.usage,
                    required: true
                }
            }
        }
    },

    createService(name) {
        const description = {
            name: 'Service name [use dashes (-) for breaks]'.gray,
            usage: 'To be used for [e.g. \'handling all calls to the API\']'.gray
        }

        const message = {
            usage: 'Must provide a usage.\n'.red
        }

        return {
            properties: {
                name: {
                    description: description.name,
                    type: 'string',
                    default: name,
                },
                usage: {
                    description: description.usage,
                    type: 'string',
                    message: message.usage,
                    required: true
                }
            }
        }
    },
}
