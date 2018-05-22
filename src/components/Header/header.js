import React from 'react';
import ReactDOM from 'react-dom';
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };
  }

  handleMenuToggleOnClick = (e) => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
  
 render() {
  const isMenuOpen = this.state.isMenuOpen ? 'initial' : 'none';

  return (
    <nav className="">
      <div className="toggle">
        <div className="mobile-logo">Jimmy Oliva</div>
        <div className="mobile-nav">
          <i
            className="fas fa-bars"
            aria-hidden="true"
            onClick={this.handleMenuToggleOnClick}
          />
        </div>
      </div>
      <div className="desktop-header fluid-container">
        <div className="row">
        <div className="logo">Jimmy Oliva</div>
        <div className="navigation">
          <ul
            className="nav-links"
            style={{ display: isMenuOpen }}
          >
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