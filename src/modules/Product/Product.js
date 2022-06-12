import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const Product = ({ product }) => {

    return (
        <div className='product_item_root'>
            <img src={require(`../../assets/images/products/${product.imgName}_min.jpg`).default} />
            <div className="product_item_title">{product.title}</div>
            <div className="product_item_price">{`₽ ${product.price}`}</div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
}

export default Product;
