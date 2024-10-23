import React, { useEffect, useState } from "react";
import basepath from "../../../components/url/url";
import UpdateCourse from "./UpdateCourse";

function Managecourses() {
	const [courses, setCourses] = useState([]);
	const [openUpdateCourse, setOpenUpdateCourse] = useState(false);
	const [selectedCourse, setSelectedCourse] = useState(null);
	const [deleteCourseMessage, setDeleteCourseMessage] = useState("");
	const [openCourseMessage, setOpenCourseMessage] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await basepath.get("daewaandirshad/getcourses");
				setCourses(response.data.data);
				console.log(response);
				console.log(courses);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	const handleDeleteClick = async (course) => {
		try {
			const response = await basepath.delete(
				`/daewaandirshad/deletecourse/${course.course_id}`,
			);
			
			setDeleteCourseMessage(response.data.message);
			console.log(deleteCourseMessage);
			if(response.status==200){
				setCourses(courses.filter(c=>c.course_id!==course.course_id))
			}
			
		} catch (err) {
			console.log(err);
		}
	};
	const handleOpenCourse = async (course) => {
		const newStatus = course.open_for_registration == 1 ? 0 : 1;
		// const newStatus = book.available == "available" ? "taken" : "available";
		try {
			const response = await basepath.put(
				`/daewaandirshad/opencourse/${course.course_id}`,
				{ status: newStatus },
			);
			if (response.status == 200) {
				setCourses(
					courses.map((c) =>
						c.course_id === course.course_id
							? { ...c, open_for_registration: newStatus }
							: c,
					),
				);
			}
			console.log(response);
			setOpenCourseMessage(response.data.message);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<section className="grey-bg pattern table-page-wrapper position-relative px-5">
			<div className="col-sm-4 position-relative">
        <h2 className="title position-relative ">courses <span></span></h2>
      </div>
				<div className="container position-relative ">
					<div className="row g-4 ">
						{courses.map((course) => (
							<div key={course.course_id} className="col-lg-4 col-md-6 ">
								<div className="featured-item ">
									<div className="featured-title text-uppercase text-center">
										<h5>{course.course_name}</h5>
									</div>
									<div className="featured-desc">
										<h6>
											{" "}
											<span style={{ fontWeight: "bold" }}>course Id: </span>
											<span style={{ fontFamily: "sans-serif" }}>
												{" "}
												{course.course_unique_id}
											</span>
										</h6>
										<h6>
											<span style={{ fontWeight: "bold" }}>
												course description:{" "}
											</span>{" "}
											<span className="" style={{ fontFamily: "sans-serif" }}>
												{course.course_description}
											</span>
										</h6>
										<h6>
											{" "}
											<span style={{ fontWeight: "bold" }}>Author : </span>{" "}
											<span style={{ fontFamily: "sans-serif" }}>
												{course.course_writter}
											</span>
										</h6>
										<h6>
											{" "}
											<span style={{ fontWeight: "bold" }}>ustaz:</span>{" "}
											<span style={{ fontFamily: "sans-serif" }}>
												{course.ustaz}
											</span>
										</h6>
									</div>
									<div
										className="mb-0 pt-3"
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											gap: "40px",
										}}
									>
										<button
											className="btn btn-primary  p-2"
											onClick={() => {
												setOpenUpdateCourse(true);
												setSelectedCourse(course);
											}}
										>
											edit
										</button>
										<button
											onClick={() => handleDeleteClick(course)}
											className="btn btn-danger p-2"
										>
											delete
										</button>
									</div>
								</div>

								<button
									className={
										course.open_for_registration == 1
											? "btn btn-danger  p-4 fs-8"
											: "btn btn-success  p-4 fs-8"
									}
									style={{
										width: "100%",
										borderRadius: "0",
										border: "none",
										color: "white",
									}}
									onClick={() => handleOpenCourse(course)}
								>
									{course.open_for_registration == 1
										? "close course"
										: "open course"}
								</button>

								{openUpdateCourse &&
									selectedCourse &&
									selectedCourse.course_id == course.course_id && (
										<UpdateCourse
											setOpenUpdateCourse={setOpenUpdateCourse}
											course={selectedCourse}
											key={course.course_id}
										/>
									)}
							</div>
							
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Managecourses;
