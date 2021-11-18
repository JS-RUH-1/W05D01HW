// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
// import Login from './Component/Login'
// import Home from './Component/Home'
// import About from './Component/About'
// import Navbar from './Component/Navbar'

// export const logedInContext = React.createContext();

// function App() {
//   const [logedIn, setLogedIn] = React.useState(false)

//   return (
//     <Router>
//     <div className="App">
//        <logedInContext.Provider value={logedIn}>
//         <Navbar setLogedIn={setLogedIn}/>
//         <Switch>
//           <div className='switch-div'>
//             <Route path="/">
//             {logedIn ? <Redirect to="/Home" /> : <Redirect to="/Login" />}
//             </Route>
//                 <Route path="/Login"><Login setLogedIn={setLogedIn}/></Route>
//                 <Route path="/Home"> <Home/></Route>
//                 <Route path="/About"><About/></Route>
//           </div>
//         </Switch>
//         </logedInContext.Provider>
//     </div>
//   </Router>
//   );
// }

// export default App;