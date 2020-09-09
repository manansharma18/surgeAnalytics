import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddOrder from './AddOrder/AddOrder'
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddOrder></AddOrder>
      </div>
    );
  }
}

export default App;
