import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import DetailShop from '../../modules/DetailShop';

const MyShop = ({ user }) => {
    const { shopId } = user;
    return (<div>
        <AppHeader />
        <DetailShop shopId={shopId} isOwner />
        <AppFooter isBottomAbsolute />
    </div>)
}

MyShop.propTypes = {
    user: PropTypes.instanceOf(Object),
};

MyShop.defaultProps = {
    user: null,
}

export default MyShop;
