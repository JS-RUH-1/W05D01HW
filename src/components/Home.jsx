import { useContext, useState } from "react"
import { Context } from "../context"

export default function Home() {
    const {user} = useContext(Context);
    return <div>
        
        <div style={{"textAlign": "center"}}>
         {user ? <h1>Hello {user} ..</h1> : <h1>Please log in !!</h1>}
        </div>
       
        
        </div>
}