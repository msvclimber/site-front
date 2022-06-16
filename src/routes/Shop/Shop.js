import React from 'react';
import { useParams } from 'react-router-dom';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import DetailShop from '../../modules/DetailShop';

const Shop = () => {
    const { shopId } = useParams();
    return (<div>
        <AppHeader />
        <DetailShop shopId={+shopId} />
        <AppFooter isBottomAbsolute />
    </div>)
}

export default Shop;
