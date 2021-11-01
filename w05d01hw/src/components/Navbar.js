import { useContext } from "react";
import {LoginContext} from "../App";
import * as ReactBootStrap from "react-bootstrap";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




function Navbar() {
    const contextType=useContext(LoginContext);
    return (
      <div id="navbar">
        <ReactBootStrap.Navbar bg="dark" variant="dark" >
          <ReactBootStrap.Container>
            <Link id="nav_home" to="/Home">Home </Link>
            <div id="Nav">
              <Link className="Link" to="/About">About</Link>
              <Link id={contextType.login+'_log'} className="Link" to="/Login">{contextType.login?'Welcome':'Sign in'}</Link>
            </div>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
    );
}

export default Navbar;