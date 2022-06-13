import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
} from './constants';

const initialState = {
  products: [],
  isProductsLoading: false,
};

const handlers = {
  [FETCH_PRODUCTS]: state => ({
    ...state,
    products: [],
    isProductsLoading: true,
  }),
  [FETCH_PRODUCTS_SUCCESS]: (state, { products }) => ({
    ...state,
    products,
    isProductsLoading: false,
  }),
  [FETCH_PRODUCTS_FAIL]: state => ({
    ...state,
    products: [],
    isProductsLoading: false,
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
