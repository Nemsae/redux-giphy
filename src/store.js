import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './reducers';
import promise from 'redux-promise-middleware';

let middlewares = [
  logger(),
  promise()
];

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middlewares)
));

store.subscribe(() => {
  store.getState();
});

export default store;
