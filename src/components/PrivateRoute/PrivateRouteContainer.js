import { connect } from 'react-redux';

import {
    getUser,
} from '../../store/auth/selectors';

import PrivateRoute from './PrivateRoute';

const mapStateToProps = state => ({
    user: getUser(state),
});

export default connect(
    mapStateToProps,
)(PrivateRoute);
