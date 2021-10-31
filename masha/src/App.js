import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Login from './Login';
import React, {useState,} from 'react'
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import {AuthContext} from './auth-contex';


function App() {
  const [isLog , setIsLog] = useState(false)
  return (
   
  
 <AuthContext.Provider value={{ authValu:[isLog, setIsLog]}}>
    <Router>
    <div className="App">
   <Nav/>
   <Switch>
   <Route path="/home" ><Home/></Route>
   <Route path="/about" component={About}/>
   <Route path="/Login" component={Login}/>
   </Switch>
    </div>
    </Router>
    </AuthContext.Provider>

  );
}

export default App;
