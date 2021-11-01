import React from "react";
import { BrowserRouter as Router, Route, Switch , Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import { useContext , useState } from 'react';
import {LoginContext} from './ContextLogin'
import './App.css';

function Navbar(){
    const {user ,setUser } = useContext(LoginContext)
    
    return(
    <Router>
    <div >
      <ul  >
      <li style={{ listStyleType: "none" }}><Link to="/Home">Home</Link></li>
      <li style={{ listStyleType: "none" }}><Link to="/About">About</Link></li>
      {user ? <li style={{ listStyleType: "none" }}><Link onClick={()=>setUser(false)} to="/Login">Logout</Link></li>:<li style={{ listStyleType: "none" }}><Link to="/Login">Login</Link></li>}

        
      </ul>
      <switch>
      <Route exact path ="/Login"><Login/> </Route>
        <Route path ="/Home"><Home/> </Route>
        <Route path ="/About"><About/> </Route>
        
      </switch>
    </div>

  </Router>
  
);
}
export default Navbar;