const colors = require('colors');

module.exports = {
    info(prompt, message) {
        let prompt_cyan = prompt.cyan;

        console.log(prompt_cyan, message);
    },

    error(message) {
        let message_magenta = message.magenta;

        console.log(message_magenta);
    }
}
