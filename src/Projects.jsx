import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import logo from './LupusEbriusLogo.svg';
import ProjectList from './data/projects.json';
import './App.css';

class Projects extends Component{
    constructor(props){
        super(props);
        document.title = 'LupusEbrius - Projects';
    }
    render(){
        var projects = [];
        for(var i=0;i<ProjectList.projects.length; i++){
            projects.push(<ProjectView props={this} name={ProjectList.projects[i].name} image={ProjectList.projects[i].image} description={ProjectList.projects[i].description}></ProjectView>)
        }
        return(
            <div>
            <h2>Projects</h2>
            <div className='Projects'>
                {projects}
            </div>
            </div>
        )
    }
}

const ProjectView  = ({props, name, image, description}) => {
        return(
            <div id='ProjectView'>
                <img class="ProjectImage" src={image} alt={name}/>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            )
}

export default Projects;