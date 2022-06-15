import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isLogin,
  user,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLogin && !user) {
      const startWith = location.pathname.slice(0, 5);
      if (startWith === '/user') {
        navigate('/auth' + startWith);
      } else {
        navigate('/auth' + location.pathname);
      }
    }
  }, [user])

  if (!isLogin || isLogin && user) {
    return <Component />
  }
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(Object)]).isRequired,
  isLogin: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isLogin: false,
};

export default PrivateRoute;
