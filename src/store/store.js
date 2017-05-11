import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import createLoggerMiddleware from './create-logger-middleware';
import rootReducer from '../reducers';
import {
  USE_REDUX_LOGGER,
} from '../config';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (__DEV__ && USE_REDUX_LOGGER) {
  const loggerMiddleware = createLoggerMiddleware();
  middlewares.push(loggerMiddleware);
}

const enhancers = [];

const middlewareEnhancer = applyMiddleware(...middlewares);
enhancers.push(middlewareEnhancer);

const store = createStore(
  rootReducer,
  undefined,
  compose(...enhancers),
);

store.runSaga = sagaMiddleware.run;

if (__DEV__ && module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(require('./../reducers/index').default);
  });
}

export default store;
