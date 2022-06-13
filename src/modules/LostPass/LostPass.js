import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles.scss';


const Auth = ({ title }) => {
    return (
        <div className="lostpass_root">
            <div className="auth_login_root">
                <h1>Забыли пароль?</h1>
                <div className="auth_lostpass_text">
                    Если вы забыли пароль, введите почту, мы вышлем вам новый
                </div>
                <div>
                    <TextField label="Email" variant="standard" className='auth_lostpass_textfield' />
                    <Button classes={{ root: 'auth_login_buttons_button_getpass' }}>Получить пароль</Button>
                </div>
            </div>
        </div>
    )
}

Auth.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Auth;
