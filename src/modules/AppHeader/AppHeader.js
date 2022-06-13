import React, { useLayoutEffect } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SearchIcon from '../../assets/icons/search.svg';
import UserIcon from '../../assets/icons/user.svg';
import LogoIcon from '../../assets/icons/logo.svg';

import './styles.scss';

const AppHeader = ({ fetchProducts, products }) => {
    useLayoutEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        }
    }, []);

    return (<div className="appheader_root">
        <Link to='/'><LogoIcon /></Link>
        <div className="appheader_buttons">
            <Link to='/list'>Каталог</Link>
            <Link to='/messages'>Сообщения</Link>
            <Link to='/favorites'>Любимые товары</Link>
            <Link to='/myshop'><SearchIcon width={28} height={28} /></Link>
            <Link to='/user'><UserIcon width={28} height={28} /></Link>
        </div>
        <div className='appheader_hr' />
    </div>)
}

export default AppHeader;
