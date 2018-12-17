import React, { Component } from "react";
import { withRouter } from "react-router";
import FirebaseConfig from '../../config/keys';


import Login from "./LoginView";

class LoginContainer extends Component {
  handleSignIn = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await FirebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");

    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <Login onSubmit={this.handleSignIn} />;
  }


}

export default withRouter(LoginContainer);
