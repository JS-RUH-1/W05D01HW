import { createContext, useState } from "react";

export const Context = createContext();

export default function MainContext({children}) {
    const [user, setUser] = useState(null);
    return <Context.Provider value={{user, setUser}}>
        {children}
    </Context.Provider>
}