import { all } from 'redux-saga/effects';
import authSaga from './auth';
import productsSaga from './products';

function* rootSaga() {
  yield all([
    ...authSaga,
    ...productsSaga,
  ]);
}

export default rootSaga;
