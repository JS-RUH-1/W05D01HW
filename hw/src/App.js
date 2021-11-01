import './App.css';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  incCounter,
  decCounter,
  resetCounter,
} from "./reducers/counter/counter";


function App() {

  const state = useSelector((store) => {
    return {
      counter: store.counter.counter,
    };
  });



  const dispatch = useDispatch();

  const inc = () => {
    dispatch(incCounter(1));
  };
  const dec = () => {
    dispatch(decCounter(1));
  };
  const reset = () => {
    dispatch(resetCounter());
  };


  return (
    <div className="App">
       <div className="counter">
        <h2>{state.counter}</h2>
        <button onClick={inc}>Increase 1</button>
        <button onClick={dec}>Decrease 1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;




















// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
// import Login from './Login'
// import Home from './Home'
// import About from './About'
// import Nav from './Nav'
// export const logedInContext = React.createContext();

// function App() {
//   const [logedIn, setLogedIn] = React.useState(false)

//   return (
//   <Router>
//     <div className="App">
//        <logedInContext.Provider value={logedIn}>
//             <Nav setLogedIn={setLogedIn}/>
//             <Switch>
//               <div className='switch-div'>
//                     <Route path="/">{logedIn ? <Redirect to="/Home" /> : <Redirect to="/Login" />}</Route>
//                     <Route path="/Login"><Login setLogedIn={setLogedIn}/></Route>
//                     <Route path="/Home"> <Home/></Route>
//                     <Route path="/About"><About /></Route>
//               </div>
//             </Switch>
//         </logedInContext.Provider>
//     </div>
//   </Router>
//   );
// }
