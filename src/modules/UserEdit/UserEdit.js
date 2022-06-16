import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const UserEdit = ({ user, logout }) => {
    if (user === null) {
        return null;
    }

    return (
        <div className='user_edit_root'>
            <div>
                <div className='user_edit_photo'>
                    <div className='user_edit_photo_place'>
                        <div className='user_edit_photo_border'></div>
                    </div>
                    <span>Изображение размером 120x148px весом не более 25мб.</span>
                    <div className="user_edit_exit" onClick={logout}>Выйти</div>
                </div>
                <div className='user_edit_personal'>Личные данные<div style={{ backgroundColor: '#efefef', width: 600, height: 300 }} /></div>
            </div>
            <div className='user_edit_password'>Сменить пароль<div style={{ backgroundColor: '#efefef', width: 500, height: 100 }} /></div>
            <div className='user_edit_myshop'>
                Мой магазин
                <Link to={'/shop/create'} style={{ textDecoration: 'none' }}><div className="user_edit_create">Создать магазин</div></Link>
            </div>
        </div>
    )
}

UserEdit.propTypes = {
    user: PropTypes.instanceOf(Object),
    isProductsLoading: PropTypes.bool.isRequired,
    products: PropTypes.instanceOf(Object),
}

UserEdit.defaultProps = {
    user: null,
    products: null,
}

export default UserEdit;
