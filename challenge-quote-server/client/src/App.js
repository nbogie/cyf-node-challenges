import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Quotes from "./components/Quotes";
import QuotesRandom from "./components/QuotesRandom";
import Search from "./components/Search";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/quotes">Quotes</Link>
        <Link to="/quotes/random">Quotes Random</Link>
        <Link to="/quotes/search">Seacrh Quotes</Link>
        <Route path="/quotes" exact component={Quotes} />
        <Route path="/quotes/random" component={QuotesRandom} />
        <Route path="/quotes/search" component={Search} />
      </Router>
    );
  }
}
