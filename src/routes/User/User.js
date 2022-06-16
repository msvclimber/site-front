import React from 'react';
// import PropTypes from 'prop-types';
import work from '../../assets/images/razrabotka.jpg';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import UserEdit from '../../modules/UserEdit';

import './styles.scss';

const User = () => {
    return (<div>
        <AppHeader />
        <div className="user_title">Настройки пользователя</div>
        <UserEdit />
        <AppFooter isBottomAbsolute />
    </div>)
}

export default User;
