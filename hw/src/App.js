import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { useContext, useState } from "react";
import authContext from "./components/State";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="App">
      <authContext.Provider value={{ authenticated, setAuthenticated }}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/HomePage" component={HomePage} />
            <Route exact path="/AboutUs" component={AboutUs} />
          </Switch>
        </Router>
      </authContext.Provider>
    </div>
  );
}

export default App;
