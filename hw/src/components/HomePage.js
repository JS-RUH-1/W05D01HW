import { useContext } from "react";
import authContext from "./State";
import { useHistory } from "react-router-dom";
import "../App.css";

function HomePage() {
  let x = useContext(authContext);
  const history = useHistory();

  console.log(x.authenticated);

  return (
    <div>
      {x.authenticated ? (
        <div className="home">
          <h1>The user had logged in</h1>
          <button
            onClick={() => {
              x.setAuthenticated(false);
              history.push("./");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div> the user Not logged in</div>
      )}
    </div>
  );
}

export default HomePage;
