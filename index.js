#!/usr/bin/env node
const program   = require('commander');
const prompt    = require('prompt');
const schema    = require('./schema');
const logger    = require('./logger');
const Generator = require('./generator');

console.log();

program
    .version('0.0.1')
    .usage('A generator for creating Angular ES6 apps with ease.')
    .option('-c, --component <component-name>', 'generate a new app component')
    .option('-d, --directive <directive-name>', 'generate a new app directive')
    .option('-f, --filter <filter-name>', 'generate a new app filter')
    .option('-i, --interceptor <interceptor-name>', 'generate a new app interceptor')
    .option('-r, --route <state>', 'generate a new app route')
    .option('-s, --service <service-name>', 'generate a new app service');

program
    .command('init [app-name]')
    .description('Create a new Angular app.')
    .option('-D, --set-dir <dirname>', 'set project directory')
    .action(function(appName, options) {
        if(appName) {
            const dir = options.setDir || process.cwd();

            //- set project directory
            Generator.config.setDir(dir)
                .then(function() {
                    //- generate new app
                    Generator.ng.app(appName);
                });

        } else {
            program.outputHelp();
        }
    });

program
    .command('config')
    .description('Configure settings for your app.')
    .option('-L, --list', 'list current config settings')
    .option('-D, --set-dir <dirname>', 'set project directory')
    .action(function(options) {
        if(options.list) {
            Generator.config.view();
        }

        if(options.setDir) {
            //- verify that a project has been initialized
            Generator.config.verify()
                .then(function(isInit) {
                    //- case: the app has already been initialized
                    if(isInit) {
                        const dir = options.setDir;

                        //- set project directory
                        Generator.config.setDir(dir);
                    }
                });
        }
    });

program.parse(process.argv);

const commands = process.argv.slice(2);

//- output help if no arguments were entered
if(!commands.length) {
    program.outputHelp();
}

if(commands.length && commands[0] !== 'init') {
    //- verify that a project has been initialized
    Generator.config.verify()
        .then(function(isInit) {
            //- case: the app has already been initialized
            if(isInit) {
                if(program.component) {
                    Generator.ng.component(program.component);
                }

                if(program.directive) {
                    Generator.ng.directive(program.directive);
                }

                if(program.filter) {
                    Generator.ng.filter(program.filter);
                }

                if(program.interceptor) {
                    Generator.ng.interceptor(program.interceptor);
                }

                if(program.route) {
                    Generator.ng.route(program.route);
                }

                if(program.service) {
                    Generator.ng.service(program.service);
                }

            //- case: the app has yet to be initialized
            } else {
                logger.error('A project has not been initialized yet.');

                prompt.start();

                //- prompt if user would like to set the directory
                prompt.get(schema.shouldSetDir(), function(err, result) {
                    if(result.shouldSetDir) {
                        //- prompt user for the directory path
                        prompt.get(schema.pathToDir(), function(err, result) {
                            //- set project directory
                            Generator.config.setDir(result.pathToDir)
                                .then(function() {
                                    //- generate new app
                                    Generator.ng.app();
                                });
                        });
                    }
                });
            }
        });
}
