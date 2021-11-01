import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import logInContext from "./logInContext";
import Home from "./Home";
import { useContext } from "react";
import NavBar from "./NavBar";
// import LogOutPage from "./LogOutPage";

function LoginPage() {
  //   let [logIn, setLogIn] = useState(false);
  //   let { logIn, setLogIn } = useContext(logInContext);
  let value = useContext(logInContext);
  console.log(value.logInContext);
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            if (value.logInContext == false) {
              console.log("hh");
              value.setLogIn(true);
            } else if (value.logInContext == true) {
              value.setLogIn(false);
              console.log("hhgg");
            }

            console.log(value.logInContext);
            e.preventDefault();
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
