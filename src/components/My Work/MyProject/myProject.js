import React from 'react';
import ReactDOM from 'react-dom';
import './myProject.css';

class MyProject extends React.Component {
 constructor(props) {
  super(props);
 }
 render() {
  return (
   <div className="project-container">
     <div className="project project-image">
      <div className="overlay">     
       <div className="box">
        <h2 className="project-title-name">{this.props.projectName}</h2>
        <h3 className="project-title-company">{this.props.projectCompany}</h3>
        <button>View Case Study <span><i class="fas fa-arrow-right"></i></span></button>
       </div>
      </div>
     </div>
    </div>
  )
 }
}

export default MyProject;