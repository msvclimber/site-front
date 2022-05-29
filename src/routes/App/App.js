import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';
import ProductLiist from '../ProductList';
import ProductDetail from '../ProductDetail';
import Main from '../Main';
import Auth from '../Auth';

const isAllowedAccessToPriceRules = true;

const App = () => (
  <div>
    <Routes>
      <Route
        exact
        path="/"
        element={<PrivateRoute component={Main} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/list"
        element={<PrivateRoute component={ProductLiist} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/product-detail"
        element={<PrivateRoute component={ProductDetail} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/auth"
        element={<PrivateRoute component={Auth} isAllowed={isAllowedAccessToPriceRules} />}
      />
    </Routes>
  </div>
);

export default App;