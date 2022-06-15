import React from 'react';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  isAllowed,
}) => {
  if (isAllowed) {
    return <Component />
  }
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(Object)]).isRequired,
  isAllowed: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isAllowed: false,
};

export default PrivateRoute;
