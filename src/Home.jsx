import React, { Component } from 'react';
import logo from './LupusEbriusLogo.svg';
import './App.css';
import ProjectList from './data/projects.json';

class Home extends Component{
    constructor(props){
        super(props);
        document.title = 'LupusEbrius - Home';
      }

    render(){
        var projects = [];
        for(var i=0;i<ProjectList.projects.length; i++){
            projects.push(<FeaturedProject props={this} name={ProjectList.projects[i].name} image={ProjectList.projects[i].image}></FeaturedProject>);
        }
        return(
            <div className='Home'>
                <div class="Sections">
                    <h2 class="Headers">About Me</h2>
                    <p>Full-stack web developer, proficient with React, MongoDB, Express, and Node. Currently learning 3D modeling in Blender 2.8 as a hobby. Has experience with Easel.js, C#, and SQL. Knows Adobe Creative Suite, Autodesk Inventor, Fusion360, and CAD.</p>
                </div>
                <div class="Sections">
                    <h2 class="Headers">Featured Projects</h2>
                    <div id="FeaturedProjects">
                        {projects}
                    </div>
                </div>
            </div>
        )
    }
}
    const FeaturedProject  = ({props,image, name}) => {
        return(
            <div id='FeaturedProject'>
                <img src={image} alt={name}/>
            </div>
            )
    }

export default Home;