import React from "react";
import { DataContext } from '../componet/Context';
import  {  useContext } from "react";

const Login = () => {
  const user = useContext(DataContext)
  console.log(user);

  return (
    <div className="but">
      <div>
          <input placeholder="usaername"/><br/>
          <input placeholder="password"/><br/>
      
          <button onClick={()=>user.setUser(true)}>Login</button>
         
        </div>
    </div>
  );
};

export default Login;
