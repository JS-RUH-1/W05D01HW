// import { useContext } from "react";
// import { AppContext } from "../context";

// export default function User({user}) {


//     const {dispatchUserEvent} =useContext(AppContext)

//     const hadleRemoveUser=()=>{
//         dispatchUserEvent('REMOVE_USER',{userId:user.id})
//     }


//     return(
//         <>
//         <div className="User">

// <h3>{user.name}</h3>
// <h4>{user.age}</h4>

// <div>
//     <small></small>
// </div>

// <button onClick={hadleRemoveUser}> Delet user</button>
//         </div>
//         </>
//     )
// }