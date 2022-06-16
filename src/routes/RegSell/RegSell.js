import React from 'react';
// import PropTypes from 'prop-types';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import RegSellModule from '../../modules/RegSell';

import './styles.scss';

const RegSell = () => {
    return (<div>
        <AppHeader />
        <div className="reg_sell_title">Мой магазин</div>
        <RegSellModule />
        <AppFooter isBottomAbsolute />
    </div>)
}

export default RegSell;
