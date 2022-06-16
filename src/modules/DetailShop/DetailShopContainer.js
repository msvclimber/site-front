import { connect } from 'react-redux';

import {
    getProductList,
    getIsProductListLoading,
    getShop,
    getIsShopLoading,
} from '../../store/products/selectors';

import {
    fetchShop,
    clearShop,
} from '../../store/products/actions';

import {
    getUser,
} from '../../store/auth/selectors';

import DetailShop from './DetailShop';

const mapStateToProps = state => ({
    products: getProductList(state),
    isProductsLoading: getIsProductListLoading(state),
    user: getUser(state),
    shop: getShop(state),
    isShopLoading: getIsShopLoading(state),
});

const mapDispatchToProps = {
    fetchShop,
    clearShop,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailShop);
