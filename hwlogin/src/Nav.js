import React from 'react';
import './index.css';
import { useContext } from 'react';
import {UserContext} from './UserContext';
import {Link} from "react-router-dom";



function Nav() {
     const {authen,setAuthen} = useContext(UserContext);
    return ( 

   <ul>
  <li><a class="active" href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  {authen ? <li><Link onClick={()=>setAuthen(false)} to="/login">Logout</Link></li>:<li><Link to="/login">Login</Link></li>}

</ul>

     );
}

export default Nav;





