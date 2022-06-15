import { takeEvery } from 'redux-saga/effects';

import { FETCH_LOGIN } from '../../store/auth/constants';

import fetchLogin from './workers';

const productsSaga = [
  takeEvery(FETCH_LOGIN, fetchLogin),
];

export default productsSaga;
