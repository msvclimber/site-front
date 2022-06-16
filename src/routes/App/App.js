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
import Shop from '../Shop';
import MyShop from '../MyShop';
import User from '../User';
import Work from '../Work';

import './styles.scss';

const App = () => (
  <div>
    <Routes>
      <Route
        exact
        path="/"
        element={<PrivateRoute component={Main} />}
      />
      <Route
        exact
        path="/list"
        element={<PrivateRoute component={ProductList} />}
      />
      <Route
        exact
        path="/auth/:redirectPage"
        element={<PrivateRoute component={Auth} />}
      />
      <Route
        exact
        path="/lostpass"
        element={<PrivateRoute component={LostPass} />}
      />
      <Route
        exact
        path="/favorites"
        element={<PrivateRoute component={FavoriteList} isLogin />}
      />
      <Route
        exact
        path="/messages"
        element={<PrivateRoute component={Messages} isLogin />}
      />
      <Route
        exact
        path="/detail/:productId"
        element={<PrivateRoute component={DetailProduct} />}
      />
      <Route
        exact
        path="/myshop"
        element={<PrivateRoute component={MyShop} isLogin />}
      />
      <Route
        exact
        path="/shop/:shopId"
        element={<PrivateRoute component={Shop} />}
      />
      <Route
        exact
        path="/user/:id"
        element={<PrivateRoute component={User} isLogin />}
      />
      <Route
        exact
        path="/work"
        element={<PrivateRoute component={Work} />}
      />
    </Routes>
  </div>
);

export default App;
