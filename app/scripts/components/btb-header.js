import React from "react";
import BtbNavLinks from "./btb-navlinks.js";
import userLogin from "../actions/btb-login.js";
import createUser from "../actions/btb_create_user.js";
import { connect } from "react-redux";

class BtbHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginClick: false,
      signupClick: false
    };

    this.loginRender = this.loginRender.bind(this);
    this.signupRender = this.signupRender.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }

  loginRender() {
    this.setState({
      loginClick: !this.state.loginClick
    });
  }

  signupRender() {
    this.setState({
      signupClick: !this.state.signupClick
    });
  }

  loginUser() {
    let email = this.refs.loginEmail.value;
    let pw = this.refs.loginPw.value;

    this.props.dispatch(userLogin(email, pw));
  }

  signupUser() {
    let email = this.refs.signupEmail.value;
    let pw = this.refs.signupPw.value;
    let name = this.refs.signupName.value;

    this.props.dispatch(createUser(name, email, pw));
  }

  render() {
    let hideClass = "hidden";
    let hideSignup = "hidden";
    let showClass = "show";
    if (this.state.loginClick) {
      hideClass = "show";
      showClass = "hidden";
    }
    if (this.state.signupClick) {
      showClass = "hidden";
      hideSignup = "show";
    }
    return (
      <header>
        <div className={"buttons-left login " + hideClass}>
          <input ref="loginEmail" placeholder="email" type="text" />
          <input ref="loginPw" placeholder="password" type="text" />
          <button onClick={this.loginUser}>Login</button>
        </div>
        <div className={"buttons-left login " + hideSignup}>
          <input ref="signupName" placeholder="username" type="text" />
          <input ref="signupEmail" placeholder="email" type="text" />
          <input ref="signupPw" placeholder="password" type="password" />
          <button onClick={this.signupUser}>Signup</button>
        </div>
        <div className={"buttons-left " + showClass}>
          <button
            className="waves-effect waves-light btn"
            onClick={this.loginRender}
          >
            Login
          </button>
          <button
            className="waves-effect waves-light btn"
            onClick={this.signupRender}
          >
            Signup
          </button>
        </div>
        <h3>Dres Music Hall</h3>
        <div className="nav-right">
          <BtbNavLinks />
        </div>
      </header>
    );
  }
}

export default connect()(BtbHeader);
