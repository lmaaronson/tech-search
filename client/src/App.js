import React, { Component } from 'react';
import Dashboard from "./Components/Dashboard";
import './App.css';
import Search from './Components/Search';

class App extends Component {

  // constructor() {
  //   super();
  //   document.addEventListener('DOMContentLoaded', function() {
  //     var elems = document.querySelectorAll('.modal');
  //     var instances = M.Modal.init(elems, options);
  //   });
  // }
  // instance = M.Modal.getInstance(elem);

  render() {
    return (

      <div>
      <Search />
      <Dashboard />
      </div>
    );
  }
}

export default App;
