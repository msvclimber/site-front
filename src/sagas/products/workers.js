import { call, put } from 'redux-saga/effects';

import apiCall from '../apiCall';

import {
  fetchProductsSuccess,
  fetchProductsFail,
} from '../../store/products/actions';

import fetchProductsRequest from './fetchers';

function* fetchProducts() {
  try {
    const { data, error } = yield call(apiCall, fetchProductsRequest, {});

    if (data) {
      const { result } = data;
      yield put(fetchProductsSuccess(result));
    }

    if (error) {
      yield put(fetchProductsFail());
    }
  } catch {
    yield put(fetchProductsFail());
  }
}


export default fetchProducts;
