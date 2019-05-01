import React, { Component } from 'react';
import logo from './LupusEbriusLogo.svg';
import './App.css';

class Home extends Component{
    constructor(props){
        super(props);
        document.title = 'LupusEbrius - Home';
      }
    render(){
        return(
            <div className='Home'>
                <p>Hello World!</p>
            </div>
        )
    }
}

export default Home;