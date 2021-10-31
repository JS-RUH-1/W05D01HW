import { Button } from "bootstrap";
import React from "react";
import { logContext } from "./logContext";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Login = () => {
  const log = useContext(logContext);
  return (
    <div className="App-header">
      {log.logged ? (
        "User Logged in"
      ) : (
        <button
          type="submit"
          class="btn btn-success btn-lg"
          onClick={() => {
            log.setLogged(true);
          }}
        >
          <Link
            style={{ color: "white" }}
            to="./home"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Login
          </Link>
        </button>
      )}
    </div>
  );
};

// <div className="row d-flex justify-content-center ">
// <div className="col-8 ">
//   <form>
//     <div class="form-group">
//       <label for="exampleInputEmail1">Email address</label>
//       <input
//         type="email"
//         class="form-control"
//         id="exampleInputEmail1"
//         aria-describedby="emailHelp"
//         placeholder="Enter email"
//       />
//     </div>
//     <div class="form-group">
//       <label for="exampleInputPassword1">Password</label>
//       <input
//         type="password"
//         class="form-control"
//         id="exampleInputPassword1"
//         placeholder="Password"
//       />
//     </div>
//     <div class="form-check">
//       <input
//         type="checkbox"
//         class="form-check-input"
//         id="exampleCheck1"
//       />
//       <label class="form-check-label" for="exampleCheck1">
//         Check me out
//       </label>
//     </div>
//     <button type="submit" class="btn btn-primary">
//       Submit
//     </button>
//   </form>
// </div>
// </div>
