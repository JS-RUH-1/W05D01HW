import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import MainContext from './context';
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
        <Router>

        <Navbar />
        <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        </Switch>

    </Router>

    </MainContext>
  </React.StrictMode>,
  document.getElementById('root')
);
