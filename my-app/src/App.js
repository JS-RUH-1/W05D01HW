import logo from './logo.svg';
import './App.css'
import Navbar from './componant/Navbar';
import Home from './componant/Home';
import AboutUs from './componant/About-us';
import {createContext , useState} from 'react'

export const log =createContext()

function App() {
  const [state,setState] = useState(true)
  return (

    <log.Provider value={state}>
    <div className="App">
    

    

    <Navbar/>
    </div>
    </log.Provider>

    
  );
}export default App;
