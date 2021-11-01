import { createContext, useState, useContext, useRef } from "react";
import * as Bootstrap from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
const loginContext = createContext(false);

export default function App() {
	const [ isLoggedIn, logMeIn ] = useState(false);
	const inputRef = useRef();

	return (
		<loginContext.Provider value={{isLoggedIn,logMeIn,inputRef}}>
      		<Main />
	  	</loginContext.Provider>
  	);
}

function Main() {
	const {isLoggedIn, logMeIn} = useContext(loginContext);
	return (
		<Router>
			<div>
				<Bootstrap.Navbar bg="light" expand="lg">
					<Bootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Bootstrap.Navbar.Collapse id="basic-navbar-nav">
						<Bootstrap.Nav className="me-auto">
							<LinkContainer to="/">
								<Bootstrap.Nav.Link>Home</Bootstrap.Nav.Link>
							</LinkContainer>
							<LinkContainer to="/about">
								<Bootstrap.Nav.Link>About Us</Bootstrap.Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Bootstrap.Nav.Link>Login</Bootstrap.Nav.Link>
							</LinkContainer>							
						</Bootstrap.Nav>
						{ isLoggedIn ? `Status : Logged In` : "Status : Not Logged In"}
					</Bootstrap.Navbar.Collapse>
				</Bootstrap.Navbar>
				<Switch>
					<Route exact path="/about">
						<Bootstrap.Row className="justify-content-md-center pt-5">
							<Bootstrap.Col md="auto">
								<About />
							</Bootstrap.Col>
						</Bootstrap.Row>
					</Route>
					<Route exact path="/login">
						<Bootstrap.Row className="justify-content-md-center pt-5">
							<Bootstrap.Col md="auto">
								<Login />
							</Bootstrap.Col>
						</Bootstrap.Row>
					</Route>
					<Route exact path="/">
						<Bootstrap.Row className="justify-content-md-center pt-5">
							<Bootstrap.Col md="auto">
								<Home />
							</Bootstrap.Col>
						</Bootstrap.Row>
					</Route>
				</Switch>
			</div>
		</Router>
  );
}

function Home() {
	const {isLoggedIn, logMeIn, inputRef} = useContext(loginContext);
	return (
		<div>
			{ 
				isLoggedIn ? <h1>Welcome {isLoggedIn} !</h1> : <h1>You're not loggedIn</h1>
			}
		</div>
	);
}

function About() {
  return <h1>About</h1>;
}

function Login() {
	const {isLoggedIn, logMeIn, inputRef} = useContext(loginContext);
	return (
		<div>
			{ 
				isLoggedIn ? <LogoutComponent /> : <LoginComponent />

			}
			</div>
  	)
}

function LoginComponent (){
	const {isLoggedIn, logMeIn, inputRef} = useContext(loginContext);

return(	<div>
	<Bootstrap.InputGroup className="mb-3">
	<Bootstrap.InputGroup.Text id="basic-addon1">@</Bootstrap.InputGroup.Text>
	<Bootstrap.FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" ref={inputRef} />
</Bootstrap.InputGroup>
<Bootstrap.Button variant="primary" onClick={(e) => logMeIn(inputRef.current.value)}>
	Login
</Bootstrap.Button>
</div>)

}

function LogoutComponent (){
	const {isLoggedIn, logMeIn, inputRef} = useContext(loginContext);
	return (
		<Bootstrap.Button variant="primary" onClick={(e) => logMeIn(false)}>
			Logout
		</Bootstrap.Button>
	)
}