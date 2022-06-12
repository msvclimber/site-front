import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

import './styles.scss';

const stages = {
    login: 'login',
    signup: 'signup',
    regBuy: 'regBuy',
    regSell: 'regSell',
}

const Login = ({ changeStage }) => {
    const [action, setAction] = useState(stages.login);
    const selectLogin = cn({
        auth_login_buttons_selected: Boolean(action === stages.login)
    });
    const selectSignup = cn({
        auth_login_buttons_selected: Boolean(action !== stages.login)
    });

    return (
        <div className="auth_login_root">
            <h1>Мой аккаунт</h1>
            <div className="auth_login_buttons">
                <div className={selectLogin} onClick={() => setAction(stages.login)}>Войти</div>
                <div className={selectSignup} onClick={() => setAction(stages.signup)}>Зарегистрироваться</div>
            </div>
            {
                action === stages.login ? (<div>
                    <TextField label="Email" variant="standard" className='auth_login_buttons_textfield' />
                    <TextField label="Пароль" variant="standard" className='auth_login_buttons_textfield' />
                    <FormControlLabel
                        control={
                            <Checkbox name="gilad" disableFocusRipple disableRipple />
                        }
                        label="Запомнить меня"
                        classes={{ root: 'auth_login_buttons_memme' }}
                    />
                    <Button classes={{ root: 'auth_login_buttons_button_login' }}>Войти</Button>
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
}

export default Login;
