import React from "react";
import { useContext , useState} from "react";
import { LoginContext } from "../App";

function Login() {

    const log = useContext(LoginContext);
    let changeViewa=()=>{<li><button onClick={()=>(log.setLogin(!log.login))}>{log.login?'Sign out':'Log in'}</button></li>}

    
    
    return ( 
        <div>
        <ul>
        {changeViewa}
        </ul>
        <button onClick={()=>(log.setLogin(!log.login))}>{log.login?'Sign out':'Log in'}</button>
        </div>
     );
}

export default Login;