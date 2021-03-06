import React from "react";
import BtbNavLinks from "./btb-navlinks.js";
import userLogin from "../actions/btb-login.js";
import createUser from "../actions/btb_create_user.js";
import container from "../containers/all.js";
import retrieveBands from "../actions/btb_load_bands.js";

import { connect } from "react-redux";

class BtbHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginClick: false,
      signupClick: false,
      loggedinUserClick: false,
      signedupUserClick: false,
      name: ""
    };

    this.loginRender = this.loginRender.bind(this);
    this.signupRender = this.signupRender.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(retrieveBands());
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
    this.setState({
      loggedinUserClick: !this.state.loggedinUserClick
    });
  }

  signupUser() {
    let email = this.refs.signupEmail.value;
    let pw = this.refs.signupPw.value;
    let name = this.refs.signupName.value;

    this.props.dispatch(createUser(name, email, pw));
    this.setState({
      signedupUserClick: !this.state.signedupUserClick,
      name: name
    });
  }

  render() {
    let hideClass = "hidden";
    let hideSignup = "hidden";
    let showClass = "show";
    let welcome = "hidden";
    let username = "";
    if (this.state.loginClick) {
      hideClass = "show";
      showClass = "hidden";
    }
    if (this.state.signupClick) {
      showClass = "hidden";
      hideSignup = "show";
    }
    if (this.state.loggedinUserClick || this.state.signedupUserClick) {
      hideClass = "hidden";
      hideSignup = "hidden";
      welcome = "show";
    }
    if (this.state.loggedinUserClick) {
      username = this.props.userInfo.username;
    }
    if (this.state.signedupUserClick) {
      username = this.state.name;
    }
    return (
      <header>
        <div className={"buttons-left " + welcome}>
          <h5>Welcome {username}!</h5>

        </div>
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

export default connect(container.allState)(BtbHeader);
