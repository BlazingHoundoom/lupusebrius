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
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/matthewguernsey/'>
                linkedin
                </a>
            </div>
        )
    }
}

export default FindMe;