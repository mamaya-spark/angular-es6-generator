//* ************************************************************************ *//
//* <name-uppercase> STATE ROUTE                                             *//
//* Definition for the '<name-lowercase>' state.                             *//
//* - A route for <usage>.                                                   *//
//* ************************************************************************ *//

//* Import '<name-lowercase>' config
import <name-capitalize>Config from './<name-lowercase>.config';

//* Define '<name-lowercase>' module
let <name-capitalize>Module = angular.module(
    'route.<name-lowercase>', [ ]
)

//* Register '<route>' route
<name-capitalize>Module
    .config(<name-capitalize>Config);

export default <name-capitalize>Module;
