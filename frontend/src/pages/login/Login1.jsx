import React, { useState } from "react";
import basepath from "../../components/url/url";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Context/Authcontext";
function Login1() {
	const {islogged,setIslogged,currentuser}=useAuth()
	const [loginform, setLoginForm] = useState({});
	const [LoginResponse, setLoginResponse] = useState("");
	const navigate = useNavigate();
	const handleChange = (e) => {
		setLoginForm({ ...loginform, [e.target.name]: e.target.value });
	};

	console.log(loginform);
	const handleSubmit = async (e) => {
		console.log("handlesubmit is working");
		e.preventDefault();
		//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsIm5hbWUiOiJhYmViZSIsImxhc3RuYW1lIjoia2ViZWRlIiwiaWRfbnVtYmVyIjoiMTIzNCIsImlhdCI6MTcxMzY2Nzc2MSwiZXhwIjoxNzEzNjc0OTYxfQ.PZxpkcvP-JJHHTFBrbZ7J6JcvuGry2ErIqtLhJW8hVE"

		try {
			const response = await basepath.post("/auth/login", loginform);
			console.log(response);
			console.log(response.data);
			console.log(response.data.message);
			setLoginResponse(response.data.message);
			if (response.status === 200) {
				if (response.data.token) {
					localStorage.setItem("user", JSON.stringify(response.data.token));
				}
				setIslogged(true)
				navigate("/");
			}
		} catch (error) {
			console.log(error);
			setLoginResponse(error.response.data.message);
		}
	};

	return (
		<>
			<section className="contact pb-lg-0 z-index-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="contact-main white-bg p-5">
								<h2 className="title mb-4">
									{" "}
									<span>login</span>
								</h2>
								<form onSubmit={handleSubmit}>
									<div className="messages"></div>
									<div className="form-group">
										<input
											type="text"
											name="phoneNumber"
											className="form-control"
											placeholder="phone number"
											required="required"
											onChange={handleChange}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="password"
											name="password"
											className="form-control"
											placeholder="password"
											required="required"
											onChange={handleChange}
										/>
										<div className="help-block with-errors"></div>
									</div>

									<button type="submit" className="btn btn-border btn-radius">
										<span>Login</span>
									</button>
									<p className="mt-3" style={{fontSize:"17px"}}> donot have an account ? <span><a href="register" style={{color:"orangered"}}>register</a></span></p>
									<p style={{ color: "red" }}>{LoginResponse}</p>
								</form>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 form-info mt-4">
							<h2 className="title">
								Get In <span>Touch!</span>
							</h2>
							<p>Contact for any help if there is problem while logging</p>
							<ul className="contact-info list-unstyled mt-4">
								<li className="mb-4">
									<i className="flaticon-paper-plane"></i>
									<span>Address:</span>
									<p>Arbaminch, Ethiopia</p>
								</li>
								<li className="mb-4">
									<i className="flaticon-phone-call"></i>
									<span>Phone:</span>
									<a href="tel:+912345678900">+2519 69 043207</a>
								</li>
								<li>
									<i className="flaticon-message"></i>
									<span>Email</span>
									<a href="mailto:themeht23@gmail.com"> amumj@gmail.com</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Login1;
