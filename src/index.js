import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';

import Layout from './components/Layout';
import ShowOne from './components/ShowOne';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout} />
      <Route path='/:id' component={ShowOne} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
