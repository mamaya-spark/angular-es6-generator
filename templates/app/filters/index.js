//* ************************************************************************ *//
//* FILTERS MODULE                                                           *//
//* A child module that registers all the filters on the app.                *//
//* ************************************************************************ *//

let FiltersModule = angular.module(
    'app.filters', [ ]
);

//* Import filters
import searchFilter from './search.filter';
import sortFilter from './sort.filter';

//* Register filters
FiltersModule
    .filter('searchFilter', searchFilter)
    .filter('sortFilter', sortFilter);

export default FiltersModule;
