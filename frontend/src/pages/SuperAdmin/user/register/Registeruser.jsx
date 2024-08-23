import React, { useState } from "react";
import basepath from "../../../../components/url/url";
import "./register.css";
import { useAuth } from "../../../../components/Context/Authcontext";

function Registeruser() {
	const [form, setForm] = useState({});
	const [reponsemessage, setResponsemessage] = useState("");
	const user = useAuth();
	const token = user?.currentuser?.token;
	// console.log("user from register component"+user);
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	console.log(form);

	const handlesubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await basepath.post("/auth/createtempaccount", form)
			console.log(response);
			setResponsemessage(response.data.message);
		} catch (err) {
			console.log(err);
			if (err.response) {
				console.log(err.response.data.message);
				setResponsemessage(err.response.data.message);
			} else {
				setResponsemessage("An error occurred. Please try again.");
			}
		}
	};

	return (
		<>
			<section className="contact pb-lg-0 z-index-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="contact-main white-bg p-3">
								<h2 className="title mb-4">
									create <span>account</span>
								</h2>
								<form id="contact-form" onSubmit={handlesubmit}>
									<div className="messages"></div>
									<div className="form-wrapper d-flex flex-row gap-3">
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="name"
												className="form-control"
												placeholder="Name"
												required="required"
												data-error="Username is required."
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="lastname"
												className="form-control"
												placeholder="Last Name"
												required="required"
												data-error="Username is required."
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
									</div>

									<div className="form-wrapper d-flex flex-row gap-3">
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="id_number"
												className="form-control"
												placeholder="ID Number"
												
												data-error="ID Number is required."
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												id="form_name"
												type="password"
												name="password"
												className="form-control"
												placeholder="Password"
												required="required"
												data-error="Password is required."
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
									</div>

									<div className="form-wrapper d-flex flex-row gap-3">
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="batch"
												className="form-control"
												placeholder="Batch"
												required="required"
												data-error="Batch is required."
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="department"
												className="form-control"
												placeholder="Department"
												required="required"
												data-error="Department is required."
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
									</div>

									<div className="form-group">
										<input
											id="form_phone"
											type="text"
											name="blockNumber"
											className="form-control"
											placeholder="Block Number"
											required="required"
											onChange={handleChange}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											id="form_phone"
											type="text"
											name="dormNumber"
											className="form-control"
											placeholder="Dorm Number"
											required="required"
											onChange={handleChange}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											id="form_phone"
											type="text"
											name="phone"
											className="form-control"
											placeholder="Phone"
											required="required"
											onChange={handleChange}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											id="form-phone"
											type="text"
											name="emergencyPhone"
											className="form-control"
											placeholder="Emergency Phone"
											
											onChange={handleChange}
										/>
										<div className="help-block with-errors"></div>
									</div>

									<button type="submit" className="btn btn-border btn-radius">
										<span>Register</span>
									</button>
									<p className="mt-3" style={{ color: "red" }}>
										{reponsemessage}
									</p>
								</form>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 form-info mt-4 " style={{display:"flex",flexDirection:"column",  justifyContent:"center",alignItems:"center"}}>
							<h2 className="title">
								must <span>read</span> <br />
							</h2>
							<p className="text-center p-3">
								you have registered as temporary user doesnot mean you can login with your account unless you are approved by super admin(amir).your account wiil be approved within 24 hours after your registration and you can try to login after that.
							</p>
							
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Registeruser;
