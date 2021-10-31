import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

export default function Navbar() {
    const {setUser, user} = useContext(Context)
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="#">W05D01HW</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav  me-auto">
      <Link to="/" class="nav-link " >Home</Link>
      <Link to="/about" class="nav-link" >About</Link>
    </div>
    <div className="navbar-nav">
        <div class="d-flex">
            {!user ? 
            <Link to="/login" class="nav-link " >Login</Link> :
            <a href="#" class="nav-link " onClick={() => setUser(null)}>Logout</a>
            }
            
        </div>
    </div>
  </div>
</div>
</nav>
}