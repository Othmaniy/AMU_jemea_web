import React, { useState } from 'react'
import basepath from '../url/url'

function UpdateLeader({setOpenUpdateLeader,leader}) {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [phoneNumber,setPhoneNumber]=useState('')
    const[role,setRole]=useState('')
  const [message,setMessage]=useState('')
    const handleSubmit = async (e) => {
		e.preventDefault();
        const formdata={firstName,lastName,phoneNumber,role}
		try {
			const response = await basepath.patch(
				`/leaders/updateleader/${leader.id}`,
				formdata,
			);
			setMessage(response.data.message);
		} catch (err) {
			console.log(err);
		}
	};
  return (
    <>
    <div className="updateBook col-lg-6 col-md-12 flex align-items-center mx-auto">
        <div className="contact-main white-bg p-5  ">
            <div className="d-flex justify-content-between">
                <h2 className="title mb-4">
                    update <span>leader </span>
                </h2>
                <button
                    onClick={() => setOpenUpdateLeader(false)}
                    className="updateButton btn btn-outline-danger px-4  "
                >
                    X
                </button>
            </div>

            <h6 className="text-black">
                please fill the fields only you want to update
            </h6>
            <form id="update-form" onSubmit={handleSubmit}>
                <div className="messages"></div>
                <div className="form-group">
                    <input
                        id="book_name"
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder={leader.first_name}
                        data-error="Username is required."
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                    <input
                        id="Author"
                        name="lastName"
                        className="form-control"
                        placeholder={leader.last_name}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                    <input
                        id="category"
                        name="role"
                        className="form-control"
                        placeholder={leader.role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                    <input
                        id="category"
                        name="phoneNumber"
                        className="form-control"
                        placeholder={leader.phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                </div>

                <button type="submit" className="btn btn-border btn-radius">
                    <span>update</span>
                </button>
                <p className="mt-3" style={{ color: "red" }}>
                    {message}
                </p>
            </form>
        </div>
    </div>
</>
  )
}

export default UpdateLeader