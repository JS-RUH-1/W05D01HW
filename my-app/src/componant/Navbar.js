import React, { useState } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import AboutUs from './About-us';
import {useContext} from 'react'
import {log} from '../App'

function Navbar() {
	const logT = useContext(log)
    const  [Isloged,setIsloged] = useState(logT)
    console.log(logT)
    return (
		<Router>
            
            {function(){
                if(Isloged === true){
                return (
                    <button onClick={()=>setIsloged(false) } >Log Out</button>
                
                )
            }else{
                return (
                    <button onClick={()=>setIsloged(true) } >Log in</button>
                )
            }}()}
			<Link exact to="/" id='home '>Home</Link>
			<Link to="/About-us">About Us</Link>
			
            

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/About-us">
					<AboutUs />
				</Route>
			</Switch>
		</Router>
	);
}export default Navbar;
