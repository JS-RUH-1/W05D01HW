import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
// import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import AboutUs from "./AboutUs";
import LoginPage from "./LoginPage";
import logInContext from "./logInContext";
import { useContext } from "react";

function NavBar() {
  let value = useContext(logInContext);
  let x = value.logInContext;

  return (
    <div>
      <Router>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/Home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
              <Nav.Link href="/LoginPage" id="logout">
                Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <header>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>

            <Route path="/AboutUs">
              <AboutUs />
            </Route>

            <Route path="/LoginPage">
              <LoginPage />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default NavBar;
