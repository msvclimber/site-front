import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import HeartIcon from '../../assets/icons/heart.svg';
import SelectedHeartIcon from '../../assets/icons/selectedHeart.svg';
import BasketIcon from '../../assets/icons/basket.svg';
import EyeIcon from '../../assets/icons/eye.svg';

import './styles.scss';

const Product = ({ product, width, marginBottom }) => {

    return (
        <div className='product_root' style={{ width, marginBottom }}>
            <img src={require(`../../assets/images/products/${product.imgName}_min.jpg`).default} />
            <div className="product_title">{product.title}</div>
            <div className="product_price">{`₽ ${product.price}`}</div>
            <div className="product_hover">
                <div className="product_hover_buttons">
                    <Link to='/messages'><BasketIcon /></Link>
                    <Link to={`/detail/${product.id}`}><EyeIcon /></Link>
                    <Link to='/favorites'><SelectedHeartIcon /></Link>
                </div>
            </div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
    width: PropTypes.string.isRequired,
    marginBottom: PropTypes.string,
}

Product.defaultProps = {
    marginBottom: '0px',
}

export default Product;
