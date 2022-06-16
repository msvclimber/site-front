import { connect } from 'react-redux';

import {
    getUser,
} from '../../store/auth/selectors';

import MessageList from './MessageList';

const mapStateToProps = state => ({
    user: getUser(state),
});

export default connect(
    mapStateToProps,
)(MessageList);
