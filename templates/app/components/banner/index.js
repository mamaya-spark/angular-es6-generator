//* ************************************************************************ *//
//* BANNER COMPONENT                                                         *//
//* Definition for the <banner> component.                                   *//
//* - To be used as the app's main banner.                                   *//
//* ************************************************************************ *//

//* Import <banner> styles
import './banner.scss';

//* Import <banner> controller
import BannerController from './banner.controller';

//* Define <banner> tag
let BannerComponent = {
    bindings: {

    },
    controller: BannerController,
    controllerAs: 'ctrl_banner',
    template: require('./banner.html')
};

export default BannerComponent;
