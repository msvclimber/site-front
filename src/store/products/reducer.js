import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  CLEAR_PRODUCTS,
  FETCH_SHOP,
  FETCH_SHOP_SUCCESS,
  FETCH_SHOP_FAIL,
  CLEAR_SHOP,
} from './constants';

const initialState = {
  productList: [],
  isProductListLoading: false,
  shop: null,
  isShopLoading: false,
};

const handlers = {
  [FETCH_PRODUCTS]: state => ({
    ...state,
    productList: [],
    isProductListLoading: true,
  }),
  [FETCH_PRODUCTS_SUCCESS]: (state, { productList }) => ({
    ...state,
    productList,
    isProductListLoading: false,
  }),
  [FETCH_PRODUCTS_FAIL]: state => ({
    ...state,
    isProductListLoading: false,
  }),
  [CLEAR_PRODUCTS]: state => ({
    ...state,
    productList: [],
    isProductListLoading: false,
  }),
  [FETCH_SHOP]: state => ({
    ...state,
    shop: [],
    isShopLoading: true,
  }),
  [FETCH_SHOP_SUCCESS]: (state, { shop }) => ({
    ...state,
    shop,
    isShopLoading: false,
  }),
  [FETCH_SHOP_FAIL]: state => ({
    ...state,
    isShopLoading: false,
  }),
  [CLEAR_SHOP]: state => ({
    ...state,
    shop: null,
  }),
};

const products = (state = initialState, action) => {
  const handler = handlers[action.type];

  if (!handler) {
    return state;
  }

  return handler(state, action);
};

export default products;
