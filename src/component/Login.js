import React, { useState ,useContext} from "react";

 
 //import App from './App'
import { AppContext } from "../context";
import Home from "./Home";
 

export default function Login(){

const [user , setUser]=useState('');

 return(
        <>

        <h1>Login  Page</h1>

          <form action="Home.js">


           <label>Enter your name : </label>
             <br/>
             {/* <p>Input value :{user}</p> */}

            <input type='text' required onChange={e => {setUser(e.target.value)}} /><br/>

            {/* <label>Enter your password :</label> */}
            <br/>
            {/* <input type ='password' required/> */}
            <br/>

           <input type='submit' />


<AppContext.Provider value={user}>

    <Home user={user}/>

</AppContext.Provider>
        </form>

         
        </>
    )
} 
// function handleSubmi(){

//      return alert('Welcome.')
// }