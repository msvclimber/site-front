import { connect } from 'react-redux';

import {
    getUser,
} from '../../store/auth/selectors';

import {
    logout,
} from '../../store/auth/actions';

import RegBuy from './RegBuy';

const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = {
    logout
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegBuy);
