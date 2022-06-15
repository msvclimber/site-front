import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LoginStage from './Login';
// import LostPassStage from './LostPass';

import './styles.scss';

const stages = {
    login: 'login',
    signup: 'signup',
}

const getAuthStageComponent = (stage, setStage, redirectPage) => {
    // console.log(stage)
    // if (stage === stages.signup) {
    //     return <LostPassStage />
    // }
    return <LoginStage changeStage={setStage} redirectPage={redirectPage} />
}

const Auth = ({ redirectPage }) => {
    const [stage, setStage] = useState(stages.login);

    return (
        <div className="auth_root">
            {getAuthStageComponent(stage, setStage, redirectPage)}
        </div>
    )
}

Auth.propTypes = {
    redirectPage: PropTypes.string.isRequired,
}

export default Auth;
