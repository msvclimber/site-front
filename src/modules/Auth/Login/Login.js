import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {
    useNavigate,
} from "react-router-dom";

import '../styles.scss';

const stages = {
    login: 'login',
    signup: 'signup',
    regBuy: 'regBuy',
    regSell: 'regSell',
}

const Login = ({ changeStage, fetchLogin, isLoginError, clearLoginError, isLoging, redirectPage, user }) => {
    const navigate = useNavigate();
    const [action, setAction] = useState(stages.login);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const selectLogin = cn({
        auth_login_buttons_selected: Boolean(action === stages.login)
    });
    const selectSignup = cn({
        auth_login_buttons_selected: Boolean(action !== stages.login)
    });

    const isLoginButtonDisabled = login.length < 3 || password.length < 6 || isLoginError;

    if (user) {
        if (redirectPage === 'user') {
            navigate(`/${redirectPage}/${user.id}`);
            return;
        }

        navigate(`/${redirectPage}`);
        return;
    }

    return (
        <div className="auth_login_root">
            <h1>Мой аккаунт</h1>
            <div className="auth_login_buttons">
                <div className={selectLogin} onClick={() => setAction(stages.login)}>Войти</div>
                <div className={selectSignup} onClick={() => setAction(stages.signup)}>Зарегистрироваться</div>
            </div>
            {
                action === stages.login ? (<div>
                    <TextField
                        error={isLoginError}
                        label="Email"
                        variant="standard"
                        className='auth_login_buttons_textfield'
                        value={login}
                        onChange={({ target: { value } }) => {
                            setLogin(value);
                            if (isLoginError) {
                                clearLoginError()
                            }
                        }}
                    />
                    <TextField
                        error={isLoginError}
                        label="Пароль"
                        variant="standard"
                        className='auth_login_buttons_textfield'
                        value={password}
                        onChange={({ target: { value } }) => {
                            setPassword(value);
                            if (isLoginError) {
                                clearLoginError()
                            }
                        }} />
                    <FormControlLabel
                        control={
                            <Checkbox name="gilad" disableFocusRipple disableRipple />
                        }
                        label="Запомнить меня"
                        classes={{ root: 'auth_login_buttons_memme' }}
                    />
                    <Button
                        classes={{ root: isLoginButtonDisabled ? 'auth_login_buttons_button_login_disabled' : 'auth_login_buttons_button_login_enabled' }}
                        onClick={() => {
                            fetchLogin(login, password)
                        }}
                        disabled={isLoginButtonDisabled}
                    >
                        {isLoging ? <CircularProgress /> : 'Войти'}
                    </Button>
                    <Link to='/lostpass' className='auth_login_buttons_button_lost'>Забыли пароль?</Link>
                </div>
                ) : (<div>
                    <div onClick={() => setAction(stages.regBuy)}>Купить</div>
                    <div onClick={() => setAction(stages.regSell)}>Продать</div>
                </div>)
            }
        </div>
    )
}

Login.propTypes = {
    changeStage: PropTypes.func.isRequired,
    fetchLogin: PropTypes.func.isRequired,
    isLoginError: PropTypes.bool.isRequired,
    clearLoginError: PropTypes.func.isRequired,
    isLoging: PropTypes.bool.isRequired,
    redirectPage: PropTypes.string.isRequired,
}

export default Login;
