import { connect } from 'react-redux';

import {
    fetchLogin,
    clearLoginError,
} from '../../../store/auth/actions';

import {
    getIsLoginError,
    getIsLoging,
    getUser,
} from '../../../store/auth/selectors';

import Login from './Login';

const mapStateToProps = state => ({
    isLoginError: getIsLoginError(state),
    isLoging: getIsLoging(state),
    user: getUser(state),
});
const mapDispatchToProps = { fetchLogin, clearLoginError };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
