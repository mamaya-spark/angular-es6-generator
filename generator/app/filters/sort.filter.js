//* *********** *//
//* SORT FILTER *//
//* *********** *//

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
