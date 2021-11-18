import React from 'react'
import LogedInContext  from '../login-context'
import {useContext} from 'react'

export default function Home() {
    let logedIn = useContext(LogedInContext)
    console.log(logedIn.LogedInContext)
    return (
        <div>
            { logedIn.LogedInContext? <h3>Hellwo</h3> :<h3>You should be singin</h3> }
        </div>
    )
}