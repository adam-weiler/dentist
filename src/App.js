import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Procedures from './pages/Procedures';

function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          {/*
            The three different types of whitespace are:
            &nbsp;
            {' '} 
            Import react-add-space and use it there. :(
           */}
          <Link to='/'>Home</Link>   {/* This is like an a href */}
          &nbsp;  {/* Fred prefers this method. */}
          <Link to='/procedures'>Procedures</Link>
          {' '}
          <Link to='/contact'>Contact</Link>
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
