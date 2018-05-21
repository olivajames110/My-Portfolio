import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/header';
import Body from './components/Body/body';
import AboutSection from './components/AboutSection/aboutSection';
import './App.css'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <AboutSection />
      </div>
    );
  }
}

export default App;
