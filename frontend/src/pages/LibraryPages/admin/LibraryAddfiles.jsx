import React, { useState } from "react";
import { FaFileArrowUp } from "react-icons/fa6";
import basepath from "../../../components/url/url";

function LibraryAddfiles() {
	const [libraryFile, setLibraryFile] = useState(null);
	const [BookName, setBookName] = useState("");
	const [fileDescription, setFileDescription] = useState("");
	const [author, SetAuthor] = useState("");
	const [publishedYear, setPublishedYear] = useState("");
	const [message, setMessage] = useState("");
	const handleChange = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			setLibraryFile(selectedFile);
			setBookName(selectedFile.name);
		}
	};
	const upload = async () => {
		try {
			const formdata = new FormData();
			formdata.append("file", libraryFile);
			const response = await basepath.post(
				"/library/uploadlibraryfile",
				formdata,
			);
			console.log("upload library file response ");
			console.log(response.data);
			return response.data;
		} catch (err) {
			console.log(err);
		}
	};
	const handleClick = async (e) => {
		e.preventDefault();
		let fileUrl = "";
		if (libraryFile) {
			console.log("file selected", libraryFile);
			try {
				fileUrl = await upload();
				const form = { fileUrl, fileDescription, author, publishedYear };
				console.log("file uploaded ", fileUrl);
				const response = await basepath.post("/library/addlibraryfile", form);
				console.log(response);
				console.log(response.data);
				console.log(response.data.message);
				setMessage(response.data.message);
				setLibraryFile(null);
				setFileDescription("");
				SetAuthor("");
				setPublishedYear("");
			} catch (err) {
				console.log(err);
				console.log("error uploading file");
				setMessage(err.response.data.message);
			}
		}
	};

	return (
		<>
			<section className="contact pb-lg-0 z-index-1">
				<div className="container">
					<div className="row  d-flex justify-content-center align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="contact-main white-bg p-5">
								<h2 className="title mb-4">
									upload <span>new book(soft copy)</span>
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
														color:"orangered"
													}}
												>
													Choose file
												</span>
											</div>
										</label>
									</div>
									<p className="text-danger fs-4">{BookName}</p>
									<div className="form-group">
										<input
											type="text"
											name="description"
											className="form-control"
											placeholder="write file description here"
											onChange={(e) => setFileDescription(e.target.value)}
										/>
									</div>

									<div className="form-group">
										<input
											type="text"
											name="Author"
											className="form-control"
											placeholder="author"
											onChange={(e) => SetAuthor(e.target.value)}
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											name="derseAuthor"
											className="form-control"
											placeholder="published year"
											onChange={(e) => setPublishedYear(e.target.value)}
										/>
									</div>

									<button
										onClick={handleClick}
										className="btn btn-border btn-radius"
									>
										upload
									</button>

									<p className="text-success mt-2">{message}</p>
								</form>
							</div>
						</div>
						
					</div>
				</div>
			</section>
		</>
	);
}

export default LibraryAddfiles;
