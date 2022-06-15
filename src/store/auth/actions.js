import {
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAIL,
  FETCH_LOGIN_ERROR,
  CLEAR_LOGIN_ERROR,
} from './constants';

export const fetchLogin = (login, password) => ({
  type: FETCH_LOGIN,
  login,
  password,
});

export const fetchLoginSuccess = user => ({
  type: FETCH_LOGIN_SUCCESS,
  user,
});

export const fetchLoginFail = () => ({
  type: FETCH_LOGIN_FAIL,
});

export const fetchLoginError = () => ({
  type: FETCH_LOGIN_ERROR,
});

export const clearLoginError = () => ({
  type: CLEAR_LOGIN_ERROR,
});
