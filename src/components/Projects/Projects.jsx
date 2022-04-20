import React from 'react'
import './Projects.css'
import { Project_frontend } from '../../containers';
import { Project_backend } from '../../containers';


const Projects = () => {
  return (
    <div className="container">
        <Project_frontend/>
        <Project_backend/>
    </div>
  )
}

export default Projects;
