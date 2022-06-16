import { call, put } from 'redux-saga/effects';

import apiCall from '../apiCall';

import {
  fetchProductsSuccess,
  fetchProductsFail,
  fetchShopSuccess,
  fetchShopFail,
} from '../../store/products/actions';

import { fetchProductsRequest, fetchShopRequest} from './fetchers';

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

function* fetchShop({ shopId }) {
  try {
    const { data, error } = yield call(apiCall, fetchShopRequest, { shopId });

    if (data) {
      const { result } = data;
      yield put(fetchShopSuccess(result));
    }

    if (error) {
      yield put(fetchShopFail());
    }
  } catch {
    yield put(fetchShopFail());
  }
}

export { fetchProducts, fetchShop };
