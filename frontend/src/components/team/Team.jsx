import React from "react";
import t1 from "../../assets/template_assets/images/team/01.jpg";
import t2 from "../../assets/template_assets/images/team/02.jpg";
import t3 from "../../assets/template_assets/images/team/03.jpg";
function Team() {
	return (
		<>
			<section className="grey-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-12">
							<div className="team-member text-center style-2">
								<div className="team-images">
									<img className="img-fluid" src={t1} alt="" />
								</div>
								<div className="team-description">
									{" "}
									<span>Amir (main)</span>
									<h5>
										<a href="team-single.html">ustaz mensur seid</a>
									</h5>
									<div className="team-social-icon">
										<ul>
											<li>
												<a href="#">
													<i className="fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fab fa-google-plus-g"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fab fa-linkedin-in"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
							<div className="team-member text-center style-2">
								<div className="team-images">
									<img className="img-fluid" src={t2} alt="" />
								</div>
								<div className="team-description">
									{" "}
									<span>Vice Amir</span>
									<h5>
										<a href="team-single.html">mktl Abdurehim</a>
									</h5>
									<div className="team-social-icon">
										<ul>
											<li>
												<a href="#">
													<i className="fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fab fa-google-plus-g"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fab fa-linkedin-in"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
							<div className="team-member text-center style-2">
								<div className="team-images">
									<img className="img-fluid" src={t3} alt="" />
								</div>
								<div className="team-description">
									{" "}
									<span>Secretary</span>
									<h5>
										<a href="team-single.html">Ustaz Nuredin Faruk</a>
									</h5>
									<div className="team-social-icon">
										<ul>
											<li>
												<a href="#">
													<i className="fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fab fa-google-plus-g"></i>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fab fa-linkedin-in"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Team;
