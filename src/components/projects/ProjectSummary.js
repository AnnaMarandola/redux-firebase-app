import React from 'react';
import Card from './Card.css';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <img className="enigme-image" src={project.url}/>
          <p>Posted by Anna</p>
          <p className="grey-text">11 février, 20:20</p>
        </div>
      </div>
    )
}

export default ProjectSummary;