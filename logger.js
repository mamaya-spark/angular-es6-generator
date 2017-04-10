const colors = require('colors');

module.exports = {
    info(prompt, message) {
        let prompt_cyan = prompt.cyan;

        console.log(prompt_cyan, message);
    },

    success(message) {
        let message_green = message.green;

        console.log(message_green);
    },

    error(message) {
        let message_magenta = message.magenta;

        console.log(message_magenta);
    }
}
