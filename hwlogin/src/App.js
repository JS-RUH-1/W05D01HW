import "./App.css";
import  { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { UserContext } from "./UserContext";

function App() {
  const [authen, setAuthen] = useState(false);
  return (
    <UserContext.Provider value={{ authen, setAuthen }}>
      <Router>
        <div className="App">
          <Nav />
          <switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
