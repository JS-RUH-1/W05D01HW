import './App.css';
import React, {useState, useContext} from 'react'
import {AuthContext} from './auth-contex'
import { useHistory } from 'react-router-dom';
function Login() {
    const history = useHistory();
    const ctx = useContext(AuthContext)
    console.log(ctx.authValu[0])
    console.log(ctx.authValu[1])

function handelClick(){

    ctx.authValu[1](true); 
     
    history.push("/Home") 
}
  return (
    <div>
 
     
     <div class="container">

    <form id="signup">

        <div className="header">
        
            <h3>Sign Up</h3>
            
            <p>You want to fill out this form</p>
            
        </div>
        
        <div className="sep"></div>

        <div className="inputs">
        
            <input type="email" placeholder="e-mail" autofocus />
        
            <input type="password" placeholder="Password" />
            
            <div className="checkboxy">
                <input name="cecky" id="checky" value="1" type="checkbox" /><label class="terms">I accept the terms of use</label>
            </div>
            
            <a id="submit"  onClick={handelClick} >Log In</a>
        
        </div>
      
     {console.log(ctx.authValu[0])}
    </form>

</div>
    </div>
   
  );
}

export default Login;