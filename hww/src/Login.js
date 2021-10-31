
import {createContext, useContext, useDebugValue} from 'react';
import React from "react";
import {useState} from "react"
import {Button, Form} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Uaerlog from './Userlog'
import Home from './Home';
import {Route, BrowserRouter as Router, Switch ,Link, useHistory} from "react-router-dom";
import  { userContext } from './Context';


//   ---------------------------------------------------------------
function Login() {
    const history   = useHistory()
    const {setUser,user} = useContext(userContext)
    const[add,setAdd]=useState('')
    return ( 
        <div>
             <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={add} onChange={(e)=> setAdd(e.target.value)} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
       We'll never share your email with anyone else. 
    </Form.Text>
  </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

   <Button variant="primary"  onClick={()=>{setUser(add);history.push("/")}} >
    Submit
   </Button>
 </Form> 
        </div>
     );
}

export default Login