import React from "react";
import { useContext } from "react";
import { logContext } from "./logContext";

export const Home = () => {
  const log = useContext(logContext);
  return (
    <div className="App-header">
      {log.logged ? "You are logged in" : "You are NOT logged in"}
    </div>
  );
};

