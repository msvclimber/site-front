import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchIcon from '../../assets/icons/search.svg';
import UserIcon from '../../assets/icons/user.svg';
import LogoIcon from '../../assets/icons/logo.svg';

import './styles.scss';

const AppHeader = ({ fetchProducts, products, user }) => {
    useLayoutEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        }
    }, []);

    return (<div className="appheader_root">
        <Link to='/'><LogoIcon /></Link>
        <div className="appheader_buttons">
            <Link to='/list'>Каталог</Link>
            <Link to={user ? '/messages' : '/auth/messages'}>Сообщения</Link>
            <Link to={user ? '/favorites' : '/auth/favorites'}>Любимые товары</Link>
            {/* <Link to='/myshop'><SearchIcon width={28} height={28} /></Link> */}
            {user && user.shopId ? <Link to='/myshop'>Мой магазин</Link> : null}
            <Link to={user ? `/user/${user.id}` : '/auth/user'}><UserIcon width={28} height={28} /></Link>
        </div>
        <div className='appheader_hr' />
    </div>)
}

AppHeader.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.instanceOf(Array).isRequired,
    user: PropTypes.instanceOf(Object),
}

AppHeader.defaultProps = {
    user: null,
}

export default AppHeader;
