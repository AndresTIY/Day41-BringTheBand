import React from "react";
import { Link } from "react-router-dom";
import BtbNavLinks from "./btb-navlinks.js";

class BtbHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <header>
        <button>Login</button>
        <button>Signup</button>
        <h1>Dres Music Hall</h1>
        <BtbNavLinks />
      </header>
    );
  }
}

export default BtbHeader;
