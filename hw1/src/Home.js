

import React,{useContext} from "react"
import { Context } from "./App"

 function Home(){
    const {value, setValue} = useContext(Context)

        
    console.log(value)

    return (
        <div>

            {(function (){

            if (value === true){
              return (
              <h3>You Are Loged In.</h3>
              )
            }else {
              return (
              <h3>You Are Not Loged In.</h3>
              )
            }   
            })()}

          
        </div>
    )
}
export default Home;
