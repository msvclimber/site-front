import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';
import ProductList from '../ProductList';
import FavoriteList from '../FavoriteList';
import Main from '../Main';
import Auth from '../Auth';
import Messages from '../Messages';
import LostPass from '../LostPass';
import DetailProduct from '../DetailProduct';
import MyShop from '../MyShop';
import User from '../User';
import Work from '../Work';

import './styles.scss';

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
        element={<PrivateRoute component={ProductList} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/auth"
        element={<PrivateRoute component={Auth} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/lostpass"
        element={<PrivateRoute component={LostPass} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/favorites"
        element={<PrivateRoute component={FavoriteList} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/messages"
        element={<PrivateRoute component={Messages} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/detail/:productId"
        element={<PrivateRoute component={DetailProduct} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/myshop"
        element={<PrivateRoute component={MyShop} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/user"
        element={<PrivateRoute component={User} isAllowed={isAllowedAccessToPriceRules} />}
      />
      <Route
        exact
        path="/work"
        element={<PrivateRoute component={Work} isAllowed={isAllowedAccessToPriceRules} />}
      />
    </Routes>
  </div>
);

export default App;
