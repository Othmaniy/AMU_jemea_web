// import { createContext, useEffect, useState } from "react";
// // import axios from "axios"
// const AuthContext = createContext();
// const AuthContextProvider =({children})=>{
//     const [User,setUser] = useState(null)
//     // const login =async(form)=>{
        
//     //     const response =await axios.post("http://localhost:4000/api/auth/login",form,{
//     //         withCredentials:true,
//     //     })
//     // setCurrentUser(response.data)
//         setUser({
//             id:2,
//             name:"kebebe",
//             profilepic:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
//             role:"admin"
//         })
//     // }
//     useEffect(()=>{
//         localStorage.setItem("user",JSON.stringify(User))
//     },[])
// return(
//     <AuthContext.Provider value ={{User}} >
//         {children}
//     </AuthContext.Provider>
// )

// }

// export {AuthContext,AuthContextProvider}