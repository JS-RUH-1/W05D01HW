import { useContext } from "react";
import authContext from "./State";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
function NavBar() {
  let x = useContext(authContext);

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/HomePage">Navbar</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/AboutUs">About us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/">Login</Link>
            </Nav.Link>
          </Nav>
          {x.authenticated ? (
            <Navbar.Brand> User is logged in</Navbar.Brand>
          ) : (
            <Navbar.Brand> User is not logged in</Navbar.Brand>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
