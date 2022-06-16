import { connect } from 'react-redux';

import {
    getUser,
} from '../../store/auth/selectors';

import MyShop from './MyShop';

const mapStateToProps = state => ({
    user: getUser(state),
});

export default connect(
    mapStateToProps
)(MyShop);
