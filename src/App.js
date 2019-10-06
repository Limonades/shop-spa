import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/scss/index.scss';
import './App.scss';
import { Provider } from 'react-redux';
import { HomePage, ProductPage } from './components';

import configureStore from './store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
