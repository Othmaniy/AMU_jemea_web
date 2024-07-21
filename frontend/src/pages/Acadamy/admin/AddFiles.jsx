import React, { useState } from 'react'
import basepath from '../../../components/url/url';
import "./addfile.css"
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
    <div className='adcontainer'>
      
        <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} />
        <label htmlFor="file">add file</label>
        <input type="text" name='file_description' placeholder='write file description here' onChange={(e)=>setFiledescription(e.target.value)} />
        
        <button onClick={handleClick}>submit</button>
        <p>{responsemessage}</p>
     
    </div>
  )
}

export default AddFiles