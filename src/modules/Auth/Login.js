import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const stages = {
    login: 'login',
    regBuy: 'regBuy',
    regSell: 'regSell',
}

const Auth = ({ title }) => {
    return (
        <div className="auth_login_root">
            <h1>Мой аккаунт 2</h1>
            <div className="auth_login_buttons">
                <div>Войти</div>
                <div>Зарегистрироваться</div>
            </div>
        </div>
    )
}

Auth.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Auth;
