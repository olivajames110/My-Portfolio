import React from 'react';
import ReactDOM from 'react-dom';
import './header.css'

class Header extends React.Component {
  
  
 render() {
  return (
    <nav className="">
      <div className="toggle">
        <div className="mobile-logo">Jimmy Oliva</div>
        <div className="mobile-nav"><i class="fas fa-bars" aria-hidden="true"></i></div>
      </div>
      <div className="desktop-header fluid-container">
        <div className="row">
        <div className="logo">Jimmy Oliva</div>
        <div className="navigation">
          <ul className="nav-links">
          <li><a href="#"><span>Home</span></a></li>
          <li><a href="#"><span>About</span></a></li>
          <li><a href="#"><span>Portfolio & Projects</span></a></li>
          <li><a href="#"><span>Contact</span></a></li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
}
}

export default Header;