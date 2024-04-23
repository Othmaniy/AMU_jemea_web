import  { createContext, useState, useEffect, useContext } from "react";
import getuser from "../Utility/decode"
const Authcontext =createContext();
const useAuth =()=>{
  return   useContext(Authcontext)
}
const AuthcontextProvider =({children})=>{
  
    const [islogged,setIslogged]=useState(false);
    const [role,setRole] =useState(null);
    const [currentuser,setCurrentser]=useState(null)
    
   const value = {islogged,role,setIslogged,currentuser}
   useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await getuser();
            console.log("Logged user:", response);
            if (response.token) {
                setIslogged(true);
                setRole(response.role);
            }
            setCurrentser(response);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };

    fetchUser();
}, []);



   return(
   <Authcontext.Provider value={value}>
    {children}
   </Authcontext.Provider>
   )

}

export{Authcontext,useAuth,AuthcontextProvider}