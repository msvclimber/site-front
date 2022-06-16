import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  CLEAR_PRODUCTS,
  FETCH_SHOP,
  FETCH_SHOP_SUCCESS,
  FETCH_SHOP_FAIL,
  CLEAR_SHOP,
  DELETE_PRODUCT,
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

export const fetchShop = shopId => ({
  type: FETCH_SHOP,
  shopId,
});

export const fetchShopSuccess = shop => ({
  type: FETCH_SHOP_SUCCESS,
  shop,
});

export const fetchShopFail = () => ({
  type: FETCH_SHOP_FAIL,
});

export const clearShop = () => ({
  type: CLEAR_SHOP,
});

export const deleteProduct = productId => ({
  type: DELETE_PRODUCT,
  productId,
});