import React from 'react';
// import PropTypes from 'prop-types';
import work from '../../assets/images/razrabotka.jpg';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import Favorites from '../../modules/Favorites';

import './styles.scss';

const FavoriteList = () => {
    return (<div>
        <AppHeader />
        <div className="favorites_title">Любимые товары</div>
        <Favorites />
        <AppFooter isBottomAbsolute />
    </div>)
}

export default FavoriteList;
