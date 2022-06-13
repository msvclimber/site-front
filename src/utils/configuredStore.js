import {
    combineReducers,
    createStore,
    compose, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../store';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers(rootReducer);

const appliedMiddlewares = applyMiddleware(sagaMiddleware);

const composedEnhancers = compose(appliedMiddlewares);

const store = createStore(combinedReducers, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
