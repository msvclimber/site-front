import { connect } from 'react-redux';

import {
    getUser,
} from '../../store/auth/selectors';

import {
    logout,
} from '../../store/auth/actions';

import RegSell from './RegSell';

const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = {
    logout
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegSell);
