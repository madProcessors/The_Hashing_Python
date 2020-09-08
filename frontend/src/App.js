import React from 'react';
import Footer from './Components/Layout/Footer/Footer';
import Navigation from './Components/Layout/Nav/Navigation';
import Login from './Components/Pages/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
