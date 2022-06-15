import React from 'react';
// import PropTypes from 'prop-types';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import Catalog from '../../modules/Catalog';

const ProductList = () => {
    return (<div>
        <AppHeader />
        <Catalog />
        <AppFooter isBottomAbsolute />
    </div>)
}

export default ProductList;
