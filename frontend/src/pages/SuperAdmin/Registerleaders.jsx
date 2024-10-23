import React, { useState } from 'react'
import basepath from '../../components/url/url'

function Registerleaders() {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [phoneNumber,setPhoneNumber]=useState('')
    const[role,setRole]=useState('')
    const [responseMessage,setResponsemessage]=useState("")
    const handleClick=async(e)=>{
        e.preventDefault()
        const form = {
            firstName,
            lastName,
            role,
            phoneNumber
        }
        try{
         const response = await basepath.post("/leaders/registerleader",form)
            setResponsemessage(response.data.message)
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <>
    <section className="contact pb-lg-0 z-index-1">
				<div className="container">
					<div className="row  d-flex justify-content-center align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="contact-main white-bg p-5">
								<h2 className="title mb-4">
									register<span> Leaders</span>
								</h2>
								<form id="contact-form">
									
							
									<div className="form-group">
										<input
											type="text"
											name="firstName"
											className="form-control form-control-sm"
											placeholder="first name"
											onChange={(e) => setFirstName(e.target.value)}
										/>
									</div>

									<div className="form-group">
										<input
											type="text"
											name="lastName"
											className="form-control form-control-sm"
											placeholder="lastname"
											onChange={(e) => setLastName(e.target.value)}
										/>
									</div>
                                    <div className="form-group">
										<input
											type="text"
											name="phoneNumber"
											className="form-control form-control-sm"
											placeholder="phonenumber"
											onChange={(e) => setPhoneNumber(e.target.value)}
										/>
									</div>
                                    <div className='form-group'>
                                    <select className="form-select form-select-lg " aria-label="Default select example" name='role'
                                    onChange={(e)=>setRole(e.target.value)}
                                    
                                    >
                                    
                                    <option selected>select role</option>
                                    <option value="amir">amir</option>
                                    <option value="viceAmir">viceamir</option>
                                     <option value="secretary">secretary</option>
                                    </select>
                                    </div>
                                    
								

									<button
										onClick={handleClick}
										className="btn btn-border btn-radius"
									>
										register
									</button>

									<p className="text-success mt-2">{responseMessage}</p>
								</form>
							</div>
						</div>
						
					</div>
				</div>
			</section>
    
    
    </>
  )
}

export default Registerleaders