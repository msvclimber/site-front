import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  CLEAR_PRODUCTS,
} from './constants';

const initialState = {
  productList: [],
  isProductListLoading: false,
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
};

const products = (state = initialState, action) => {
  const handler = handlers[action.type];

  if (!handler) {
    return state;
  }

  return handler(state, action);
};

export default products;
