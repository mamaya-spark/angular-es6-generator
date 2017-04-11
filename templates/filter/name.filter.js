//* ************************************************************************ *//
//* <name-uppercase> FILTER                                                  *//
//* A filter for <usage>.                                                    *//
//* ************************************************************************ *//

function <name-camelcase>Filter(lodash) {
    'ngInject';

    return (data, query) => {
        let filtered = data;

        if(query) {
            //- do filter logic here
        }

        return filtered;
    }
}

export default <name-camelcase>Filter;
