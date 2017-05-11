import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.scss';

// Import Components
import App from './components/App';
import Quote from './components/Quote';

// Import react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={App}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
