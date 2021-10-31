import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import userStatus from "./userStatus";
import "../App.css";

export default function NavBar() {
  const status = useContext(userStatus);
  console.log(status.auth);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="LinkCss" exact to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS522cvfykAGpHa9VldhoyaVHuQY6PtojUdnw&usqp=CAU"
                alt="logo"
                height="40px"
                width="40px"
              />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="LinkCss" exact to="/"></Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="LinkCss" to="/AboutUs">
                About Us
              </Link>
            </Nav.Link>
            {(function () {
              if (status.auth === true) {
                return (
                  <Nav.Link>
                    <Link
                      onClick={() => {
                        status.setAuth(false);
                      }}
                      className="LinkCss"
                      to="/Login"
                    >
                      Logout
                    </Link>
                  </Nav.Link>
                );
              } else if (status.auth === false)
                return (
                  <Nav.Link>
                    <Link className="LinkCss" to="/Login">
                      login
                    </Link>
                  </Nav.Link>
                );
            })()}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
