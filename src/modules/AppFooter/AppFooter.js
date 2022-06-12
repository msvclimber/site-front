import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import EnterIcon from '../../assets/icons/enter.svg';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import './styles.scss';

const AppFooter = ({ isBottomAbsolute }) => {
    return (<div className={isBottomAbsolute ? "appfooter_root_bottom" : "appfooter_root"}>
        <div className="appfooter_left">
            <div className="appfooter_left_buttons">
                <Link to='/work'>КОНТАКТЫ</Link>
                <Link to='/work'>TERMS OF SERVICES</Link>
                <Link to='/work'>SHIPPING AND RETURNS</Link>
            </div>
            <div>© <b>2022 Хоббимаркет.</b> Все права защищены.</div>
        </div>
        <div className="appfooter_right">
            <TextField placeholder='Подписаться, чтобы получать новости' variant="standard" className='appfooter_textfield' InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <EnterIcon width="27" height="10" />
                    </InputAdornment>
                ),
            }} />
        </div>
    </div>)
}

export default AppFooter;
