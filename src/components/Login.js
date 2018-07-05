import React from "react";

const Login = props => (
  <div className="login">
    <p>Please click button below to sign in!</p>
    <button className="github" onClick={() => {props.authenticate('Github')}}>Log In With Gitub</button>
    <button className="facebook" onClick={() => {props.authenticate('Facebook')}}>Log In With Facebook</button>
  </div>
);

export default Login;