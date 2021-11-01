import React,{useContext} from "react"
import { UserContext } from "./UserContext"


export default function Login(){
    const {value, setValue} = useContext(UserContext)

    return (
        <div>
          <input placeholder="usaername"/><br/>
          <input placeholder="password"/><br/>

          <button onClick={() => setValue('loged')}>Login</button>

          <div>{value}</div>

        </div>
    )
}