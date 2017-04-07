//* ************************************************************************ *//
//* UPLOAD DIRECTIVE                                                         *//
//* Definition for the <upload> directive.                                   *//
//* - To be used when a user needs to upload a file.                         *//
//* ************************************************************************ *//

//* Import <upload> styles
import './upload.scss';

//* Define <upload> tag
function UploadDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        template: require('./upload.html'),
        link: function(scope, el, attrs) {

        }
    }
}

export default UploadDirective;
