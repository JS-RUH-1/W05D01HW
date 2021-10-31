import "../App.css";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Context } from "../context";

function Login() {
 //store the input username value 
  const [name, setName] = useState("");
  // get the setUser hock from Context.js
  const { setUser } = useContext(Context);
  // useHistory hock for navigating  without using switch 
  const history = useHistory();

  return (
    <div>
      <Router>
        <h1>Login</h1>
        <br />
        <label>
          UserName:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <br />
        <br />

        <Button  style={{width:300,height:50,fontSize:20}}
        variant="success" 
          onClick={() => {
            //push the path in useHistory to nav to Home Page 
            history.push("/");
            //set the userName to input value 
            setUser(name); 
          }}
         
        >
          Login
        </Button>
      </Router>
    </div>
  );
}

export default Login;
