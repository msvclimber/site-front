import React from 'react';
// import PropTypes from 'prop-types';
import work from '../../assets/images/razrabotka.jpg';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import MessageList from '../../modules/MessageList';

import './styles.scss';

const Messages = () => {
    return (<div>
        <AppHeader />
        <MessageList />
        <AppFooter isBottomAbsolute />
    </div>)
}

export default Messages;
