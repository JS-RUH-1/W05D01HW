import React, { useState, useContext } from 'react'
import { userContext } from './userContex'
import { useHistory } from 'react-router-dom';
function Login() {

    const isLogedIN = useContext(userContext)
    const navigator = useHistory()
    function handelClick() {
        isLogedIN.userAuth[1](true);
        navigator.push('/home')
    }

    return (
        <>
            <div class="container">

                <form id="login" action="/home">

                    <div className="header">

                        <h3>login</h3>
                    </div>


                    <div className="inputs">

                        <input type="text" placeholder="Username" autofocus />

                        <input type="password" placeholder="Password" />

                        <a id="submit" onClick={handelClick} >Log In</a>

                    </div>

                </form>

            </div>
        </>

    );
}

export default Login;