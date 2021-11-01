import { useState , useContext, useMemo} from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';

export const LoginContext = React.createContext({login:false, setLogin: ()=>{}});
function App() {
  const [login,setLogin] = useState(false);

  return (
    <LoginContext.Provider value={{login,setLogin}}>
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>


    </LoginContext.Provider>
  );
}

export default App;
