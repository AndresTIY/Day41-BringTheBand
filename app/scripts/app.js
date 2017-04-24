import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import BtbHeader from "./components/btb-header.js";
import BtbSearch from "./components/btb-search.js";
import BtbVoted from "./components/btb-voted.js";

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>

          <Route path="/" component={AppRoot} />
          <Route path="/search" component={BtbSearch} />
          <Route exact path="/voted" component={BtbVoted} />

        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
