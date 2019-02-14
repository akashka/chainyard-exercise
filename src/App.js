import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NotFound from './pages/Not-found';
import Header from './components/layout/Header';

import LatestBlock from './pages/LatestBlock';
import ViewBlock from './pages/ViewBlock';
import ViewTransaction from './pages/ViewTransaction';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Chainyard" />
          <div className="container">
            <Switch>
              <Route exact title="Latest Block" path="/" component={LatestBlock} />
              <Route exact title="View Block" path="/block/:block" component={ViewBlock} />
              <Route exact title="View Transaction" path="/transaction/:txn" component={ViewTransaction} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
