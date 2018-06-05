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
    <h1 className="section-title">- Portfolio & Work -</h1>
    <h3 className="section-sub-title">Recent projects of mine</h3>
     <MyProject projectName="Free Trial Redesign" projectCompany="Ordereze - UX/UI" projectImageUrl="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495518.png" projectLink=""/>
     <MyProject projectName="Noah Grants Seafood" projectCompany="Web Design" projectImageUrl="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495521.png"/>
     <MyProject projectName="Social Hub Redesign" projectCompany="Ordereze - UX/UI" projectImageUrl="https://digitalmarketing.blob.core.windows.net/9553/images/items/image494666.png" />
    </div>
   </div>
  )
 }
}

export default MyWork;