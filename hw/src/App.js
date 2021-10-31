import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import About from './About'

export const logedInContext = React.createContext();

function App() {
  const [logedIn, setLogedIn] = React.useState(false)

  return (
    <Router>
    <div className="App">
    <h1 className='big-title'> MY HOMEWORKS AND LABS</h1>
        <ul className='nav'>
            {logedIn? <li onClick={()=> setLogedIn(false)}>Logout</li> : <li><Link to="/">Login</Link></li>}
            {logedIn? <li><Link to="/Home">Home</Link></li> : ''}
            {logedIn? <li><Link to="/About">About</Link></li>: ''}
        </ul>
             <br/><br/> <hr/> 
        <Switch>
          <div className='switch-div'>
            <Route path="/">
            {logedIn ? <Redirect to="/Home" /> : <Redirect to="/Login" />}
            </Route>
            <logedInContext.Provider value={logedIn}>
                <Route path="/Login"><Login setLogedIn={setLogedIn}/></Route>
                <Route path="/Home"> <Home/></Route>
                <Route path="/About"><About /></Route>
            </logedInContext.Provider>
          </div>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
