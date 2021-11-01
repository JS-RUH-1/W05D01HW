import React, { useContext } from "react";
import { DataContext } from "../Context";


const Home = () => {

    const user = useContext(DataContext)
    return ( 
        <div>Welcome <span style={{color: "green"}}>{user.user.email}</span> In Home page</div>
     );
}
 
export default Home;