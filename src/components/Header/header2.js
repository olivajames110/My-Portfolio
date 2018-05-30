import React from 'react';
import ReactDOM from 'react-dom';
import './header2.css'

class Header2 extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
  isTop: true,
  isMobile: false, 
  };
 }
componentDidMount() {
  document.addEventListener('scroll', () => {
    const isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
        this.setState({ isTop })
    }
  });
}

determineMobile() {

}

mobileClick = () => {
 this.setState({
  isMobile: !this.state.isMobile
 })
}



 render() {
  return (
    <nav className="nav" style={{backgroundColor: this.state.isTop ? "rgba(255, 255, 255, 0)" : "#3b97a3f5"}}>
     <div className="mobile-container">
      <div className="mobile-logo">Jimmy Oliva
      </div>
      <div className="mobile-toggle">
        <i  
         className="fas fa-bars"
         aria-hidden="true"
         onClick={this.mobileClick}
         // onClick={this.handleMenuToggleOnClick}
        />
      </div>
     </div>
     <div className="desktop-logo">Jimmy Oliva</div>
     <div className="navigation-container">
      <ul id={this.state.isMobile? "navigation-tabs-mobile" : "navigation-tabs-desktop"}  >
       <li><a href="#"><span>Home</span></a></li>
       <li><a href="#"><span>About</span></a></li>
       <li><a href="#"><span>Portfolio & Projects</span></a></li>
       <li><a href="#"><span>Contact</span></a></li>
      </ul>
     </div>
    </nav>
  );
};
};


export default Header2;