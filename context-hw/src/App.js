import React, { useContext } from 'react'
import NavBar from './components/navBar';
import Login from './components/login';
import {ContextFunc, DataContext} from './Context';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/about';
import Home from './components/home';




function App() {

  const user = useContext(DataContext)

  return (
    <div className="container">
    
      
      

      <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            {user.user.email ? <Home /> : <Login />}
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

function AppStore() {
  return (
    <ContextFunc>
      <App />
    </ContextFunc>
  )
}

export default AppStore;
