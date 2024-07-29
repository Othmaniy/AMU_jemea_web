import React, { useEffect, useState } from "react";
import basepath from "../../../components/url/url";
import { FaFileDownload } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";

function AcademiFiles() {
	const [files, setFiles] = useState([]);
	const department =useLocation().pathname.split("/")[2]
	console.log(department);

	useEffect(() => {
		const fetchFiles = async () => {
			try {
			const responsef = await basepath.get(`/academi/getfiles/${department}`);
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
				<div className="row">
					{files.map((file) => (
						<div className="col-lg-6 col-md-6 col-sm-12 mb-2" key={file.id}>
							<div className="d-flex align-items-center">
								
								<a
									href={"/academiMaterials/" + file.file_url}
									download={file.file_url}
									className=""
								>
									<FaFileDownload style={{ fontSize: "7rem", color: "red" }} className="mr-2" />
								</a>
								<p className="p-2 text-primary">{file.file_url} <br />{file.file_description} <br /><span className="text-danger" style={{fontWeight:"bold"}}>by  {file.Teacher_name}</span></p>

							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default AcademiFiles;
