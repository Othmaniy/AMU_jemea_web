import React, { useState } from "react";
import basepath from "../../../components/url/url";

function Addcourses() {
	const [courseName, setcourseName] = useState("");
	const [courseDescription, setcourseDescription] = useState("");
	const [courseUniqueId, setcourseUniqueId] = useState("");
	const [courseAuthor, setcourseAuthor] = useState("");
	const [ustaz, setUstaz] = useState("");
	const [responsemessage, setResponsemessage] = useState("");
	const formdata = {
		courseName,
		courseDescription,
		courseUniqueId,
		courseAuthor,
		ustaz,
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await basepath.post(
				"/daewaandirshad/addcourse",
				formdata,
			);
			setResponsemessage(response.data.message);
		} catch (err) {
			console.log(err);
			setResponsemessage(err.response.data.message);
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
									add <span>new course</span>
								</h2>
								<form id="contact-form">
									<div className="form-group">
										<input
											id="form_name"
											type="text"
											name="courseName"
											className="form-control"
											placeholder="course name"
											required="required"
											onChange={(e) => setcourseName(e.target.value)}
										/>
										{/* <div className="help-block with-errors">
												{bookNameError}
											</div> */}
									</div>
									<div className="form-group">
										<input
											id="form_email"
											name="course_description"
											className="form-control"
											placeholder="course_unique_id"
											required="required"
											onChange={(e) => setcourseUniqueId(e.target.value)}
										/>
										{/* <div className="help-block with-errors">
												{authorError}
											</div> */}
									</div>
									<div className="form-group">
										<input
											id="form_email"
											name="course_description"
											className="form-control"
											placeholder="course description"
											required="required"
											onChange={(e) => setcourseDescription(e.target.value)}
										/>
										{/* <div className="help-block with-errors">
												{authorError}
											</div> */}
									</div>
									<div className="form-group">
										<input
											id="form_phone"
											name="course_writter"
											className="form-control"
											placeholder="Author"
											required="required"
											onChange={(e) => setcourseAuthor(e.target.value)}
										/>
										{/* <div className="help-block with-errors">
												{catagoryError}
											</div> */}
									</div>
									<div className="form-group">
										<input
											id="form_phone"
											name="ustaz"
											className="form-control"
											placeholder="ustaz name expected to give course"
											required="required"
											onChange={(e) => setUstaz(e.target.value)}
										/>
										{/* <div className="help-block with-errors">
												{catagoryError}
											</div> */}
									</div>
									<button
										type="submit"
										className="btn btn-border btn-radius"
										onClick={handleSubmit}
									>
										<span>Add</span>
									</button>
									<p className="mt-3" style={{ color: "red" }}>
										{responsemessage}
									</p>
								</form>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 white-bg contact-main d-flex justify-content-center align-items-center" style={{flexDirection:"column"}}>
							<h2 className="title">
								Important  <span>Reminder!</span>
							</h2>
							<p>
								
								please provide full information for the derse that is suppposed to be given in order for users to attain enough information 
								you can open and close corses in manage courses section
							</p>
							
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Addcourses;
