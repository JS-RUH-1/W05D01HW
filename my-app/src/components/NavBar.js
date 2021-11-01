import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Aboutus from './Aboutus'
import Login from "./Login"
import Home from "./Home"
import { UserContext } from "./UserContext"
import React,{ useState } from "react"


// import { useEffect, useState } from 'react';


function NavBar() {
const [value , setValue] = useState('hello from context')

    return (

        <Router>
            <div>

                <Navbar bg="light" variant="light">
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                            <Nav.Link ><Link to="/aboutus">Aboutus</Link></Nav.Link>
                            <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                        

                        </Nav>
                    </Container>
                </Navbar>

                <Switch>
                <UserContext.Provider value={{value , setValue}}>
                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/aboutus">
                        <Aboutus />
                    </Route>
                    </UserContext.Provider>

                </Switch>
            </div>
        </Router>
    )
}

export default NavBar