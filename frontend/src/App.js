import React from 'react';
import Footer from './Components/Layout/Footer/Footer';
import Navigation from './Components/Layout/Nav/Navigation';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
