import { connect } from 'react-redux';

import {
    getProductList,
    getIsProductListLoading,
} from '../../store/products/selectors';

import {
    getUser,
} from '../../store/auth/selectors';

import Favorites from './Favorites';

const mapStateToProps = state => ({
    products: getProductList(state),
    isProductsLoading: getIsProductListLoading(state),
    user: getUser(state),
});

export default connect(
    mapStateToProps
)(Favorites);
