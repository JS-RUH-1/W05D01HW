import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import * as Bootstrap from 'react-bootstrap';
import About from './About'
import Login from "./Login"
import Home from "./Home"
import { Context } from "./App"
import { React, useContext } from "react"



function Navbar() {
    const {value, setValue} = useContext(Context)
console.log(value)
    return ( 
        <Router>
        <div>

            <Bootstrap.Navbar bg="dark" variant="dark">
                <Bootstrap.Container>
                    <Bootstrap.Nav className="me-auto">

                        <Bootstrap.Nav.Link ><Link to="/home">Home</Link></Bootstrap.Nav.Link>
        {(function(){

            if (value===true){
                console.log(value)
                return (
                    <Bootstrap.Nav.Link ><Link to="/login">Logout</Link></Bootstrap.Nav.Link>
                )
                

            } else {
                return(
                <Bootstrap.Nav.Link ><Link to="/login">Login</Link></Bootstrap.Nav.Link>
                )
            }

         })()} 
         
                            <Bootstrap.Nav.Link ><Link to="/About">About Us</Link></Bootstrap.Nav.Link>
                        
                        </Bootstrap.Nav>
                    </Bootstrap.Container>
                </Bootstrap.Navbar>

                <Switch>
                 
                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>
                

                </Switch>
            </div>
        </Router> 
    )
}

export default Navbar;