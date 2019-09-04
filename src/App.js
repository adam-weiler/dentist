import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Procedures from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Contact/>
      <Procedures/>
    </div>
  );
}

export default App;
