import React,{useContext} from "react"
import { Context } from "./App"
import './App.css';
import { useHistory } from 'react-router-dom';


function Login(){
    const {value, setValue} = useContext(Context)
    const history = useHistory();
    const handleClick = () => {
      history.push("/home");
      setValue(true);
     }
      




    return (
        <div className = "login">

          <input placeholder="UsaerName"/><br/>
          <br/>
          <input placeholder="Password"/><br/>

          <br/><button className="btn" onClick= {handleClick} >LogIn</button><br/>

          <div>{value}</div>

        </div>
    )
}
export default Login;