import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css';

const Footer = ({ projectImageUrl, projectName, projectCompany }) => {
  return (
   <div className="footer">
    <h1 style={ {color: "white;"} } className="section-title">- Contact -</h1>
    <h3 className="section-sub-title">Looking to say hello? Send me a message!</h3>
    <div className="footer-container">
     <form>
      <div className="footer-input">
       <input type="text"  name="Your Name" />
       <label>Your Name</label>
      </div>
      <div className="footer-input">
       <input type="text" />
       <label for="subject">Subject</label>
      </div>
      <div className="footer-input">
       <textarea></textarea>
       <label>Your Message To Me</label>
      </div>
      <button className="about-button">Submit Message</button>
     </form>
    </div>
   </div>
  )
}

export default Footer;