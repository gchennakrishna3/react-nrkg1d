import React from "react";
import "./style.css";

import Main from "./main";
import Details from "./details";

import { store } from "./reducer";

import { Provider } from "react-redux";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
       <Router>
       <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
       </Switch>
       </Router>
      </Provider>
    );
  }
}

export default App;
