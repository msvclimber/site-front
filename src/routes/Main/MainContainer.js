import { connect } from 'react-redux';

import {
    getProductList,
    getIsProductListLoading,
} from '../../store/products/selectors';

import Main from './Main';

const mapStateToProps = state => ({
    products: getProductList(state),
    isProductsLoading: getIsProductListLoading(state),
});

export default connect(
    mapStateToProps
)(Main);
