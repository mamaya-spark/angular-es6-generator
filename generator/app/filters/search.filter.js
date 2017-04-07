//* ************* *//
//* SEARCH FILTER *//
//* ************* *//

function searchFilter(lodash) {
    'ngInject';

    return (data, query) => {
        let filtered = data;

        if(query) {
            //- do filter logic here
        }

        return filtered;
    }
}

export default searchFilter;
