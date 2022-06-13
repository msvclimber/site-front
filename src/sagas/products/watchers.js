import { takeEvery } from 'redux-saga/effects';

import { FETCH_PRODUCTS } from '../../store/products/constants';

import fetchProducts from './workers';

const productsSaga = [
  takeEvery(FETCH_PRODUCTS, fetchProducts),
];

export default productsSaga;
