//* ************************************************************************ *//
//* SERVICES MODULE                                                          *//
//* A child module that registers all the services on the app.               *//
//* ************************************************************************ *//

let ServicesModule = angular.module(
    'app.services', [ ]
);

//* Import services
import jwtService from './jwt.service';
import csrfService from './csrf.service';
import apiService from './api.service';
import socketService from './socket.service';

//* Register services
ServicesModule
    .service('jwtService', jwtService)
    .service('csrfService', csrfService)
    .service('apiService', apiService)
    .service('socketService', socketService);

export default ServicesModule;
