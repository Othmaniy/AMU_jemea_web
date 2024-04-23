import { useEffect, useState } from "react"
import { Authcontext, useAuth } from "../Context/Authcontext"
import getuser from "../Utility/decode";
import { Navigate } from "react-router-dom";



const ProtectedRoute =async ({role,children})=>{

    const  [islogged,setIslogged] = useState(false);
    const [autherized,setAutherized] = useState(false);
    const [ispassed,setIspassed]=useState(false);
    const loggeduser =await getuser();
    console.log("user from porotected component"+loggeduser);
    
    useEffect(()=>{
       //change the conditional statement to handle for the role==0 or for pages that donot ask auhterization 
       if(loggeduser.token){
        setIslogged(true);
        if(role && role.length>0 && role.includes( loggeduser.role)){
                setAutherized(true)
        }
       }
       setIspassed(true)



     },[role])


//i am going numb and my soul is feeling
if(ispassed){
    if(autherized){
         return <Navigate to ="/login"   />
    }
    return <Navigate to ="/unautherized" />
}


return children;

}

  
 

