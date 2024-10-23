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
	const [publishedYear,setPublishedYear]=useState('')
	const [publishedYearError,setPublishedYearError]=useState('')
	const [bookNameError, setBookNameError] = useState("");
	const [authorError, setAuthorError] = useState("");
	const [catagoryError, setCatagoryError] = useState("");

	const form = {
		bookname,
		Author,
		category,
		publishedYear
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
		if(!publishedYear){
			setPublishedYearError("please provide published year")
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
				<section className="contact pb-lg-0 z-index-1 ">
					<div className="container ">
						<div className="row d-flex justify-content-center align-items-center">
							<div className="col-lg-6 col-md-12">
								<div className="contact-main white-bg p-5">
									<h2 className="title mb-4">
										add <span>new book</span>
									</h2>
									<form id="contact-form">
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
												onChange={(e) => setCategory(e.target.value)}
											/>
											<div className="help-block with-errors">
												{catagoryError}
											</div>
										</div>
										<div className="form-group">
											<input
												id="form_phone"
												name="publishedYear"
												className="form-control"
												placeholder="published year"
												onChange={(e) => setPublishedYear(e.target.value)}
											/>
											<div className="help-block with-errors">
												{publishedYearError}
											</div>
										</div>
									
										<button
											type="submit"
											className="btn btn-border btn-radius"
											onClick={handlesubmit}
										>
											<span>Add</span>
										</button>
										<p className="mt-3" style={{ color: "red" }}>
											{reponsemessage}
										</p>
									</form>
								</div>
							</div>
							
						</div>
					</div>
				</section>
			</>
		</>
	);
}

export default AddBooks;
