import React, { useEffect, useState } from 'react'
import basepath from '../../../components/url/url'
import { useAuth } from '../../../components/Context/Authcontext'
import { Navigate } from 'react-router-dom';

function EnrollCourse() {
  const [openCourses,setOpenCourses]=useState([])
  const [enrollResponseMessage,setEnrollResponseMessage]=useState("")
  const { currentuser, loading } = useAuth();
	// console.log(user.currentuser.token);
	// const token = user.currentuser.token;
  console.log("enroll");
  console.log(currentuser);
  useEffect(()=>{
    if (loading) return;
    const fetchOpenCourses=async()=>{
      try{
        const response = await basepath.get("/daewaandirshad/getopencourses")
        setOpenCourses(response.data.data)
        console.log(openCourses);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchOpenCourses()
  },[loading])

 
  const handleEnroll=async(course)=>{
    if (!currentuser || !currentuser.token) {
      console.error("Token not found");
      return;
    }
    const requestOptions={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "x-access-token":currentuser.token
      }
    }
    const cId = course.course_id;
    try{
      const response = await fetch (
        `http://localhost:5000/api/daewaandirshad/registerfornewcourse/${cId}`,
        requestOptions)
      ;
      console.log(response);
      const data = await response.json();
  
      console.log(data);
      console.log(data.message);
  
            if (response.ok) {
                setEnrollResponseMessage(data.message);
            } else {
                setEnrollResponseMessage(data.message);
            }
    }
    catch(error){
      console.log(error);
    }
  
          // console.log(enrollResponseMessage);
    // const response = await basepath.post(`/daewaandirshad/registerfornewcourse/${cId}`,requestOptions)
    // console.log(response);
  }
  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while user data is being fetched
  }

  
  return (
    <>
    <section className="grey-bg pattern position-relative">
  <div className="container">
    <h2>{enrollResponseMessage}</h2>
    <div className="row g-4 ">
      {openCourses.map((oc)=>(
         <div key={oc.id} className="col-lg-4 col-md-6 ">
      
         <div className="featured-item ">
           <div className="featured-title text-uppercase text-center">
             <h5>{oc.course_name}</h5>
           </div>
           <div className="featured-desc">
             <h6> <span  style={{fontWeight:"bold"}}>course Id: </span>
             
             <span style={{fontFamily:'sans-serif'}}>{oc.course_unique_id} </span></h6>
             <h6><span style={{fontWeight:"bold"}}>course description: </span>{oc.course_description} <span className='' style={{fontFamily:'sans-serif'}}></span></h6>
             <h6 > <span style={{fontWeight:"bold"}}>Author : </span> <span style={{fontFamily:'sans-serif'}}>{oc.course_writter}</span></h6>
             <h6> <span style={{fontWeight:"bold"}}>ustaz:</span> <span style={{fontFamily:'sans-serif'}}>{oc.ustaz}</span></h6>
           </div>
           {/* <div className='mb-0 pt-3' style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"40px"}}>
             <button className='btn btn-primary  p-2'onClick={()=>{setOpenUpdateCourse(true);setSelectedCourse(course)}}>edit</button>
             <button onClick={()=>handleDeleteClick(course)} className='btn btn-danger p-2'>delete</button>
             
           </div> */}
           
         </div>
        
         <button className="btn btn-danger  p-4 fs-8"  style={{width:"100%",borderRadius:"0",border:"none",color:"white"}} onClick={()=>handleEnroll(oc)}>Enroll</button>
        
         {/* {openUpdateCourse&&selectedCourse&&selectedCourse.course_id==course.course_id && (
          <UpdateCourse 
          setOpenUpdateCourse={setOpenUpdateCourse}
          course={selectedCourse}
          key={course.course_id}
          />
         )} */}
       </div>
      ))}
        
      
     
    </div>
  </div>
</section>
    </>
  )
}

export default EnrollCourse