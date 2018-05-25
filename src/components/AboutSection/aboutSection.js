import React from 'react';
import ReactDOM from 'react-dom';
import './aboutSection.css';

class aboutSection extends React.Component {
 render() {
  return (
   <div className="about-section container">
    <div className="about-abilities row">
     <div className="col-md-4">
      <div className="about-image"></div>
     </div>
     <div className="col-md-1"></div>
     <div className="col-md-7">
      <h1 className="about-text-title">A Little About Myself</h1>
      <div className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisl, euismod non nulla quis, pretium pellentesque est. In dictum libero diam, ut scelerisque neque pharetra ut. Nam eu ornare mauris. Donec sapien risus, finibus ac turpis et, elementum feugiat orci. Curabitur cursus tortor sit amet arcu dignissim pharetra. Fusce sodales consequat interdum. Suspendisse potenti. Curabitur lacinia porttitor massa, quis mollis eros lobortis nec. Nulla congue sem sed sem pellentesque, a rhoncus dui ultricies. Proin ultricies, metus quis dapibus ultricies, mauris neque porta ex, ut bibendum massa lectus vitae quam.
      </div>
      <div className="about-sm-resume-container">
       <button className="about-button" >
        <i class="far fa-envelope-open"></i><span>Send me a message </span>
       </button>
       <button className="about-button" >
        <i class="fab fa-linkedin-in"></i>Lets link up
        </button>
      </div>
     </div>
    </div>
   </div>
  )
 }
}

export default aboutSection;