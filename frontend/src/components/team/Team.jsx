import React, { useEffect, useState } from "react";
import basepath from "../url/url";
import t1 from "/template_assets/images/team/01.jpg";
import t2 from "/template_assets/images/team/02.jpg";
import t3 from "/template_assets/images/team/03.jpg";
function Team() {
const [leaders,setLeaders]=useState([])

	useEffect(() => {
		const fetchRecentLeaders = async () => {
		  try {
			const response = await basepath.get("/leaders/getrecentleaders");
			console.log("leaders response", response);
			setLeaders(response.data.data)
		  } catch (err) {
			console.log(err);
		  }
		};
		fetchRecentLeaders();
	  }, []);

	return (
		<>
			<section className="grey-bg">
				<div className="container">
					<div className="row">
						{leaders.map((leader)=>(
							<div className="col-lg-4 col-md-12" key={leader.id}>
							<div className="team-member text-center style-2">
								<div className="team-images">
									<img className="img-fluid" src={t1} alt="" />
								</div>
								<div className="team-description">
									{" "}
									<span>Amir (main)</span>
									<h5>
										<a href="team-single.html">{leader.first_name} {leader.last_name}</a>
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
						))}

					</div>
				</div>
			</section>
		</>
	);
}

export default Team;
