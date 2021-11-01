import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./AboutUs";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import logInContext from "./logInContext";
import { useContext } from "react/cjs/react.development";

function Home() {
  let value = useContext(logInContext);
  let x = value.logInContext;
  console.log(value.logInContext);
  return (
    <div>
      <h2>test</h2>
    </div>
  );
}

export default Home;
