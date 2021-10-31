import "../App.css";
import { useContext, useState } from "react";
import authContext from "./State";
import { Link } from "react-router-dom";
function Login() {
  let { authenticated, setAuthenticated } = useContext(authContext);
  console.log(authenticated);

  //   let [loginStatus, setLoginStatus] = useState(x);

  return (
    <div className="login">
      <button
        onClick={() => {
          setAuthenticated(true);
        }}
      >
        <Link to="/HomePage">Sign in</Link>
      </button>
    </div>
  );
}

export default Login;
