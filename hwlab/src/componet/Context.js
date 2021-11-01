import  { createContext } from "react";

// استدعاء الكونتيكست
export const DataContext = createContext();

// // امرر الملفات اللي ابيها تستخدم اليوز
// export function Contextfun({ Children }) {
//   const [user, setUser] = useState({});

//   return (
//     // عشان اخليها عامه تستخدم باي مكان
//     // usestate اي فايل يستدعيه  يقدر ياخذ ويعدل مناسبة لليوزر
//     <DataContext.Provider value={{ user, setUser }}>
//       {/* اي بيانات احطها هنا بتوصل للcontext */}

//       {Children}
//     </DataContext.Provider>
//   );
// }
