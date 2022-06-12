import React from 'react';
// import PropTypes from 'prop-types';
import work from '../../assets/images/razrabotka.jpg';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';

import './styles.scss';

const User = () => {
    return (<div>
        <AppHeader />
        <div className="favorites_title">Настройки пользователя</div>
        <div className="work_img">
            <img src={work} />
        </div>
        <AppFooter isBottomAbsolute />
    </div>)
}

export default User;
