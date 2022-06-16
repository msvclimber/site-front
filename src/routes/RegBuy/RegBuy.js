import React from 'react';
// import PropTypes from 'prop-types';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import RegBuyModule from '../../modules/RegBuy';

const RegBuy = () => {
    return (<div>
        <AppHeader />
        <RegBuyModule />
        <AppFooter isBottomAbsolute />
    </div>)
}

export default RegBuy;
