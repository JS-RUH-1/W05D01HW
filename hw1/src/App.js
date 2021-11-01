import './App.css';
import Navbar from './Navbar.js';
import { createContext, useState} from "react";

export const Context = createContext();

function App() {
  const [value , setValue] = useState(false)

  return (
    <Context.Provider value={{value , setValue}}>
    <div className="App">

    <Navbar/>
   
    </div>
    </Context.Provider>
  );
}

export default App;

