import React, { Component } from "react";
import logo from "./logo.svg";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Posts from "./components/Post";
import Postform from "./components/Postform";

import "./App.css";

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
