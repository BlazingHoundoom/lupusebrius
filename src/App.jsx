import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Nav from './Nav';
import Content from './Content';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav name='NavBar'/>
        <Content name='Content'/>
        <Footer name='Footer'/>
      </div>
    );
  }
}

export default App;
