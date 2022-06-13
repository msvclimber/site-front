import { connect } from 'react-redux';

import {
    fetchProducts,
} from '../../store/products/actions';

import AppHeader from './AppHeader';

const mapStateToProps = {};
const mapDispatchToProps = { fetchProducts };

export default connect(
    null,
    mapDispatchToProps,
)(AppHeader);
