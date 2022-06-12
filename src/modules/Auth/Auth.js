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

const getAuthStageComponent = (stage, setStage) => {
    // console.log(stage)
    // if (stage === stages.signup) {
    //     return <LostPassStage />
    // }
    return <LoginStage changeStage={setStage} />
}

const Auth = ({ title }) => {
    const [stage, setStage] = useState(stages.login);

    return (
        <div className="auth_root">
            {getAuthStageComponent(stage, setStage)}
        </div>
    )
}

Auth.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Auth;
