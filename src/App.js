import React from 'react';
import ReactDOM from 'react-dom';
import Header2 from './components/Header/header2';
import Body2 from './components/Body/body2';
import AboutSection from './components/AboutSection/aboutSection';
import MyWork from './components/My Work/myWork'
import SkillsExp from './components/SkillsExp/skillsExp'
import Footer from './components/Footer/footer'
import './App.css';
import './mediaQueries.css';
import './fonts.css'
import './images.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header2 />
        <Body2 />
        <AboutSection />
        <SkillsExp />
        <MyWork />
        <Footer />
      </div>
    );
  }
}

export default App;
