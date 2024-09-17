import React, { useEffect, useState } from 'react'
import basepath from '../../../components/url/url';
import { Link } from 'react-router-dom';

function AdminSelectCourse() {
    const [openCourses,setOpenCourses]=useState([]);
    useEffect(()=>{
        const fetchOpenCourses = async()=>{
            const response =await basepath.get("/daewaandirshad/getopencourses")
            setOpenCourses(response.data.data)
        }

        fetchOpenCourses()
    },[])
  return (
    <section className="grey-bg pattern position-relative">
    <div className="container">
        <div className="row g-4">
           
            {openCourses.map((course)=>(
               
                    <div className="col-lg-4 col-md-6 " key={course.id}>
                         <Link to={`/daewaandirshad/admin/enrolledusers/${course.course_name}`} style={{color:"inherit"}}>
                         <div className="featured-item ">
									<div className="featured-title text-uppercase text-center">
										<h5>{course.course_name}</h5>
									</div>
									<div className="featured-desc">
										
										<h6>
											<span style={{ fontWeight: "bold" }}>
												course description:{" "}
											</span>
											{course.course_description}{" "}
											<span
												className=""
												style={{ fontFamily: "sans-serif" }}
											></span>
										</h6>
										<h6>
											{" "}
											<span style={{ fontWeight: "bold" }}>Author : </span>{" "}
											<span style={{ fontFamily: "sans-serif" }}>
												{course.course_writter}
											</span>
										</h6>
										
									</div>
									{/* <div className='mb-0 pt-3' style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"40px"}}>
             <button className='btn btn-primary  p-2'onClick={()=>{setOpenUpdateCourse(true);setSelectedCourse(course)}}>edit</button>
             <button onClick={()=>handleDeleteClick(course)} className='btn btn-danger p-2'>delete</button>
             
           </div> */}
								</div>
                    
                    </Link>
                   
                    </div>
                 
                 
            ))}
           
           
        </div>
    </div>
</section>
  )
}

export default AdminSelectCourse