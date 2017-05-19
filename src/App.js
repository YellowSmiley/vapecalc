import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to VapeCalc</h2>
        </div>
        <p className="App-intro">
          Fill out the below fields and click submit:
        </p>
        <Form />
      </div>
    );
  }
}

export default App;