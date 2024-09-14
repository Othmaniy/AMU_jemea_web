import React, { useState } from "react";
import basepath from "../../../components/url/url";
// import "./UpdateCOurse.css"
import "./update.css";
function UpdateCourse({ setOpenUpdateCourse, course }) {
	const [courseName, setcourseName] = useState("");
	const [courseDescription, setcourseDescription] = useState("");
	const [courseUniqueId, setcourseUniqueId] = useState("");
	const [courseAuthor, setcourseAuthor] = useState("");
	const [ustaz, setUstaz] = useState("");
	const [responseMessage, setResponseMessage] = useState("");
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
			const response = await basepath.put(
				`/daewaandirshad/updatecourse/${course.course_id}`,
				formdata,
			);
			console.log(response);
			setResponseMessage(response.data.message);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<div className="updatecourse col-lg-6 col-md-12 flex align-items-center mx-auto">
				<div className="contact-main white-bg p-5  ">
					<div className="d-flex justify-content-between">
						<h2 className="title mb-4">
							update <span>course </span>
						</h2>
						<button
							onClick={() => setOpenUpdateCourse(false)}
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
								id="course_name"
								type="text"
								name="course_name"
								className="form-control"
								placeholder={course.course_name}
								data-error="Username is required."
								onChange={(e) => setcourseName(e.target.value)}
							/>
							<div className="help-block with-errors"></div>
						</div>
						<div className="form-group">
							<input
								id="course_description"
								name="course_description"
								className="form-control"
								placeholder={course.course_description}
								onChange={(e) => setcourseDescription(e.target.value)}
							/>
							<div className="help-block with-errors"></div>
						</div>
						<div className="form-group">
							<input
								id="author"
								name="Author"
								className="form-control"
								placeholder={course.course_writter}
								onChange={(e) => setcourseAuthor(e.target.value)}
							/>
							<div className="help-block with-errors"></div>
						</div>
						<div className="form-group">
							<input
								id="course_unique_id"
								name="course_unique_id"
								className="form-control"
								placeholder={course.course_unique_id}
								onChange={(e) => setcourseUniqueId(e.target.value)}
							/>
							<div className="help-block with-errors"></div>
						</div>
						<div className="form-group">
							<input
								id="ustaz"
								name="ustaz"
								className="form-control"
								placeholder={course.ustaz}
								onChange={(e) => setUstaz(e.target.value)}
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
		</>
	);
}

export default UpdateCourse;
