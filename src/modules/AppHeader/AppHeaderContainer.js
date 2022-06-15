import { connect } from 'react-redux';

import {
    fetchProducts,
} from '../../store/products/actions';
import { getUser } from '../../store/auth/selectors';
import {
    getProductList,
} from '../../store/products/selectors';

import AppHeader from './AppHeader';

const mapStateToProps = state => ({
    products: getProductList(state),
    user: getUser(state),
});
const mapDispatchToProps = { fetchProducts };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppHeader);
