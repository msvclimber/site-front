import { takeEvery } from 'redux-saga/effects';

import { FETCH_PRODUCTS } from '../../store/auth/constants';

// import { fetchProducts } from './workers';
const fetchProducts = () => { };

const productsSaga = [
  takeEvery(FETCH_PRODUCTS, fetchProducts),
];

export default productsSaga;
