import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Login from './components/Login';
import React, {useState,} from 'react'
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import {userContext} from './components/userContex';


function App() {
  const [isLog , setIsLog] = useState(false)
  return (
 <userContext.Provider value={{ userAuth:[isLog, setIsLog]}}>
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
    </userContext.Provider>

  );
}

export default App;
