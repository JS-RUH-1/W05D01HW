import App from './App'
import React from 'react';
import { useContext } from 'react';
import { LoginContext} from './ContextLogin'

function Home (){
    const {user ,setUser } = useContext(LoginContext)
    return(
<div>
    {(function(){
        
       if (user === true){
          return <h3> Logged in</h3>

       } else if (user ===false){
           return <h3> Not logged in  </h3>

       }
    })()}
</div>
    );
}
export default Home;