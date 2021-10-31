import React, { useContext } from "react";
import { AppContext } from "../context";
import{Route,BrowserRouter as Router ,Switch,Link} from 'react-router-dom'

 
import About from './About'
import Login from './Login'

export default function Home(){

    const us= useContext(AppContext)

    return(


        <>

<Router>
<nav>
<ul>
 <li><Link to ='/' exact> Home</Link></li>
 <li><Link to ='/About'>About</Link></li>
 <li><Link to ='/Login' >Login </Link></li>

<li>{`${us}`}</li>

</ul>

</nav>
<Switch>

<Route path ='/' exact component={Home}/>
<Route path ='/About' component={About}/>
<Route path ='/Login' component={Login}/>

    </Switch>


</Router>
        {/* <h1>home Page</h1> */}
        {/* <h1>{`${us}`}</h1> */}
        

        </>
    )
} 