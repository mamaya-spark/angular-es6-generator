//* **************** *//
//* UPLOAD DIRECTIVE *//
//* **************** *//

import './upload.scss';

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
