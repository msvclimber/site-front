import { connect } from 'react-redux';

import {
    setFavorites,
} from '../../store/auth/actions';

import {
    getUser,
} from '../../store/auth/selectors';

import ProductItem from './ProductItem';

const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = {
    setFavorites,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductItem);
