import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from "./components/UserInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React JS Social Oauth Login App
          </h1>
        </header>
        <UserInfo />
      </div>
    );
  }
}

export default App;
