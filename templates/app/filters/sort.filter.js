//* ************************************************************************ *//
//* SORT FILTER                                                              *//
//* A filter for sorting arrays of objects based on a query.                 *//
//* ************************************************************************ *//

function sortFilter(lodash) {
    'ngInject';

    return (data, query) => {
        let filtered = data;

        if(query) {
            //- do filter logic here
        }

        return filtered;
    }
}

export default sortFilter;
