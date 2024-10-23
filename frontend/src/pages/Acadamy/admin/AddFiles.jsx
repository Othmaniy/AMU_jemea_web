import React, { useState } from "react";
import basepath from "../../../components/url/url";
import "./addfile.css";
import { FaFileArrowUp } from "react-icons/fa6";
// import { useAuth } from "../../../components/Context/Authcontext";
function AddFiles() {
	const [file, setFile] = useState(null);
	const [filedescription, setFiledescription] = useState("");
	const [department, setDepartment] = useState("");
	const [teacher, setTeacher] = useState("");
	const [fileType, setFileType] = useState("");
	const [year, setYear] = useState("");
	const [responsemessage, setResponsemessage] = useState("");
	const [fileName, setFileName] = useState("");
	const handleChange = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			setFile(selectedFile);
			setFileName(selectedFile.name);
		}
	};
	const upload = async () => {
		try {
			const formdata = new FormData();
			formdata.append("file", file);
			const response = await basepath.post("/academi/uploadfile", formdata);
			return response.data;
		} catch (err) {
			console.log(err);
		}
	};

	const handleClick = async (e) => {
		e.preventDefault();
		let fileUrl = "";
		if (file) {
			console.log("file selected", file);
			try {
				fileUrl = await upload();
				const form = {
					fileUrl,
					filedescription,
					department,
					teacher,
					fileType,
					year,
				};
				console.log(form);
				console.log("file uploaded ", fileUrl);
				const response = await basepath.post("/academi/addfile", form);

				console.log(response);
				console.log(response.data);
				console.log(response.data.message);
				setResponsemessage(response.data.message);
				setFile(null);
				setFiledescription("");
				setFileName("");
			} catch (err) {
				console.log(err);
				console.log("error uploading file");
			}
		}
	};

	return (
		<div>
			<section className="contact pb-lg-0 z-index-1">
				<div className="container">
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="contact-main white-bg p-5">
								<h2 className="title mb-4">
									upload <span>new file</span>
								</h2>
								<form id="contact-form">
									<div className="form-group">
										<input
											type="file"
											id="file"
											onChange={handleChange}
											style={{ display: "none" }}
										/>
										<label htmlFor="file">
											<div className="items">
												<FaFileArrowUp
													style={{ fontSize: "100px", color: "black" }}
												/>
												<span
													style={{
														fontSize: "30px",
														fontWeight: "bold",
														cursor: "pointer",
													}}
												>
													Choose file
												</span>
											</div>
										</label>
									</div>
									<p className="text-danger fs-4">{fileName}</p>
									<div className="form-group">
										<input
											type="text"
											name="file_description"
											className="form-control"
											placeholder="write file description here"
											onChange={(e) => setFiledescription(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											name="department"
											className="form-control"
											placeholder="department"
											onChange={(e) => setDepartment(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											name="teacher"
											className="form-control"
											placeholder="Teacher name"
											onChange={(e) => setTeacher(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<div className="form-group">
											<input
												type="text"
												name="department"
												className="form-control"
												placeholder="year_level"
												onChange={(e) => setYear(e.target.value)}
											/>
										</div>
										<select className="form-select form-select-lg " aria-label="Default select example" name='role'
                                    onChange={(e) => setFileType(e.target.value)}
                                    
                                    >
                                    
                                    <option selected>select file type</option>
                                    <option value="file">file</option>
                                    <option value="assignment">assignment</option>
                                     <option value="exam">exam</option>
                                    </select>
									</div>
									<button
										onClick={handleClick}
										className="btn btn-border btn-radius"
									>
										upload
									</button>

									<p className="text-success mt-2">{responsemessage}</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AddFiles;
