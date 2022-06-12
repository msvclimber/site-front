import React from 'react';
// import PropTypes from 'prop-types';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';

const ProductList = () => {
    return (<div>
        <AppHeader />
        Продукты
        <AppFooter isBottomAbsolute />
    </div>)
}

export default ProductList;
