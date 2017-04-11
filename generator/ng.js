const fs             = require('fs');
const path           = require('path');
const Q              = require('q');
const prompt         = require('prompt');
const copydir        = require('copy-dir');
const schema         = require('../schema');
const util           = require('../util');
const logger         = require('../logger');
const PATH_TO_CONFIG = path.join(__dirname, '..', 'config.json');

module.exports = {
    app(appName) {
        const config    = require(PATH_TO_CONFIG);
        const proj_src  = path.join(config.PATH_TO_TEMPLATES, 'project');
        const proj_dest = config.PATH_TO_PROJECT;
        const app_src   = path.join(config.PATH_TO_TEMPLATES, 'app');
        const app_dest  = path.join(config.PATH_TO_PROJECT, config.PATH_TO_APP);

        prompt.start();

        //- prompt user for app constants
        prompt.get(schema.createApp(appName), (err, result) => {
            //- copy project folder
            copydir(proj_src, proj_dest, (state, filepath, filename) => {
                return (filename !== '.gitkeep');
            }, function(err) {
                if(err) {
                    logger.error('Unable to generate the project folder.');
                    console.log(err);
                } else {
                    console.log();
                    logger.info('➜', 'Generated project.');

                    //- copy app folder
                    copydir(app_src, app_dest, (err) => {
                        if(err) {
                            logger.error('Unable to generate the app folder.');
                            console.log(err);
                        } else {
                            logger.info('➜', `Generated '${result.appName}' app.`);

                            //- replace app constants
                            const app_const_path = path.join(app_dest, 'config', 'app.constants.js');

                            fs.readFile(app_const_path, 'utf8', (err, contents) => {
                                if(err) {
                                    logger.error("Unable to read 'app.constants.js'.");
                                    console.log(err);
                                } else {
                                    let updatedContents = '';
                                    updatedContents = contents.replace(/<[app\-name]*>/g, result.appName);
                                    updatedContents = updatedContents.replace(/<[api\-address]*>/g, result.apiAddress);
                                    updatedContents = updatedContents.replace(/<[jwt\-key]*>/g, result.jwtKey);
                                    updatedContents = updatedContents.replace(/<[csrf\-key]*>/g, result.csrfKey);
                                    updatedContents = updatedContents.replace(/<[socket\-address]*>/g, result.socketAddress);

                                    fs.writeFile(app_const_path, updatedContents, 'utf8', (err) => {
                                        if(err) {
                                            logger.error("Unable to write to 'app.constants.js'.");
                                            console.log(err);
                                        } else {
                                            logger.success('✔ App successfully initialized.');
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });
    },

    component(name) {
        prompt.start();

        //- prompt user for component constants
        prompt.get(schema.createComponent(name), (err, result) => {
            const component_name = {
                uppercase:  util.uppercase(result.name),
                lowercase:  util.lowercase(result.name),
                capitalize: util.capitalize(result.name),
                underscore: util.underscore(result.name),
            }

            console.log('name:', component_name);
        });
    },

    directive(name) {
        prompt.start();

        //- prompt user for directive constants
        prompt.get(schema.createDirective(name), (err, result) => {
            const directive_name = {
                uppercase:  util.uppercase(result.name),
                lowercase:  util.lowercase(result.name),
                capitalize: util.capitalize(result.name),
            }

            console.log('name:', directive_name);
        });
    },

    filter(name) {
        prompt.start();

        //- prompt user for filter constants
        prompt.get(schema.createFilter(name), (err, result) => {
            const filter_name = {
                uppercase: util.uppercase(result.name),
                lowercase: util.lowercase(result.name),
                camelcase: util.camelCase(result.name),
            }

            console.log('name:', filter_name);
        });
    },

    interceptor(name) {
        prompt.start();

        //- prompt user for interceptor constants
        prompt.get(schema.createInterceptor(name), (err, result) => {
            const interceptor_name = {
                uppercase: util.uppercase(result.name),
                lowercase: util.lowercase(result.name),
                camelcase: util.camelCase(result.name),
            }

            console.log('name:', interceptor_name);
        });
    },

    route(state) {
        prompt.start();

        //- prompt user for route constants
        prompt.get(schema.createRoute(state), (err, result) => {
            const state_name = {
                uppercase:     util.uppercase(result.state),
                lowercase:     util.lowercase(result.state),
                lowercaseDash: util.transform(util.lowercase(result.state)),
                capitalize:    util.capitalize(result.state, { delimiter: '.' }),
                underscore:    util.underscore(result.state, { delimiter: '.' }),
            }

            console.log('name:', state_name);
        });
    },

    service(name) {
        prompt.start();

        //- prompt user for service constants
        prompt.get(schema.createService(name), (err, result) => {
            const service_name = {
                uppercase: util.uppercase(result.name),
                lowercase: util.lowercase(result.name),
                camelcase: util.camelcase(result.name),
            }

            console.log('name:', service_name);
        });
    }
}
