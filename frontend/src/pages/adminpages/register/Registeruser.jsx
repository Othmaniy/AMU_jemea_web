import React, { useState } from "react";
import basepath from "../../../components/url/url";
import "./register.css";
import { useAuth } from "../../../components/Context/Authcontext";

function Registeruser() {
	const [form, setForm] = useState({});
	const [reponsemessage, setResponsemessage] = useState("");
	const user = useAuth();
	console.log(user.currentuser.token);
	const token = user.currentuser.token;
	// console.log("user from register component"+user);
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	console.log(form);
	
	const requestoptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-access-token": token,
		},
		body: JSON.stringify(form),
	};
	console.log(requestoptions);
	console.log(requestoptions.headers);
	console.log(requestoptions.headers["x-access-token"]);
	const handlesubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch (
				`http://localhost:5000/api/auth/createaccount`,
				requestoptions)
			;
			const data = await response.json();

            if (response.ok) {
                setResponsemessage(data.message);
            } else {
                setResponsemessage(data.message);
            }
			// console.log(response);
			// console.log(response.status);
			// setResponsemessage(response.data.message);
			//  setResponsemessage(response.data.)
			// alert(reponsemessage)

			// setTimeout(() => {
			//   window.location.href = "/";
			// }, 3000);
		} catch (err) {
			console.log(err);
			console.log(err.response.data.message);
			setResponsemessage(err.response.data.message);
			// alert(reponsemessage)
		}
	};

	return (
		<>
			<>
				<section className="contact pb-lg-0 z-index-1">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<div className="contact-main white-bg p-5">
									<h2 className="title mb-4">
										Register <span>new user</span>
									</h2>
									<form id="contact-form" onSubmit={handlesubmit}>
										<div className="messages"></div>
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
												id="form_email"
												name="lastname"
												className="form-control"
												placeholder="last name"
												required="required"
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												id="form_phone"
												name="id_number"
												className="form-control"
												placeholder="id_number"
												required="required"
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												id="form_phone"
												type="password"
												name="password"
												className="form-control"
												placeholder="password"
												required="required"
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												id="form_phone"
												name="phone"
												className="form-control"
												placeholder="phone"
												required="required"
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												id="form_emergency_phone"
												name="emergency_phone"
												className="form-control"
												placeholder="emergency_phone"
												required="required"
												onChange={handleChange}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<select
												multiple
												name="role"
												style={{ width: "100%" }}
												className="form-control roleselector"
												onChange={handleChange}
											>
												<option selected value="Admin">
													Admin
												</option>
												<option value="user">user</option>
												<option value="Umumaebed_Admin">umumaebed Admin</option>
												<option value="Library_Admin">library Admin</option>
												<option value="Daewa_and_Irshad_Admin">
													Daewa and irshad admin
												</option>

												<option value="Acadami_Admin">AcadmiAdmin</option>
											</select>
										</div>

										{/* <input list='items' multiple />
          <datalist>
     <option value="iem1" />
     <option value="iem1" />
     <option value="iem1" />
     <option value="iem1" />
          </datalist> */}
										<button type="submit" className="btn btn-border btn-radius">
											<span>Register</span>
										</button>
										<p className="mt-3" style={{ color: "red" }}>
											{reponsemessage}
										</p>
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
										<a href="mailto:themeht23@gmail.com">
											{" "}
											themeht23@gmail.com
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</>
		</>
	);
}

export default Registeruser;
