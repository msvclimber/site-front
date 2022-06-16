import { connect } from 'react-redux';

import {
    setFavorites,
} from '../../store/auth/actions';

import {
    getUser,
} from '../../store/auth/selectors';

import Product from './Product';

const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = {
    setFavorites,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Product);
