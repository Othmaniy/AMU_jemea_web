import React, { useEffect, useState } from "react";
import basepath from "../../../components/url/url";
import { FaFileDownload } from "react-icons/fa";

function LibrarFiles() {
	const [libraryfiles, setLibraryFiles] = useState([]);
	useEffect(() => {
		const fetchFiles = async () => {
			try {
				const response = await basepath.get("/library/getlibraryfiles");
                console.log("library files response");
                console.log(response);
				setLibraryFiles(response.data.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchFiles();
	}, []);
	return (
		<section className="container mt-5 p-2" >
			<h2 className="title mb-4">
									library <span>files</span>
								</h2>
			<div className="row">
				{libraryfiles.map((file) => (
					<div className="col-lg-6 col-md-6 col-sm-12 mb-2 single-file-container" key={file.id}>
						<div className="d-flex align-items-center">
							<a
								href={"/libraryfiles/" + file.file_url}
								download={file.file_url}
								className=""
							>
								<FaFileDownload
									style={{ fontSize: "6rem", color: "black" }}
									className="mr-2"
								/>
							</a>
						
							<p className="p-2 text-primary font-bold">
								{file.file_url} <br />
								{file.file_description} <br />
								<span className="" style={{ fontWeight: "bold" }}>
									by {file.author}
								</span>
								<br />
								<span className="" style={{ fontWeight: "bold" }}>
									year: {file.published_year}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default LibrarFiles;
