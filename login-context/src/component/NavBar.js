import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
// import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import AboutUs from "./AboutUs";
import LoginPage from "./LoginPage";
import logInContext from "./logInContext";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function NavBar() {
  let [logIn, setLogIn] = useState(false);
  //   let value = useContext(logInContext);
  //   let [lokgOut, setLogOut] = useState(true);

  return (
    <div>
      <logInContext.Provider value={{ logInContext: logIn, setLogIn }}>
        <Router>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="/Home">Home</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
                {(function () {
                  if (logIn === true) {
                    return (
                      <div>
                        <Nav.Link href="/LoginPage">Logout</Nav.Link>
                      </div>
                    );
                  } else if (logIn === false) {
                    return <Nav.Link href="/LoginPage">LogIn</Nav.Link>;
                  }
                })()}
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

        <button
          onClick={() => {
            // console.log(value);
          }}
        >
          test
        </button>
      </logInContext.Provider>
    </div>
  );
}

export default NavBar;
