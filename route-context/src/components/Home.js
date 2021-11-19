import React, { useContext } from "react";
import {userContext} from './userContex';
function Home() {
  let value = useContext(userContext);
  return (
    <div className="pic">
    {(function () {
          if (value.userAuth[0] === true) {
            return(
              <>
            <h1>Welcome</h1>
            
            </>
            )
           
            
          }else  {
            return(
            <h1>Who Are You</h1>
            )}
        })()}
    </div>
   
  );
}

export default Home;