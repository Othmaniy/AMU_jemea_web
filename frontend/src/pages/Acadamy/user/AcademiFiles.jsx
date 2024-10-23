import React, { useEffect, useState } from "react";
import basepath from "../../../components/url/url";
import { FaFileDownload } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

function AcademiFiles() {
	const [files, setFiles] = useState([]);
	const [search, setSearch] = useState("");
	const department = useLocation().pathname.split("/")[2];
	const fileType = useLocation().pathname.split("/")[1];


	useEffect(() => {
		const fetchFiles = async () => {
			try {
				const responsef = await basepath.get(`/academi/getfiles`, {
					params: {
						department,
						fileType,
					},
				});
				setFiles(responsef.data.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchFiles();
	}, []);

	return (
		<>
			<div className="container mt-5 p-2">
				<div className="search-container d-flex justify-content-center gap-4 m-4">
					<input
						type="text"
						name="search"
						placeholder="search by file name"
						onChange={(e) => setSearch(e.target.value)}
						className="search-input"
					/>
				</div>
				<div className="row">
					{files
						.filter((file) => {
							return search.toLowerCase() === ""
								? file
								: file.file_url.toLowerCase().includes(search);
						})
						.map((file) => (
							<div className="col-lg-6 col-md-6 col-sm-12 mb-2" key={file.id}>
								<div className="d-flex align-items-center">
									<a
										href={"/academiMaterials/" + file.file_url}
										download={file.file_url}
										className=""
									>
										<FaFileDownload
											style={{ fontSize: "7rem", color: "black" }}
											className="mr-2"
										/>
									</a>
									<p className="p-2 text-primary font-bold">
										{file.file_url} <br />
										{file.file_description} <br />
										<span className="" style={{ fontWeight: "bold" }}>
											by {file.Teacher_name}
										</span>
										<br />
										<span className="" style={{ fontWeight: "bold" }}>
											year: {file.year}
										</span>
									</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
}

export default AcademiFiles;
