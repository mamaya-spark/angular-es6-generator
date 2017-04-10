const path           = require('path');
const Q              = require('q');
const jsonfile       = require('jsonfile');
const logger         = require('../logger');
const PATH_TO_CONFIG = path.join(__dirname, '..', 'config.json');

module.exports = {
    setDir(PATH_TO_DIR) {
        let q = Q.defer();

        jsonfile.readFile(PATH_TO_CONFIG, function(err, config) {
            if(err) {
                q.reject(new Error(err));
            } else {
                config.PATH_TO_PROJECT   = PATH_TO_DIR;
                config.PATH_TO_TEMPLATES = path.join(__dirname, '..', 'templates');

                logger.info('Set project directory to:', config.PATH_TO_PROJECT + '\n');

                jsonfile.writeFile(PATH_TO_CONFIG, config, { spaces: 4 }, function(err) {
                    if(err) {
                        q.reject(new Error(err));
                    } else {
                        q.resolve();
                    }
                });
            }
        });

        return q.promise;
    },

    view() {
        jsonfile.readFile(PATH_TO_CONFIG, function(err, config) {
            if(!err) {
                const projPath = config.PATH_TO_PROJECT ? config.PATH_TO_PROJECT : "[ Not Set ]"
                logger.info('Project directory:', projPath);
                console.log();
            }
        });
    },

    verify() {
        let q = Q.defer();

        jsonfile.readFile(PATH_TO_CONFIG, function(err, config) {
            if(err) {
                q.reject(new Error(err));
            } else {
                if(config.PATH_TO_PROJECT) {
                    q.resolve(true);
                } else {
                    q.resolve(false);
                }
            }
        });

        return q.promise;
    }
}
