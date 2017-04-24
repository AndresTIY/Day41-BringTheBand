import React from "react";
import { Link } from "react-router-dom";
import BtbNavLinks from "./btb-navlinks.js";

class BtbHeader extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  login(e) {
    console.log("ya");
  }

  render() {
    return (
      <header>
        <div className="buttons-left login">
          <input placeholder="email" type="text" />
          <input placeholder="password" type="text" />
          <button>Login</button>
        </div>
        <div className="buttons-left hidden">
          <button onClick={this.login}>Login</button>
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
