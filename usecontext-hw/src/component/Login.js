import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import userStatus from "./userStatus";

export default function Login() {
  let { auth, setAuth } = useContext(userStatus);



  return (
    <>
      <div className="formdiv">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            onClick={(e) => {
              setAuth(true);
              console.log(auth);
              e.preventDefault();
            }}
            variant="primary"
            type="submit"
          >
            <Link className="LinkCss" exact to="/">
              Submit
            </Link>
          </Button>
        </Form>
      </div>
    </>
  );
}
