import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Login from "./component/Login";
import { useContext, useState } from "react";
import userStatus from "./component/userStatus";

function App() {
  let [auth, setAuth] = useState(false);

  return (
    <userStatus.Provider value={{ auth, setAuth }}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </userStatus.Provider>
  );
}

export default App;
