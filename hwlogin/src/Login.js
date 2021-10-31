import "./index.css";
import { useContext} from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function Login() {
  const { authen, setAuthen } = useContext(UserContext);
  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <div className="imgcontainer">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/avatar+circle+male+profile+user+icon-1320196710301016992.png"
            className="avatar"
            alt=""
          />
        </div>

        <div className="container">
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button
            type="submit"
            onClick={(e) => {
              setAuthen(true);
              e.preventDefault();
            }}
          >
            <Link exact to="/">
              Login
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
