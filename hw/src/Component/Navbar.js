import React from 'react'
import  LogedInContext  from '../login-context'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link,Routes ,Navigate} from "react-router-dom"
import Login from './Login'
import Home from './Home'
import About from './About'
import {useContext} from 'react'

export default function Nav() {
    let logedIn = useContext(LogedInContext)
    const [logedInState, setLogedIn] = useState(false)
    console.log(logedIn.loginValue)
    return (
        <LogedInContext.Provider value={{LogedInContext:logedInState,setLogedIn}}>
        <Router>


        <div>
            <h1 className='big-title'>hw</h1>
        <ul className='nav'>
            {logedIn.loginValue?  <li onClick={()=> setLogedIn(false)}>Logout</li> :<li><Link to="/Login">Login</Link></li>}
             <li><Link to="/Home">Home</Link></li> 
             <li><Link to="/About">About</Link></li>
        </ul>
             <br/><br/> <hr/> 
        </div>
        <Routes>
          {/* <div className='switch-div'> */}
            <Route path="/" element={<Home/>}></Route>
           
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Home" element={<Home/>}> </Route>
                <Route path="/About" element={<About/>}></Route>
          {/* </div> */}
        </Routes>
        </Router>
                  </LogedInContext.Provider>

    )
}