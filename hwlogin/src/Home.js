import "./index.css";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Home() {
  const { authen, setAuthen } = useContext(UserContext);

  return (
    <div>
      {(function() {
        if (authen === true) {
          return <h2> Logged in </h2>;
        } else if (authen === false) {
          return <h2>Login required</h2>;
        }
      })()}
    </div>
  );
}

export default Home;
