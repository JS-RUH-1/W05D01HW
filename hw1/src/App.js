import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import { useState } from 'react';
import {LoginContext} from './ContextLogin'

function App() {
const [user ,setUser]= useState(false);
  return (
    <LoginContext.Provider value={{user,setUser}}>
   <div className="App">
     <NavBar/>
   </div>
   </LoginContext.Provider>
  )
}

export default App;
