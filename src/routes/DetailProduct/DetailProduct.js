import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import ProductItem from '../../modules/ProductItem';

import './styles.scss';

const DetailProduct = ({ products, isProductsLoading }) => {
    const { productId } = useParams();
    const product = useMemo(() => products.find(p => p.id === +productId), [products]);
    console.log('product', products, productId, product);

    if (isProductsLoading) {
        return <div className="work_img">
            <CircularProgress />
        </div>
    }

    return (<div>
        <AppHeader />
        <ProductItem product={product} />
        <AppFooter isBottomAbsolute />
    </div>)
}

DetailProduct.propTypes = {
    products: PropTypes.instanceOf(Array).isRequired,
    isProductsLoading: PropTypes.bool.isRequired,
};

export default DetailProduct;
