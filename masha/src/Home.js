import './App.css';
import React, { useContext } from "react";
import {AuthContext} from './auth-contex';
function Home() {
  let value = useContext(AuthContext);
  return (
    <div className="pic">
    {(function () {
          if (value.authValu[0] === true) {
            return(
              <>
            <h1>Welcome to our world</h1>
            
            </>
            )
           
            
          }else  {
            return(
            <h1>You must log in first</h1>
            )}
        })()}
    </div>
   
  );
}

export default Home;