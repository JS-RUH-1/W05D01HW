import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import MyContext from './Context';

function App() {
  return (
    <MyContext>
    <div className="App">
      <Navbar/>
    </div>
    </MyContext>
  );
}

export default App;