import { call, put } from 'redux-saga/effects';

import apiCall from '../apiCall';

import {
  fetchLoginSuccess,
  fetchLoginFail,
  fetchLoginError,
} from '../../store/auth/actions';

import fetchLoginRequest from './fetchers';

function* fetchLogin({ login, password }) {
  try {
    const { data, error } = yield call(apiCall, fetchLoginRequest, { payload: { login, password } });

    if (data) {
      const { result } = data;
      if (result === null) {
        yield put(fetchLoginError())
      }

      yield put(fetchLoginSuccess(result));
    }

    if (error) {
      yield put(fetchLoginFail());
    }
  } catch {
    yield put(fetchLoginFail());
  }
}


export default fetchLogin;
