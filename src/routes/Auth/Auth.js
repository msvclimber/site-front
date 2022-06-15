import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import AppHeader from '../../modules/AppHeader';
import AuthModule from '../../modules/Auth';

const Auth = () => {
    const { redirectPage } = useParams();

    return (<div>
        <AppHeader />
        <AuthModule redirectPage={redirectPage} />
    </div>)
}

export default Auth;
