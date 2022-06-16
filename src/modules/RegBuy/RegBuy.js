import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {
    useNavigate,
} from "react-router-dom";

import './styles.scss';

const RegBuy = ({ changeStage, isLoging, redirectPage, user }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (user) {
        if (redirectPage === 'user') {
            navigate(`/${redirectPage}/${user.id}`);
            return;
        }

        navigate(`/${redirectPage}`);
        return;
    }

    return (
        <div className="reg_buy_root">
            <h1>Регистрация</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField
                    label="Имя"
                    variant="standard"
                    className='reg_buy_buttons_textfield'
                    value={name}
                    onChange={({ target: { value } }) => {
                        setName(value);
                    }}
                />
                <TextField
                    label="Фамилие"
                    variant="standard"
                    className='reg_buy_buttons_textfield'
                    value={surname}
                    onChange={({ target: { value } }) => {
                        setSurname(value);
                    }} />
                <TextField
                    label="Email"
                    variant="standard"
                    className='reg_buy_buttons_textfield'
                    value={email}
                    onChange={({ target: { value } }) => {
                        setEmail(value);
                    }}
                />
                <TextField
                    label="Пароль"
                    variant="standard"
                    className='reg_buy_buttons_textfield'
                    value={password}
                    onChange={({ target: { value } }) => {
                        setPassword(value);
                    }} />
                <Button
                    classes={{ root: 'auth_login_buttons_button_login_disabled' }}
                    onClick={() => {
                        // fetchLogin(login, password)
                    }}
                    disabled
                >
                    {isLoging ? <CircularProgress /> : 'Далее'}
                </Button>
                <div className='reg_buy_have_accaunt'>Есть аккаунт? <Link to="/auth/user" style={{ color: '#A16A68', marginLeft: 6, textDecoration: 'none' }}>Войти</Link></div>
            </div>
        </div >
    )
}

RegBuy.propTypes = {
    changeStage: PropTypes.func.isRequired,
    isLoging: PropTypes.bool.isRequired,
    redirectPage: PropTypes.string.isRequired,
}

export default RegBuy;
