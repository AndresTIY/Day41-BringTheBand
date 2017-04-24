import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import BtbHeader from "./btb-header.js";
import userLogin from "../actions/btb-login.js";

class AppRoot extends React.Component {
  render() {
    return (
      <main>
        <BtbHeader />
      </main>
    );
  }
}

export default AppRoot;
