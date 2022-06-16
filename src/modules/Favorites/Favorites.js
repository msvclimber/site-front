import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import Product from '../Product';

import page404 from '../../assets/images/404.jpg';

import './styles.scss';

const Favorites = ({ user, products, isProductsLoading }) => {
    console.log(products);
    const productsObject = useMemo(() => products ? Object.fromEntries(products.map(product => ([product.id, product]))) : {}, [products]);

    if(user === null) {
        return null;
    }

    if (isProductsLoading) {
        return <div className="g_center_content">
            <CircularProgress />
        </div>
    }

    if (products === null) {
        return <div className="g_center_content">
            <img src={page404} />
        </div>
    }

    return (
        <div className='favorites_root'>
            {user.favorites.map(productId => (<Product key={productId} product={productsObject[productId]} width="22%" marginBottom="40px" />))}
        </div>
    )
}

Favorites.propTypes = {
    user: PropTypes.instanceOf(Object),
    isProductsLoading: PropTypes.bool.isRequired,
    products: PropTypes.instanceOf(Object),
}

Favorites.defaultProps = {
    user: null,
    products: null,
}

export default Favorites;
