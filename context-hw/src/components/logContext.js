import { createContext } from "react";

export const logContext = createContext({
  logged: false,
  setLogged: () => {},
});
