import { createContext, useState } from "react";
// Create the context 
export const Context = createContext();

//This function will be in App.js to contain all children 
//Note: children is refrence for all component that will be passed in this Context
function MyContext({children}) {
    //Store the user input from Login.js 
    const [user, setUser] = useState("")
    return (
    <Context.Provider value={{user, setUser}}>
        {children}
    </Context.Provider>);
}
export default MyContext;