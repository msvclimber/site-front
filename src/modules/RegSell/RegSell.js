import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';

import './styles.scss';

const RegSell = ({ user, logout }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className='user_edit_root'>
            <div>
                <div className='user_edit_photo'>
                    <div className='user_edit_photo_place'>
                        <div className='user_edit_photo_border'></div>
                    </div>
                </div>
            </div>
            <div className='reg_sell_info'>
                <TextField
                    label="Название"
                    variant="standard"
                    className='reg_buy_buttons_textfield'
                    value={name}
                    onChange={({ target: { value } }) => {
                        setName(value);
                    }}
                />
                <TextField
                    label="Страна"
                    variant="standard"
                    className='reg_buy_buttons_textfield'
                    value={surname}
                    onChange={({ target: { value } }) => {
                        setSurname(value);
                    }} />
                <TextField
                    label="Город"
                    variant="standard"
                    className='reg_buy_buttons_textfield'
                    value={email}
                    onChange={({ target: { value } }) => {
                        setEmail(value);
                    }}
                />
                <TextField
                    label="Телефон"
                    variant="standard"
                    className='reg_buy_buttons_textfield'
                    value={password}
                    onChange={({ target: { value } }) => {
                        setPassword(value);
                    }} />
                <TextField
                    label="Описание"
                    multiline
                    rows={4}
                    className='reg_buy_buttons_textfield'
                    value={description}
                    onChange={({ target: { value } }) => {
                        setDescription(value);
                    }} />
                <div className="reg_sell_signup">Зарегистрироваться</div>
            </div>
        </div>
    )
}

RegSell.propTypes = {
    user: PropTypes.instanceOf(Object),
    isProductsLoading: PropTypes.bool.isRequired,
    products: PropTypes.instanceOf(Object),
}

RegSell.defaultProps = {
    user: null,
    products: null,
}

export default RegSell;
