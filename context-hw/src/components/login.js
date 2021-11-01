import React, { useContext, useState } from "react";
import { DataContext } from "../Context";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const user = useContext(DataContext)

    const handleLogin = (e) => {
        e.preventDefault()
        
        
        if(true) {
            const token = 'abc'
            localStorage.setItem("token", token)
            localStorage.setItem("email", email)
            user.setUser({token, email})
        } else {
            alert("wrong info")
        }
    }

    return (
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    );
}
 
export default Login;