import React, {createContext, useState} from "react";
export const DataContext = createContext()

export function ContextFunc({children}) {

    const [user, setUser] = useState({})

    return (
        <DataContext.Provider value={{user, setUser}}>
            {children}
        </DataContext.Provider>
    )
}

// export ContextFunc;