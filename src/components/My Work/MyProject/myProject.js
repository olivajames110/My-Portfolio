import React from 'react';
import ReactDOM from 'react-dom';
import './myProject.css';

const MyProject = ({ projectImageUrl, projectName, projectCompany }) => {
  return (
   <div className="project-container">
     <div
     style={{backgroundImage: `url(${projectImageUrl})`}}
     className="project project-image">
      <div className="overlay">     
       <div className="box">
        <h2 className="project-title-name">{projectName}</h2>
        <h3 className="project-title-company">{projectCompany}</h3>
        <button>View Case Study <span><i class="fas fa-arrow-right"></i></span></button>
       </div>
      </div>
     </div>
    </div>
  )
}

export default MyProject;