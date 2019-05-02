import React, { Component } from 'react';
import logo from './LupusEbriusLogo.svg';
import './App.css';

class FindMe extends Component{
    constructor(props){
        super(props);
        document.title = 'LupusEbrius - Find Me';
      }
    render(){
        return(
            <div className='FindMe'>
                <p>Contact me: mattjguernsey@gmail.com</p>
                <p>Connect with me on <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/matthewguernsey/'>
                Linkedin</a></p>
            </div>
        )
    }
}

export default FindMe;