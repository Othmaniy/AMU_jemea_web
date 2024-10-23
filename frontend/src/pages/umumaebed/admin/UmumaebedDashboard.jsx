import React from 'react'

function UmumaebedDashboard() {
  return (
    <>
     <div className="grey-bg pattern right-side p-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 ">
							<a
								href="/umumaebed/admin/managemembers"
								style={{ textDecoration: "none", color: "inherit" }}
							>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h5>Manage members</h5>
									</div>
									{/* <div className="featured-desc">
										<h3>
											200
										</h3>
									</div> */}
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
						
					</div>
					
					
				</div>
			</div>
    
    
    </>
  )
}

export default UmumaebedDashboard