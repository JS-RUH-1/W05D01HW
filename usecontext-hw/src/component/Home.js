import React, { useContext } from "react";
import userStatus from "./userStatus";

export default function Home() {
  const status = useContext(userStatus);
  console.log(status.auth);
  return (
    <div>
      {(function () {
        if (status.auth === true) {
          return <h1> Welcome Logged-in user</h1>;
        } else if (status.auth === false) return <h1> Login please!</h1>;
      })()}
    </div>
  );
}
