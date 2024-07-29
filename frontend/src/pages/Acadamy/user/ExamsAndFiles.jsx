import React from "react";
import { Link, useLocation } from "react-router-dom";

function ExamsAndFiles() {
	const department = useLocation().pathname.split("/")[3];
	console.log("exams and files" + department);
	return (
		<>
			<section className="feuture-main">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<Link
								to={`/files/${department}`}
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<div className="featured-item text-center">
									<div className="featured-icon">
										{" "}
										<i className="flaticon-industrial-robot"></i>
									</div>
									<div className="featured-title text-uppercase">
										<h5>Files</h5>
									</div>
									<div className="featured-desc">
										<p className="mb-3">
											Fringilla augue at maximus vestibulum. Nam pulvinar vitae
											neque et porttitor. Praesent sed nisi eleifend.
										</p>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-6 col-md-6">
							<Link
								to={`/exams/${department}`}
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<div className="featured-item text-center">
									<div className="featured-icon">
										{" "}
										<i className="flaticon-industrial-robot"></i>
									</div>
									<div className="featured-title text-uppercase">
										<h5>Exams</h5>
									</div>
									<div className="featured-desc">
										<p className="mb-3">
											Fringilla augue at maximus vestibulum. Nam pulvinar vitae
											neque et porttitor. Praesent sed nisi eleifend.
										</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default ExamsAndFiles;
