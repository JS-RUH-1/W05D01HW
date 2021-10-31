import "../App.css";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Button } from "react-bootstrap";
import About from "./About";
import Home from "./Home";
import Login from "./login";
import { Context } from "../context";

function NavBar() {
  // To get the user name fom Context.js 
  const { user, setUser } = useContext(Context);

  return (
    <Router>
      <nav>
        <li>
          <NavLink
            to="/"
            className="mylink"
            exact={true}
            activeClassName="selected"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="mylink" activeClassName="selected">
            About Us
          </NavLink>
        </li>

        <li>
          {
            // if the user input field in the login page it will contiinue to showing Login Button
            !user ? (
              <NavLink
                to="/login"
                className="mylink"
                activeClassName="selected"
              >
                Login
              </NavLink>
            ) : (
              // Else it will show the user name with welcome message + Logout Button
              <div>
                <span style={{marginLeft:20}}>Welcome {user}</span>
                <Button variant="danger"  onClick={() => setUser(null)}>Logout </Button>
              </div>
            )
          }
        </li>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
