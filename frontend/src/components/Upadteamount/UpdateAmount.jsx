import React, { useState } from 'react'
import basepath from '../url/url'

function UpdateAmount({setOpenUpdateAmount,member}) {
    const [amount,setAmount]=useState("")
    const [responsemessage,setResponseMessage]=useState("")
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try{
            const response = await basepath.patch(`/umumaebed/updateamount/${member.id}`,{amount:amount})
            setResponseMessage(response.data.message)
        }
        catch(err){
            console.log((err));
        }
    }
  return (
    <div className="role-selector grey-bg">
				<div className="d-flex justify-content-between mb-3">
					<div>Update Amount</div>
					<div>
						<button
							className="btn btn-danger"
							onClick={() => setOpenUpdateAmount(false)}
						>
							X
						</button>
					</div>
				</div>
				<form id="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
                    <input
											id="form_phone"
											name="course_writter"
											className="form-control"
											placeholder="Amount"
											required="required"
											onChange={(e) => setAmount(e.target.value)}
										/>
					</div>
					<div className="d-flex justify-content-center">
						<button className="btn btn-danger " type="submit">
							Update
						</button>
					</div>
					<p className="text-danger text-center fs-5">{responsemessage}</p>
				</form>
			</div>
  )
}

export default UpdateAmount