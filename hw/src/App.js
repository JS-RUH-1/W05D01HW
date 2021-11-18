import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link,Routes ,Navigate} from "react-router-dom"
import Login from './Component/Login'
import Home from './Component/Home'
import About from './Component/About'
import Navbar from './Component/Navbar'
import LogedInContext from './login-context'
import { useState } from 'react'

function App() {
  // const [logedIn, setLogedIn] = useState(false)

  return (
    <div className="App">

<Navbar />


  </div>
  );
}

export default App;