#!node
var program = require('commander');

program
    .version('0.0.1')
    .usage('A generator for creating Angular ES6 apps with ease.')
    .option('-c, --component <component-name>', 'generate a new app component')
    .option('-d, --directive <directive-name>', 'generate a new app directive')
    .option('-f, --filter <filter-name>', 'generate a new app filter')
    .option('-i, --interceptor <interceptor-name>', 'generate a new app interceptor')
    .option('-r, --route <route-name>', 'generate a new app route')
    .option('-s, --service <service-name>', 'generate a new app service');

program
    .command('init <app-name>')
    .description('Create a new Angular app.')
    .action(function(appName) {

    });

program
    .command('config')
    .description('Configure settings for your app.')
    .option('-d, --set-dir <dirname>', 'set project directory')
    .option('-n, --set-name <app-name>', 'rename application')
    .action(function() {

    });

program.parse(process.argv);
