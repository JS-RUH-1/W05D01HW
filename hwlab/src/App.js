import React from "react";
import Navbar from "./componet/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./componet/about";
import Home from "./componet/home";
import Login from "./componet/login";
import { DataContext } from "./componet/Context";
import  {  useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  return (
    <DataContext.Provider value={{ user, setUser }}>
      <Router>
        {/* استدعاء  */}
        <Navbar />
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
      </DataContext.Provider>
  );
}


export default App;

