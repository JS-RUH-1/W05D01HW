import "./App.css";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import { logContext } from "./components/logContext";
import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(false);
  return (
    <logContext.Provider value={{ logged, setLogged }}>
      <Router>
        <div className="App">
          <Navbar></Navbar>

          <div>
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </logContext.Provider>
  );
}

export default App;
