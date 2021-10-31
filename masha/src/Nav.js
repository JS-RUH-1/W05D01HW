import "./App.css";
import { AuthContext } from "./auth-contex";
import { Link } from "react-router-dom";
import React, { useContext } from "react";

function Nav() {
  // console.log(value.authValu)
  let value = useContext(AuthContext);
  console.log(value.authValu);
  return (
   <>
        {(function () {
          if (value.authValu[0] === true) {
            console.log("ff");
            return (
              <nav>
                <Link to="/">
                  <h1>Logo</h1>
                </Link>
                <ul className="nav-links">
                  <Link to="/home">
                    <li>Home</li>
                  </Link>
                  <Link to="/about">
                    <li>About</li>
                  </Link>
                  <Link to="/Login">
                    <li>Logout</li>
                  </Link>
                </ul>
              </nav>
            );
          } else if (value.authValu[0] === false) {
            return (
              <nav>
              <Link to="/">
                <h1>Logo</h1>
              </Link>
              <ul className="nav-links">
                <Link to="/home">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
              <Link to="/Login">
                <li>Login</li>
              </Link>
              </ul>
    </nav>
            );
          }
        })()}
    </>  
  );
}
export default Nav;
