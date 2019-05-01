import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import logo from './LupusEbriusLogo.svg';
import './App.css';
var Links = [
    {source: "/",name: "Home"},
    {source: "/projects",name: "Projects"},
    {source: "/findme",name: "Find Me"},
];
class Nav extends Component{
    render(){
        var buttons = [];
        for(let i=0;i<Links.length;i++){
            buttons.push(<NavButton props={this} source={Links[i].source} name={Links[i].name}></NavButton>)
        }
        return(
            <HashRouter>
            <nav className='Nav'>
                <NavLink to={Links[0].source}><img id="nav-icon" src={logo}></img></NavLink>
                <ul className='Nav-ul'>
                    {buttons}
                </ul>
            </nav>
            </HashRouter>
        )
    }
}

const NavButton = ({props, source, name}) => {
    return(<li id='Nav-li'><NavLink to={source} id='Nav-li-a'>{name}</NavLink></li>)
}

export default Nav;