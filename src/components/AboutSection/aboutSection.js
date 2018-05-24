import React from 'react';
import ReactDOM from 'react-dom';
import './aboutSection.css';

class aboutSection extends React.Component {
 render() {
  return (
   <div className="about-section container">
    <div className="about-abilities row">
     <div className="col-md-4">
      <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/32336918_10216545070438843_2799077921069727744_o.jpg?_nc_cat=0&oh=d0552f9f9ed4f1d0d89a12384d6f5b62&oe=5B8045BF" alt="jimmy" width="100%"/>
     </div>
     <div className="col-md-1"></div>
     <div className="col-md-7">
      <h1 className="about-text-title">My Abilities</h1>
      <div className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisl, euismod non nulla quis, pretium pellentesque est. In dictum libero diam, ut scelerisque neque pharetra ut. Nam eu ornare mauris. Donec sapien risus, finibus ac turpis et, elementum feugiat orci. Curabitur cursus tortor sit amet arcu dignissim pharetra. Fusce sodales consequat interdum. Suspendisse potenti. Curabitur lacinia porttitor massa, quis mollis eros lobortis nec. Nulla congue sem sed sem pellentesque, a rhoncus dui ultricies. Proin ultricies, metus quis dapibus ultricies, mauris neque porta ex, ut bibendum massa lectus vitae quam.
      </div>
     </div>
    </div>
   </div>
  )
 }
}

export default aboutSection;