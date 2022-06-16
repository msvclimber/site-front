import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const MessageList = ({ user }) => {
    return (
        <div className='messages_root'>
            {`${user?.name} у вас нету сообщений`}
        </div>
    )
}

MessageList.propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
    width: PropTypes.string.isRequired,
    marginBottom: PropTypes.string,
    user: PropTypes.instanceOf(Object),
    setFavorites: PropTypes.func.isRequired,
}

MessageList.defaultProps = {
    marginBottom: '0px',
    user: null,
}

export default MessageList;
