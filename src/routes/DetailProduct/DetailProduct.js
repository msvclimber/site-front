import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import ProductItem from '../../modules/ProductItem';

import './styles.scss';

const DetailProduct = ({ products, isProductsLoading }) => {
    const { productId } = useParams();
    const product = useMemo(() => products.find(p => p.id === +productId), [products]);

    return (<div>
        <AppHeader />
        <ProductItem product={product} isProductsLoading={isProductsLoading} />
        <AppFooter isBottomAbsolute />
    </div>)
}

DetailProduct.propTypes = {
    products: PropTypes.instanceOf(Array).isRequired,
    isProductsLoading: PropTypes.bool.isRequired,
};

export default DetailProduct;
