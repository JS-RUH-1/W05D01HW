

// import React from "react";
// import { AppContext } from "../context";
// import { useContext ,useState} from "react";
 

// const addUser=()=>{

//     const {dispatchUserEvent} =useContext(AppContext)
//     const [name,setName] =useState('');
//     const [age,setAge]   =useState('');


//     const handleAddUser=()=>{
//         const user={id:Math.random(),name,age}
//         dispatchUserEvent('ADD_USER',{newUser:user})
//     }

//     return(
//         <>

//         <div>
//             <h3>Add New User</h3>

//             <input type='text' value={name}
//              onChange={e => {setName(e.target.value)}}
//              placeholder="Name"/>

// <br/>
//            <input type='text' value={age}
//              onChange={e => {setAge(e.target.value)}}
//              placeholder="Age"/>

// <br/>
// <button onClick={handleAddUser}>Add User</button>
//         </div>
//         </>
//     )
// }
// export default addUser;