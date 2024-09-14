import React from 'react'

function Adminhome() {
  return (
    <>
    <div className="grey-bg pattern right-side p-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 ">
							<a
								href="admin/addcourse"
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h5>Active Users</h5>
									</div>
									<div className="featured-desc">
										<h3>
											200
										</h3>
									</div>
									<div className="featured-icon">
										{" "}
										<i className="flaticon-chat-bubble"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
										<i className="flaticon-chat-bubble"></i>
									</span>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-6 p-1">
							<a
								href="admin/managecourse"
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h5>Aluminis</h5>
									</div>
									<div className="featured-desc">
										<h4>500</h4>
									</div>
									<div className="featured-icon">
										{" "}
										<i className="flaticon-employee"></i>
									</div>{" "}
									<span>
										<i className="flaticon-employee"></i>
									</span>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-6 p-1">
							<a
								href="admin/manageusers"
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h5>Pending users</h5>
									</div>
									<div className="featured-desc">
										<h5>
											200
										</h5>
									</div>
									<div className="featured-icon">
										{" "}
										<i className="flaticon-innovation-1"></i>
									</div>{" "}
									<span>
										<i className="flaticon-innovation-1"></i>
									</span>
								</div>
							</a>
						</div>

						<div className="col-lg-4 col-md-6 p-1 mt-0 pt-0">
							<a
								href="admin/addcourse"
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h5>Open Courses</h5>
									</div>
									<div className="featured-desc">
										<h3>
											200
										</h3>
									</div>
									<div className="featured-icon">
										{" "}
										<i className="flaticon-chat-bubble"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
										<i className="flaticon-chat-bubble"></i>
									</span>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-6 p-1 mt-0 pt-0">
							<a
								href="admin/addcourse"
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h5>currently enrolling users
										</h5>
									</div>
									<div className="featured-desc">
										<h3>
											200
										</h3>
									</div>
									<div className="featured-icon">
										{" "}
										<i className="flaticon-chat-bubble"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
										<i className="flaticon-chat-bubble"></i>
									</span>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-6 p-1 mt-0 pt-0">
							
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h5>total users 
										</h5>
									</div>
									<div className="featured-desc">
										<h3>
											200
										</h3>
									</div>
									<div className="featured-icon">
										{" "}
										<i className="flaticon-chat-bubble"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
										<i className="flaticon-chat-bubble"></i>
									</span>
								</div>
							
						</div>
					</div>
					
					
				</div>
			</div>
    
    </>
  )
}

export default Adminhome