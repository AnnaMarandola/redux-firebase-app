import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Redirect } from 'react-router-dom';


const ProjectDetails = props => {
  const {project, auth} = props;
  if (!auth.uid) return <Redirect to='/signin'/>

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <img alt="pate" src={project.url} />
            <span className="card-title">{project.title} </span>
            <p>{project.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by {project.authorFirstName}</div>
            <div>11 février, 20:21</div>

          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose (
  connect (mapStateToProps),
  firestoreConnect ([{collection: 'projects'}])
) (ProjectDetails);
