//* ************************************************************************ *//
//* ROUTES MODULE                                                            *//
//* A child module that registers all the routes on the app.                 *//
//* ************************************************************************ *//

//* Import routes
import './home';

//* Register routes
let RoutesModule = anglar.module(
    'app.routes', [
        'route.home',
    ]
);

export default RoutesModule;
