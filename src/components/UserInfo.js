import React, { Component, Fragment } from "react";
import Login from "./Login";
import base, { firebaseApp } from '../base';
import firebase from 'firebase';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      displayName: null
    };
  }

  // # xác thực theo provider
  authenticate = provider => {
      console.log(provider);
      const authProvider = new firebase.auth[`${provider}AuthProvider`]();
      firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.authHandler);
  };
   
  //  # xử lý sau khi xác thực
  authHandler = async authData => {
      const user = authData.user;
      this.setState({
        email: user.email,
        displayName: user.displayName
      });
  };
    
  // # đăng xuất
  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ email: null, displayName: null });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;
    if (!this.state.email) {
      return <Login authenticate={this.authenticate} />;
    }
    return (
      <Fragment>
        <div className="user-info">
          <label>User name:</label>
          <span type="text" id="email">
            {this.state.displayName}
          </span>
        </div>
        <div className="user-info">
          <label>Email:</label>
          <span type="text" id="email">
            {this.state.email}
          </span>
        </div>
        <div>{logout}</div>
      </Fragment>
    );
  }
}

export default UserInfo;