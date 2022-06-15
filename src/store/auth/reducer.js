import {
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAIL,
  FETCH_LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
} from './constants';

const initialState = {
  user: null,
  isLoging: false,
  isLoginError: false,
};

const handlers = {
  [FETCH_LOGIN]: state => ({
    ...state,
    user: null,
    isLoging: true,
  }),
  [FETCH_LOGIN_SUCCESS]: (state, { user }) => ({
    ...state,
    user,
    isLoging: false,
  }),
  [FETCH_LOGIN_FAIL]: state => ({
    ...state,
    user: null,
    isLoging: false,
  }),
  [FETCH_LOGIN_ERROR]: state => ({
    ...state,
    isLoginError: true,
  }),
  [CLEAR_LOGIN_ERROR]: state => ({
    ...state,
    isLoginError: false,
  }),
};

const auth = (state = initialState, action) => {
  const handler = handlers[action.type];

  if (!handler) {
    return state;
  }

  return handler(state, action);
};

export default auth;
