import React from 'react';
import ReactDOM from 'react-dom';
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuClosed: true
    };
  }

  handleMenuToggleOnClick = () => {
    this.setState({ isMenuClosed: !this.state.isMenuClosed });
  }

  
  mobileClick = () => { 
      let links = document.getElementsByClass("nav-links");
      links.style.display = "block"

  }

 render() {
    const isMenuClosed = this.state.isMenuClosed ? 'initial' : 'none';
    

  
  return (
    <nav className="">
        <div className="mobile-logo">Jimmy Oliva</div>
        <div className="mobile-nav">
          <i  
            className="fas fa-bars"
            aria-hidden="true"
            onClick={this.mobileClick}
            // onClick={this.handleMenuToggleOnClick}
          />
        </div>
      <div className="desktop-header fluid-container">
        <div className="row">
        <div className="logo">Jimmy Oliva</div>
        <div className="navigation">
          <ul
            className="nav-links"
            // style={{ display: isMenuClosed }}
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
};
};


export default Header;