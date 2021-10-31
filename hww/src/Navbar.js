import React, { useContext } from "react";
import * as ReactBootStrap from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, BrowserRouter as Router, Switch ,Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import  { userContext } from './Context';

// -----------------------------------------------------------------------------------

export default function Navbar(){
    const  {user,setUser} = useContext(userContext)
    return(
      
         <div>
             <Router>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
          <ReactBootStrap.Container>
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link><Link exact to="/">Home</Link></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link><Link  to="/about">About us</Link></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link>{(!user)?<Link  to="/login">Login</Link>:<div><h6>{user}</h6><button onClick={()=>setUser("")}>logout</button></div>}</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
     {/* ---------------------------------------------------------------------- */}

        <Switch>
    <Route exact path="/" ><Home/></Route>
    <Route   path="/about" ><About/></Route>
    <Route   path="/Login" ><Login/></Route>

    </Switch>
        </Router>
      </div> 
        
    );
}