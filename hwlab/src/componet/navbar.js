import React, { useContext } from "react";
import { Link } from "react-router-dom";


import {DataContext} from './Context'

const Navbar = () => {

    // استخدام الكونتيكست
 const user = useContext(DataContext)

  return (
    <ul>
      <Link to="/about">
        <li>about</li>
      </Link>
      <Link to="/home">
        <li>home</li>
      </Link>

      <Link to="login">
        <li>Login</li>
      </Link>

      
      {

          user.user ? <li>  loged in </li> :<li> pleas log in </li>


      }
    </ul>
  );
};

export default Navbar;
