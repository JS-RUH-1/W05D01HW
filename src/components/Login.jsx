import { useContext, useState } from "react";
import { Context } from "../context";
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const { setUser, user } = useContext(Context);
    const [ nameInput, setNameInput ] = useState("");

  const login = () => {
      
      setUser(nameInput);
      
  };

  if(user) history.push("/");
  return (
    <div className="container">
      <div class="mb-3 mt-5">
        <label for="name" class="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          class="form-control"
        />
      </div>

      <button class="btn btn-primary" onClick={() => login()}>
        Login
      </button>
    </div>
  );
}
