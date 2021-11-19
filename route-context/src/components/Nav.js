import { userContext } from "./userContex";
import { Link } from "react-router-dom";
import React, { useContext } from "react";


function Nav() {

  const isLogedIN = useContext(userContext)

  function handelClick(){

    isLogedIN.userAuth[1](false); 
     
}
  let value = useContext(userContext);
  console.log(value.userAuth);
  return (
   <>
        {(function () {
          if (value.userAuth[0] === true) {
            console.log("ff");
            return (
              <nav>
                <Link to="/home">
                  <h1>Venom</h1>
                </Link>
                <ul className="nav-links">
                  <Link to="/home">
                    <li>Home</li>
                  </Link>
                  <Link to="/about">
                    <li>About Us</li>
                  </Link>
                  <Link to="/Login">
                    <li onClick={handelClick}>Logout</li>
                  </Link>
                </ul>
              </nav>
            );
          } else if (value.userAuth[0] === false) {
            return (
              <nav>
              <Link to="/home">
                <h1>Venom</h1>
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
