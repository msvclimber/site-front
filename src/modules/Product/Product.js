import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import HeartIcon from '../../assets/icons/heart.svg';
import SelectedHeartIcon from '../../assets/icons/selectedHeart.svg';
import BasketIcon from '../../assets/icons/basket.svg';
import EyeIcon from '../../assets/icons/eye.svg';
import EditIcon from '../../assets/icons/edit.svg';
import DeleteIcon from '../../assets/icons/delete.svg';

import './styles.scss';

const Product = ({ product, width, marginBottom, user, setFavorites, isEdit, deleteProduct }) => {

    return (
        <div className='product_root' style={{ width, marginBottom }}>
            <img src={require(`../../assets/images/products/${product.imgName}_min.jpg`).default} />
            <div className="product_title">{product.title}</div>
            <div className="product_price">{`₽ ${product.price}`}</div>
            {!isEdit ? <div className="product_hover">
                <div className={user ? "product_hover_buttons_auth" : "product_hover_buttons"}>
                    <Link to={`/messages`}><BasketIcon /></Link>
                    <Link to={`/detail/${product.id}`}><EyeIcon /></Link>
                    {user ? user.favorites?.includes(product.id) ? <SelectedHeartIcon style={{ cursor: 'pointer' }} onClick={() => { setFavorites(product.id, false) }} /> : <HeartIcon style={{ cursor: 'pointer' }} onClick={() => { setFavorites(product.id, true) }} /> : null}
                </div>
            </div> : null}
            {product.sales ? <div className='product_sales'>{`-${product.sales}`}</div> : null}
            {isEdit ? <div className='product_edit'>
                <div onClick={() => { deleteProduct(product.id) }}><DeleteIcon /></div>
                <Link style={{ textDecoration: 'none', marginTop: '3px' }} to={`/product/edit/${product.id}`}><div><EditIcon /></div></Link>
            </div> : null
            }
        </div >
    )
}

Product.propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
    width: PropTypes.string.isRequired,
    marginBottom: PropTypes.string,
    user: PropTypes.instanceOf(Object),
    setFavorites: PropTypes.func.isRequired,
    isEdit: PropTypes.bool,
    deleteProduct: PropTypes.func.isRequired,
}

Product.defaultProps = {
    marginBottom: '0px',
    user: null,
    isEdit: false,
}

export default Product;
