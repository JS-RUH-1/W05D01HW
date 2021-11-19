import './App.css';
import {NavBar} from './componant/nav';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";


function App() {


  return (
    <Router>
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <Switch>
          <Route exact path="/">
          <h1>home</h1>
        </Route>
        <Route exact path="/about-us">
              <h1>We Are Venom</h1>
          </Route>
          
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;

