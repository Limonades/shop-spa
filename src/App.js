import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/scss/index.scss";
import "./App.scss";
import { Header } from "./components";
import { Content } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Header />
        </Route>
        <Route path="/product/:id">
          <Content />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
