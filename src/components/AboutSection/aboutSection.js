import React from 'react';
import ReactDOM from 'react-dom';
import './aboutSection.css';

class aboutSection extends React.Component {
 render() {
  return (
   <div className="about-section">
    <div className="container">
      <div className="about-abilities row">
        <div className="col-md-7">
          <h1 className="section-title">- Bio -</h1>
          <h3 className="section-sub-title">Hello I'm Jimmy.</h3>
          <p className="section-sub-sub-title">I'm a Junior Developer and I love to build.</p>
          <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisl, euismod non nulla quis, pretium pellentesque est. In dictum libero diam, ut scelerisque neque pharetra ut. Nam eu ornare mauris. Donec sapien risus, finibus ac turpis et, elementum feugiat orci. Curabitumassa lectus vitae quam.
          </p>
          <div className="about-sm-resume-container">
          <button className="about-button" >
            <i class="far fa-envelope-open"></i><span>Send me a message</span>
          </button>
          <button className="about-button" >
            <i class="fab fa-linkedin-in"></i>Lets link up
          </button>
         </div>
        </div>
    <div className="col-md-1"></div>
      <div className="col-md-4">
        <img src="https://digitalmarketing.blob.core.windows.net/10412/images/items/image494972.png" alt="jimmy" width="100%"/>
      </div>


      </div>
    </div>
   </div>
  )
 }
}

export default aboutSection;