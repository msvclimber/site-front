import React from 'react';
// import PropTypes from 'prop-types';
import work from '../../assets/images/razrabotka.jpg';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';

import './styles.scss';

const DetailProduct = () => {
    return (<div>
        <AppHeader />
        <div className="favorites_title">Детализация продукта</div>
        <div className="work_img">
            <img src={work} />
        </div>
        <AppFooter isBottomAbsolute />
    </div>)
}

export default DetailProduct;
