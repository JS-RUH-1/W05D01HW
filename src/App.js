import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, createContext, useContext } from 'react';

const users = {"saleh": "salehPass", "khalid": "khalidPass"};
const context = createContext();

function Login(props) {
  const[name, setName] = useState("");
  const[pass, setPass] = useState("");
  const user = useContext(context);
  user[2]("")
  return (

          <div className="container mt-5" id="rc">
              <div className="card">
                  <div className="card-body">
                      <h5 className="card-title text-center mb-5">Login</h5>
                      <form action="Home" >
                          <label for="usrName" className="form-label mt-2">Username:</label>
                          <input type="text" name="usrName" className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
                          <label for="usrPass" className="form-label mt-2">Password:</label>
                          <input type="password" name="usrPass" className="form-control" onChange={(e)=>{setPass(e.target.value)}}/>
                          <div className="d-flex justify-content-end">
                              <Link to="/Home" className="btn btn-dark mt-3" 
                              onClick={()=>{props.setUsr(name); props.setPass(pass)}}>Sign in</Link>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
  )
  
}


function Home(){
  let user = useContext(context);
  if(!user[0]){
    return (
      <div className="container mt-5">
          <div className="card border-danger">
            <div className="card-body my-4">
              <div className="card-text text-center">
                You cannot access, please log in first. <Link to="/" className="text-decoration-none">Log in</Link>
              </div>
            </div>
          </div>
        </div>
    )
  }
  else if(users[user[0]]){
    if(users[user[0]] == user[1]){
      user[2](`Welcome ${user[0]}`)
      return (
        <div className="conteiner mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-text">Welcome again, {user[0]}</h5>
            </div>
          </div>
        </div>
      )
    }else{
      return (
        <div className="container mt-5">
          <div className="card border-danger">
            <div className="card-body my-4">
              <div className="card-text text-center">
                Sorry, username or password are not correct. Try again. <Link to="/" className="text-decoration-none">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }else{
    return (
      <div className="container mt-5">
          <div className="card border-danger">
            <div className="card-body my-4">
              <div className="card-text text-center">
                Sorry, username not exist. <Link to="/" className="text-decoration-none">Log in</Link>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


function About(){
  return (
      <div className="container mt-5 pt-5 text-center" id="rc">
          <div className="card shadow" style={{height: "300px",backgroundColor:"#ccddff"}}>
              <div className="card-body mt-5">
                  <h5 className="card-title">About us</h5>
                  <p className="card-text mt-4">
                  Some text here...
                  </p>
              </div>
          </div>
      </div>
  )
}


function App() {
  const[name, setName] = useState("");
  const[pass, setPass] = useState("");
  const[state, setState] = useState("");
  return (
    <context.Provider value={[name, pass, setState]}>
        <Router>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#003399"}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">W05D01HW</Link>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="Home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="About" className="nav-link">About us</Link>
              </li>
            </ul>
            {
              <u className="text-light">{state}</u>
            }
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Login usr={name} setUsr={setName} pass={pass} setPass={setPass}/>}/>
        <Route path="Home" element={<Home />}/>
        <Route path="About" element={<About />}/>
      </Routes>
    </Router>
    </context.Provider>
    
  );
}

export default App;
