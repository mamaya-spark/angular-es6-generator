const fs             = require('fs');
const path           = require('path');
const Q              = require('q');
const prompt         = require('prompt');
const copydir        = require('copy-dir');
const schema         = require('../schema');
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

    component() {
        console.log('generate a new component');
    },

    directive() {
        console.log('generate a new directive');
    },

    filter() {
        console.log('generate a new filter');
    },

    interceptor() {
        console.log('generate a new interceptor');
    },

    route() {
        console.log('generate a new route');
    },

    service() {
        console.log('generate a new service');
    }
}
