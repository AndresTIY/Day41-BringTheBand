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
        <div className="buttons-left">
          <button>Login</button>
          <button>Signup</button>
        </div>
        <h1>Dres Music Hall</h1>
        <div className="nav-right">
          <BtbNavLinks />
        </div>
      </header>
    );
  }
}

export default BtbHeader;
