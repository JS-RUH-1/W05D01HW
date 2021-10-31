import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import About from './About'
import Nav from './Nav'

export const logedInContext = React.createContext();

function App() {
  const [logedIn, setLogedIn] = React.useState(false)

  return (
    <Router>
    <div className="App">
       <logedInContext.Provider value={logedIn}>
        <Nav setLogedIn={setLogedIn}/>
        <Switch>
          <div className='switch-div'>
            <Route path="/">
            {logedIn ? <Redirect to="/Home" /> : <Redirect to="/Login" />}
            </Route>
                <Route path="/Login"><Login setLogedIn={setLogedIn}/></Route>
                <Route path="/Home"> <Home/></Route>
                <Route path="/About"><About /></Route>
          </div>
        </Switch>
        </logedInContext.Provider>
    </div>
  </Router>
  );
}

export default App;
