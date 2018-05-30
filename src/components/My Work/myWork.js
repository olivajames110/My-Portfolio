import React from 'react';
import ReactDOM from 'react-dom';
import './myWork.css';
import './MyProject/myProject';
import MyProject from './MyProject/myProject';

class MyWork extends React.Component {
 render() {
  return (
   <div className="my-work-section">
    <div className="container">
     <div className="my-work-title  section-title">
      <h1>Some of my <span style={ { color:"#3b97a3" } }>Work</span></h1>
     </div>
     <MyProject projectName="Social Hub Redesign" projectCompany="Built For Ordereze" projectLink=""/>
     <MyProject projectName="Social Hub Redesign1" projectCompany="Built For Ordereze1" projectLink=""/>
     <MyProject projectName="Social Hub Redesign3" projectCompany="Built For Ordereze3" projectLink=""/>
    </div>
   </div>
  )
 }
}

export default MyWork;