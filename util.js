module.exports = {
    uppercase(str, opts) {
        return str.toUpperCase();
    },

    lowercase(str, opts) {
        return str.toLowerCase();
    },

    capitalize(str, opts) {
        const options   = opts || { };
        const delimiter = options.delimiter || '-';
        const regex     = new RegExp(`\\${delimiter}\\w`, 'g');

        return (delimiter + str.toLowerCase()).replace(regex, match => match[1].toUpperCase() );
    },

    underscore(str, opts) {
        const options   = opts || { };
        const delimiter = options.delimiter || '-';
        const regex     = new RegExp(`\\${delimiter}`, 'g');

        return (str.toLowerCase()).replace(regex, match => '_' );
    },

    camelCase(str, opts) {
        const options   = opts || { };
        const delimiter = options.delimiter || '-';
        const regex     = new RegExp(`\\${delimiter}\\w`, 'g');

        return (str.toLowerCase()).replace(regex, match => match[1].toUpperCase() );
    },

    transform(str, opts) {
        const options    = opts || { };
        const fromSymbol = options.fromSymbol || '.';
        const toSymbol   = options.toSymbol   || '-';
        const regex      = new RegExp(`\\${fromSymbol}`, 'g');

        return str.replace(regex, toSymbol);
    }
}
