import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Procedures from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">

        <nav>

          
        </nav>

        <Switch>
        {/* <Route exact path='/' component={Home} /> */}
          <Route path='/procedures' component={Procedures} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
  {/* 
          <Home />
          <Contact/>
          <Procedures/> */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
