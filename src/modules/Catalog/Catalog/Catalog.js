import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import Product from '../../Product';

import page404 from '../../../assets/images/404.jpg';
import ArrowDownIcon from '../../../assets/icons/ArrowDown.svg';

import { categoryNames, subCategoryNames } from '../../../data/categories';

import './styles.scss';

const ProductItem = ({ products, isProductsLoading }) => {
    const [filter, setFilter] = useState({ category: 'clothingShoes' });

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
        <div className='catalog_root'>
            <div className='first'><h1>Каталог</h1>
                {Object.entries(categoryNames).map(([code, name]) => (
                    <div
                        className={code === filter.category && !subCategoryNames[code] ? 'catalog_filter_category catalog_filter_selected' : 'catalog_filter_category'}
                        style={{ height: subCategoryNames[code] && code === filter.category ? Object.entries(subCategoryNames[code]).length * 50 + 55 : 55 }}
                        onClick={() => { if (code === filter.category && subCategoryNames[code]) { return; } console.log(code); setFilter({ category: code }) }}
                    >
                        {subCategoryNames[code] ? <><div style={{ width: '100%', paddingLeft: 0 }} className={code === filter.category && !filter.subCategory ? 'catalog_filter_category catalog_filter_selected' : 'catalog_filter_category'} onClick={() => { setFilter({ category: code }) }} >{name} <ArrowDownIcon /></div>{code === filter.category ?
                            Object.entries(subCategoryNames[code]).map(([subCode, subName]) => (
                                <div
                                    className={subCode === filter.subCategory ? 'catalog_filter_subcategory catalog_filter_selected' : 'catalog_filter_subcategory'}
                                    onClick={() => { console.log(code, subCode); setFilter({ category: code, subCategory: subCode }) }}
                                >
                                    {subName}
                                </div>
                            )) : null}
                        </> : <span>{name}</span>}
                    </div>
                ))}
            </div>
            <div className='second'>
                {products.filter(product => (!filter.subCategory && product.category === filter.category) || product.subCategory === filter.subCategory).map(product => (<Product key={product.id} product={product} width="30%" marginBottom="40px" />))}
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
