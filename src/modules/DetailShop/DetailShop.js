import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import Product from '../Product';

import page404 from '../../assets/images/404.jpg';

import './styles.scss';

const DetailShop = ({ user, products, isProductsLoading, shopId, isOwner }) => {
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

    // const productsObject = useMemo(() => {
    //     const shopProduct = 
    //  } : {}, [products]);

    return (
        <div className='favorites_root'>
            {products.map(product => (<Product key={product.id} product={product} width="22%" marginBottom="40px" />))}
        </div>
    )
}

DetailShop.propTypes = {
    user: PropTypes.instanceOf(Object),
    isProductsLoading: PropTypes.bool.isRequired,
    products: PropTypes.instanceOf(Object),
    shopId: PropTypes.string.isRequired,
    isOwner: PropTypes.bool,
}

DetailShop.defaultProps = {
    user: null,
    products: null,
    isOwner: false,
}

export default DetailShop;
