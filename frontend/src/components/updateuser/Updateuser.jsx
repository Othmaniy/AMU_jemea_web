import React, { useState } from "react";
import basepath from "../url/url"
function Updateuser({setOpenUpdateUser,user}) {
	const [form,setForm]=useState({})
	const [responseMessage,setResponseMessage]=useState("")
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await basepath.patch(
				`/auth/updateuser/${user.id}`,
				form,
			);
			setResponseMessage(response.data.message);
		} catch (err) {
			console.log(err);
		}
	};
	return <>
	<div className="updateBook col-lg-6 col-md-12 flex align-items-center mx-auto">
        <div className="contact-main white-bg p-5  ">
            <div className="d-flex justify-content-between">
                <h2 className="title mb-4">
                    update <span>user </span>
                </h2>
                <button
                    onClick={() => setOpenUpdateUser(false)}
                    className="updateButton btn btn-outline-danger px-4  "
                >
                    X
                </button>
            </div>

            <h6 className="text-black">
                please fill the fields only you want to update
            </h6>
            <form id="update-form" onSubmit={handleSubmit} >
                <div className="messages"></div>
                <div className="form-group">
                    <input
                        id="book_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={user.name}
                        data-error="Username is required."
                        onChange={handleChange}
                    />
                    <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                    <input
                        id="Author"
                        name="lastname"
                        className="form-control"
                        placeholder={user.lastname}
						onChange={handleChange}
                    />
                    <div className="help-block with-errors"></div>
                </div>
				<div className="form-group">
                    <input
                        id="Author"
                        name="phoneNumber"
                        className="form-control"
                        placeholder={user.phone_number}
						onChange={handleChange}
                    />
                    <div className="help-block with-errors"></div>
                </div>
				<div className="form-group">
                    <input
                        name="batch"
                        className="form-control"
                        placeholder={user.batch}
						onChange={handleChange}
                    />
                    <div className="help-block with-errors"></div>
                </div>
				<div className="form-group">
                    <input
                        name="department"
                        className="form-control"
                        placeholder={user.department}
						onChange={handleChange}
                    />
                    <div className="help-block with-errors"></div>
                </div>
				<div className="form-group">
                    <input
                        id="Author"
                        name="blockNumber"
                        className="form-control"
                        placeholder={user.block_number}
                        onChange={handleChange}
                    />
                    <div className="help-block with-errors"></div>
                </div>
				<div className="form-group">
                    <input
                        id="Author"
                        name="dormNumber"
                        className="form-control"
                        placeholder={user.dorm_number}
                       onChange={handleChange}
                    />
                    <div className="help-block with-errors"></div>
                </div>

                <button type="submit" className="btn btn-border btn-radius">
                    <span>update</span>
                </button>
                <p className="mt-3" style={{ color: "red" }}>
                    {responseMessage}
                </p>
            </form>
        </div>
    </div>
	
	</>;
}

export default Updateuser;
