import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import page404 from '../../assets/images/404.jpg';
import Twitter from '../../assets/icons/twitter.svg';
import Fb from '../../assets/icons/fb.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Mail from '../../assets/icons/mail.svg';
import Heart from '../../assets/icons/heart.svg';

import { categoryNames, subCategoryNames } from '../../data/categories';

import './styles.scss';

const ProductItem = ({ product, isProductsLoading }) => {
    if (isProductsLoading) {
        return <div className="g_center_content">
            <CircularProgress />
        </div>
    }

    if (product === null) {
        return <div className="g_center_content">
            <img src={page404} />
        </div>
    }

    return (
        <div className='product_item_root'>
            <img src={require(`../../assets/images/products/${product.imgName}.jpg`).default} />
            <div>
                <div className="product_item_title">{product.title}</div>
                <div className="product_item_price">{`${product.price} ₽`}</div>
                <div className="product_item_description">{product.description}</div>
                <div className="product_item_material">Материал: <span>{product.material}</span></div>
                <div className="product_item_material">Состав: <span>{product.structure}</span></div>
                <div className="product_item_material">Размер: <span>{product.size}</span></div>
                {product.colors.length > 0 ? <div className="product_item_colors">Цвет: {product.colors.map(color => (<div className='product_item_color' style={{ backgroundColor: color }}></div>))}</div> : null}
                <div className="product_item_links">
                    <Link to='/messages'><div className="product_item_write">Написать продавцу</div></Link>
                    <Link to='/shop'><div className="product_item_inshop">Перейти в магазин</div></Link>
                </div>
                <div className="product_item_socials">
                    <Link to='/messages'><Heart /></Link>
                    <div><Mail /><Fb /><Instagram /><Twitter /></div>
                </div>
                <div className="product_item_material">Категории:  <span>{`${categoryNames[product.category]} / ${subCategoryNames[product.category][product.subCategory]}`}</span></div>
            </div>
        </div>
    )
}

ProductItem.propTypes = {
    isProductsLoading: PropTypes.bool.isRequired,
    product: PropTypes.instanceOf(Object),
}

ProductItem.defaultProps = {
    product: null,
}

export default ProductItem;
