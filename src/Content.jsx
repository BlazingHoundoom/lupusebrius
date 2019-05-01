import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import logo from './LupusEbriusLogo.svg';
import Home from './Home';
import Projects from './Projects';
import FindMe from './FindMe';
import './App.css';

class Content extends Component{
    render(){
        return(
            <HashRouter>
            <div className='Content'>
                 <Route exact path="/" component={Home}/>
                 <Route path="/projects" component={Projects}/>
                 <Route path="/findme" component={FindMe}/>
            </div>
            </HashRouter>
        )
    }
}

export default Content;