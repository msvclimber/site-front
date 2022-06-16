import React, { useLayoutEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import ProductList from '../ProductList';
import { categoryNames } from '../../data/categories';

import page404 from '../../assets/images/404.jpg';

import './styles.scss';

const DetailShop = ({ user, products, isProductsLoading, shopId, isOwner, fetchShop, clearShop, shop, isShopLoading }) => {
    useLayoutEffect(() => {
        fetchShop(shopId);

        return clearShop;
    }, []);

    const productCatalog = useMemo(() => {
        const shopProduct = products.filter(pr => pr.shopId === shopId);
        if (shopProduct.length === 0) {
            return [];
        }

        const tmpObj = {};
        shopProduct.forEach(product => {
            if (tmpObj[product.category]) {
                tmpObj[product.category].push(product);
            } else {
                tmpObj[product.category] = [product]
            }
        });
        const categories = Object.keys(tmpObj);

        return categories.map(category => ({
            code: category,
            name: categoryNames[category],
            products: tmpObj[category],
        }));
    }, [products]);

    if (isProductsLoading || isShopLoading) {
        return <div className="g_center_content">
            <CircularProgress />
        </div>
    }

    if (products === null || shop === null) {
        return <div className="g_center_content">
            <img src={page404} />
        </div>
    }

    return (
        <div className='detail_shop_root'>
            <div className='detail_shop_info'>
                <img className='detail_shop_root_img' src={require(`../../assets/images/shops/${shop.imgName}.jpg`).default} />
                <div style={{ display: 'inline-block', width: '55%', margin: '0 30px' }}>
                    <span style={{ display: 'block', fontSize: '36px', fontWeight: '600', marginBottom: 30 }}>{shop.title}</span>
                    <span>{shop.description}</span>
                    <Link to={user ? '/messages' : '/auth/messages'} style={{ textDecoration: 'none' }}><div className="detail_shop_write">Написать продавцу</div></Link>
                </div>
                <div style={{ display: 'inline-block', width: '20%' }}>{shop.city}</div>
            </div>
            {productCatalog.map(pCatalog => (<ProductList isEdit={isOwner} margin="66px 0 0 0" key={pCatalog.code} title={pCatalog.name} products={pCatalog.products.slice(0, 4)} />))}
        </div>
    )
}

DetailShop.propTypes = {
    user: PropTypes.instanceOf(Object),
    isProductsLoading: PropTypes.bool.isRequired,
    products: PropTypes.instanceOf(Object),
    shopId: PropTypes.number.isRequired,
    isOwner: PropTypes.bool,
    fetchShop: PropTypes.func.isRequired,
    clearShop: PropTypes.func.isRequired,
    shop: PropTypes.instanceOf(Object),
    isShopLoading: PropTypes.bool.isRequired,
}

DetailShop.defaultProps = {
    user: null,
    products: null,
    isOwner: false,
    shop: null,
}

export default DetailShop;
