import React, { useEffect, useState } from 'react'
import basepath from '../../../components/url/url'
import { useAuth } from '../../../components/Context/Authcontext'
import { Navigate } from 'react-router-dom';

function EnrollCourse() {
  const [openCourses,setOpenCourses]=useState([])
  const user = useAuth();
	// console.log(user.currentuser.token);
	const token = user.currentuser.token;

  

  useEffect(()=>{
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
  },[])
  const requestOptions={
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "x-access-token": token
    }
  }
  const handleEnroll=async(course)=>{
    const cId = course.course_id;
    const response = await basepath.post(`/daewaandirshad/registerfornewcourse/${cId}`,requestOptions)
    console.log(response);
  }

  
  return (
    <>
    <section className="grey-bg pattern position-relative">
  <div className="container">
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