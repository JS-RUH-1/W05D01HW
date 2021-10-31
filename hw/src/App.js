import "./App.css";
import NavBar from "./components/navBar";
import MyContext from "./context";


function App() {
  return (
    <MyContext>
      <div className="App">
        <NavBar />
      </div>
    </MyContext>
  );
}

export default App;
