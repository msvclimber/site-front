import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  CLEAR_PRODUCTS,
} from './constants';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = productList => ({
  type: FETCH_PRODUCTS_SUCCESS,
  productList,
});

export const fetchProductsFail = () => ({
  type: FETCH_PRODUCTS_FAIL,
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS,
});
