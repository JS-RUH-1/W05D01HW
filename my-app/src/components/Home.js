import React,{useContext} from "react"
import { UserContext } from "./UserContext"

export default function Home(){
    const {value, setValue} = useContext(UserContext)
    return (
        <div>
          <h1>{value}</h1>
          
        </div>
    )
}