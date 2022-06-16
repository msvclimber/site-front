import { takeEvery } from 'redux-saga/effects';

import { FETCH_PRODUCTS, FETCH_SHOP } from '../../store/products/constants';

import { fetchProducts, fetchShop } from './workers';

const productsSaga = [
  takeEvery(FETCH_PRODUCTS, fetchProducts),
  takeEvery(FETCH_SHOP, fetchShop),
];

export default productsSaga;
