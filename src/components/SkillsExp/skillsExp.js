import React from 'react';
import ReactDOM from 'react-dom';
import './skillsExp.css';

class SkillsExp extends React.Component {
 render() {
  return (
   <div className="skills-exp-section">
   <div className="programming">
   <div className="skills-box">
    <h1 className="section-title">- Programming Languages - </h1>
    <h2 className="section-sub-title">Languages I like to use</h2>
   </div>
   <div className="programming-row">
    <div className="skills-col">
     <div className="skill-icon">
      <img src="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495169.png" width="80%" />
     </div>
     <h3 className="skill-title">HTML 5</h3>
    </div>
    <div className="skills-col">
     <div className="skill-icon">
      <img src="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495170.png" width="80%" />
     </div>
     <h3 className="skill-title">CSS</h3>
    </div>
    <div className="skills-col">
     <div className="skill-icon">
      <img src="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495172.png" width="80%" />
     </div>
     <h3 className="skill-title">Javascript</h3>
    </div>
    <div className="skills-col">
     <div className="skill-icon">
     <img src="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495173.png" width="80%" />
      </div>
     <h3 className="skill-title">React</h3>
    </div>
   </div>
  </div>
    <div className="skills">
     <div className="skills-box">
      <h1 className="section-title">- Skills & Proficiencys -</h1>
      <h2 className="section-sub-title">What I'm pretty good at doing</h2>
     </div>
     <div className="skills-row">
     <div className="skills-col">
      <div className="skill-icon">
       <img src="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495389.png" width="80%" />
       </div>
      <h3 className="skill-title">Web Design</h3>
     </div>
     <div className="skills-col">
      <div className="skill-icon">
       <img src="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495390.png" width="80%" />
       </div>
      <h3 className="skill-title">Photoshop</h3>
     </div>
     <div className="skills-col">
      <div className="skill-icon">
       <img src="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495168.png" width="80%" />
       </div>
      <h3 className="skill-title">UX/UI</h3>
     </div>
     <div className="skills-col">
      <div className="skill-icon">
       <img src="https://digitalmarketing.blob.core.windows.net/10412/images/items/image495475.png" width="80%" />
      </div>
     <h3 className="skill-title">Mockplus</h3>
    </div>
    </div>
    </div>
   </div>
  )
 }
}

export default SkillsExp;