import { connect } from 'react-redux';

import {
    fetchProducts,
} from '../../store/products/actions';
import {
    getProductList,
} from '../../store/products/selectors';

import AppHeader from './AppHeader';

const mapStateToProps = state => ({
    products: getProductList(state),
});
const mapDispatchToProps = { fetchProducts };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppHeader);
