import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/scss/index.scss";
import "./App.scss";
import { HomePage } from "./components";
import { ProductPage } from "./components";
import { Provider } from 'react-redux';
import configureStore from './store'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
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
