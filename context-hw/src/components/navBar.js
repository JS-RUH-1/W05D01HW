import React, { useContext } from "react";
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'

const NavBar = () => {

    const user = useContext(DataContext)


    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        user.setUser({})
    }
    return (
      <nav className="navbar navbar-light bg-light mb-2">
        <div className="container-fluid">
          <Link to="/about">
            <li className="navbar-brand">About</li>
          </Link>
          <Link to="/home">
            <li className="navbar-brand">Home</li>
          </Link>
          <Link to="/">
            <li className="navbar-brand">Login</li>
          </Link>
          

          <div>
            {user.user.email ? (
                <div>
                    {user.user.email} 
                    {' '}
                    <button className="btn btn-danger btn-sm" onClick={logOut}>LogOut</button>
                </div>
            ) : 'You need to Login'}
          </div>
        </div>
      </nav>
    );
}
 
export default NavBar