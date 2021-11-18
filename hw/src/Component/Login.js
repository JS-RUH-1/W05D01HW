import LogedInContext from '../login-context'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import {useContext} from 'react'

export default function Login() {
    // element.preventDefault();
    // props.setLogedIn(true)
  
    const [logedInState, setLogedIn] = useState()
    let logedIn = useContext(LogedInContext)
    console.log(logedIn.LogedInContext)
    let navigate=useNavigate()
    function TestLogin(e){
        e.preventDefault()
        logedIn.setLogedIn(true)
        navigate('/Home')
    }
  return (
    <div>


        <form>  
            <div className="container">   
                <label>Username : </label>   
                <input type="text" placeholder="Enter Username" name="username" required/>
                <label>Password : </label>   
                <input type="password" placeholder="Enter Password" name="password" required/>
                <button type="submit" onClick={(e)=>{TestLogin(e)}} > Login</button>   
            
                Forgot <a href="#"> password? </a>   
            </div>   
        </form>   
  
    </div>
  )
   
  }