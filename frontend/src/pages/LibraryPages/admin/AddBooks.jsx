import React, { useState } from "react";
import basepath from "../../../components/url/url";
// import "./register.css";

function AddBooks() {
	//   const [form, setForm] = useState({});
	const [reponsemessage, setResponsemessage] = useState("");
	//   const user =useAuth();
	const [bookname, setBookname] = useState("");
	const [Author, setAuthor] = useState("");
	const [category, setCategory] = useState("");
	const [bookNameError, setBookNameError] = useState("");
	const [authorError, setAuthorError] = useState("");
	const [catagoryError, setCatagoryError] = useState("");

	const form = {
		bookname,
		Author,
		category,
	};
	console.log(form);
	const handlesubmit = async (e) => {
		e.preventDefault();
		let valid = true;
		if (!bookname) {
			setBookNameError("please provide book name");
			valid = false;
		} else {
			setBookNameError("");
		}
		if (!Author) {
			setAuthorError("please provide authorname");
			valid = false;
		} else {
			setAuthorError("");
		}
		if (!category) {
			setCatagoryError("please provide which  ategory the book belongs");
			valid = false;
		} else {
			setCatagoryError("");
		}
		if (!valid) {
			return;
		}
		try {
			const response = await basepath.post("library/addnewbook", form);
			console.log(response);
			console.log(response.data.message);
			setResponsemessage(response.data.message);
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
										add <span>new book</span>
									</h2>
									<form id="contact-form" onSubmit={handlesubmit}>
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="BookName"
												className="form-control"
												placeholder="Book Name"
												required="required"
												onChange={(e) => setBookname(e.target.value)}
											/>
											<div className="help-block with-errors">
												{bookNameError}
											</div>
										</div>
										<div className="form-group">
											<input
												id="form_email"
												name="Author"
												className="form-control"
												placeholder="Author"
												required="required"
												onChange={(e) => setAuthor(e.target.value)}
											/>
											<div className="help-block with-errors">
												{authorError}
											</div>
										</div>
										<div className="form-group">
											<input
												id="form_phone"
												name="Category"
												className="form-control"
												placeholder="category"
												required="required"
												onChange={(e) => setCategory(e.target.value)}
											/>
											<div className="help-block with-errors">
												{catagoryError}
											</div>
										</div>
										{/* to be done for availability */}
										{/* <div className="form-group">
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
                    </div> */}

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

export default AddBooks;
