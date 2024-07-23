import React, { useState } from 'react'
import basepath from '../../../components/url/url';
import "./addfile.css"
import { FaFileArrowUp } from "react-icons/fa6";
function AddFiles() {
  const [file,setFile]=useState(null);
  const [filedescription,setFiledescription]=useState('')
  const [responsemessage,setResponsemessage]=useState('')
  const upload = async()=>{
    try{
      const formdata = new FormData();
      formdata.append('file',file)
      const response = await basepath.post("/academi/uploadfile",formdata)
      return response.data
    }
    catch(err){
      console.log(err);
    }
  }

  const handleClick = async(e)=>{
    e.preventDefault();
    let fileUrl ="";
    if(file){
      console.log("file selected");
      try{
        fileUrl=await upload();
        const form={fileUrl,filedescription}
        console.log("image uploaded ",fileUrl);
        const response = await basepath.post("/academi/addfile",form)

        console.log(response);
        console.log(response.data);
        console.log(response.data.message);
        setResponsemessage(response.data.message)
        setFile(null)
        setFiledescription('')

      }
      catch(err){
        console.log(err);
        console.log("error uploading image");
      }
      

    }


  }
  return (
   
    <div>
       <section className="contact pb-lg-0 z-index-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="contact-main white-bg p-5">
                  <h2 className="title mb-4">
                   add <span>new file</span>
                  </h2>
                  <form id="contact-form" >
                   
                    <div className="form-group">
                    <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}} />
        <label htmlFor="file">
                  <div className='items'>
                  <FaFileArrowUp style={{ fontSize: '100px', color: 'orange' }} />
                   <span style={{fontSize:"30px", fontWeight:"bold",cursor:"pointer"}} >add file</span>
                  </div>
                  </label>
                      
                    </div>
                    <div className="form-group">
                    <input type="text" name='file_description' 
                    className="form-control" placeholder='write file description here' onChange={(e)=>setFiledescription(e.target.value)} />
                      
                    </div>
                   
                   
        
                    <button onClick={handleClick} className="btn btn-border btn-radius">Add file</button>
                    
                    <p>{responsemessage}</p>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 form-info mt-4">
                <h2 className="title">
                  Get In <span>Touch!</span>
                </h2>
                <p>
                  Contact for any help dolor sit amet, consectetur adipiscing
                  elit. Nulla nec massa enim. Aliquam viverra at est ullamcorper
                  sollicitudin. Proin a leo sit amet nunc malesuada imperdiet
                  pharetra ut eros.
                </p>
                <ul className="contact-info list-unstyled mt-4">
                  <li className="mb-4">
                    <i className="flaticon-paper-plane"></i>
                    <span>Address:</span>
                    <p>423B, Road Wordwide Country, USA</p>
                  </li>
                  <li className="mb-4">
                    <i className="flaticon-phone-call"></i>
                    <span>Phone:</span>
                    <a href="tel:+912345678900">+91-234-567-8900</a>
                  </li>
                  <li>
                    <i className="flaticon-message"></i>
                    <span>Email</span>


                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AddFiles