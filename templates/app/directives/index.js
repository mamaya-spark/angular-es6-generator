//* ************************************************************************ *//
//* DIRECTIVES MODULE                                                        *//
//* A child module that registers all the directives on the app.             *//
//* ************************************************************************ *//

let DirectivesModule = angular.module(
    'app.directives', [ ]
);

//* Import directives
import ModalDirective from './modal';
import UploadDirective from './upload';

//* Register directives
DirectivesModule
    .directive('modal', ModalDirective)
    .directive('upload', UploadDirective);

export default DirectivesModule;
