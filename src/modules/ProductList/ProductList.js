import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const ProductList = ({ title }) => {
    return (
        <div className="product_list_root">
            <div className='product_list_title'>{title}</div>
            <Link to='/list'>Смотреть полностью</Link>
        </div>
    )
}

ProductList.propTypes = {
    title: PropTypes.string.isRequired,
}

export default ProductList;
