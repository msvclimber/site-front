import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddProductIcon from '../../assets/icons/addProduct.svg';
import Product from '../Product';

import './styles.scss';

const ProductList = ({ title, products, margin, isEdit }) => {
    return (
        <div className="product_list_root" style={{ margin }}>
            <div className="product_list_header">
                <div className='product_list_title'>{title}</div>
                {isEdit ? <Link to={'/product/add'} style={{ textDecoration: 'none' }}><div className="product_list_add"><AddProductIcon /> Добавить новый товар</div></Link>
                    : <Link to='/list' className='product_list_viewall'>Смотреть полностью</Link>}
            </div>
            <div className="product_list_products">
                {products.map(product => (<Product key={product.id} product={product} width="22%" isEdit={isEdit} />))}
            </div>
        </div>
    )
}

ProductList.propTypes = {
    title: PropTypes.string.isRequired,
    products: PropTypes.instanceOf(Array).isRequired,
    margin: PropTypes.string.isRequired,
    isEdit: PropTypes.bool,
}

ProductList.defaultProps = {
    isEdit: false,
}


export default ProductList;
