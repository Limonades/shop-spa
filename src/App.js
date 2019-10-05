import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/scss/index.scss";
import "./App.scss";
import { HomePage } from "./components";
import { ProductPage } from "./components";

function App() {
  return (
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
  );
}

export default App;
