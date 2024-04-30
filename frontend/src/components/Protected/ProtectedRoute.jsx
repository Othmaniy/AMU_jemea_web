import { useEffect, useState } from "react"
import { Authcontext, useAuth } from "../Context/Authcontext"
import getuser from "../Utility/decode";
import { Navigate } from "react-router-dom";



const ProtectedRoute = ({role,children})=>{

    const  [islogged,setIslogged] = useState(false);
    const [autherized,setAutherized] = useState(false);
    const [ispassed,setIspassed]=useState(false);
    // const loggeduser =await getuser();

    
    useEffect(()=>{
       //change the conditional statement to handle for the role==0 or for pages that donot ask auhterization 
       const fetchuser =async()=>{
        try{
            const loggeduser =await getuser();
            console.log("user from porotected component"+loggeduser);
            if(loggeduser.token){
                setIslogged(true);
                if(role && role.length>0 && role.includes( loggeduser.role)){
                        setAutherized(true)
                }
               }
               setIspassed(true)
        }
     catch(error){
        console.log("errrr in the protected route"+error);
     }

       }
      
   fetchuser();


     },[role])


//i am going numb and my soul is loosing feeling
if(ispassed){
    if(!islogged){
         return <Navigate to ="/login"   />
    }
    if(!autherized){
        return <Navigate to ="/unautherized" />
    }
    
}


return children;

}

  export default ProtectedRoute
//i am going numb and my soul us loosing feeling

//
