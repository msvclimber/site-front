import React from 'react';
import PropTypes from 'prop-types';
import history from '../../utils/history';

const PrivateRoute = ({
  component: Component,
  isAllowed,
}) => {
  if (isAllowed) {
    return <Component />
  }

  history.push('/auth');
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(Object)]).isRequired,
  isAllowed: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isAllowed: false,
};

export default PrivateRoute;
