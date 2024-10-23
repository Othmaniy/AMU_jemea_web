import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login1 from "../../login/Login1";
import { useAuth } from "../../../components/Context/Authcontext";

function FileDashboard() {
	const user = useAuth();
	console.log(user);
	console.log(user.islogged);
	const navigate = useNavigate();
	if (!user.islogged) {
		navigate("/login");
	}
	return (
		<section className="p-3">
		<div className="grey-bg pattern">
		
				<div className="container my-3">
				<div className="col-sm-4">
        <h2 className="title p-3 m-3">choose your department <span></span></h2>
      </div>
					<div className="row g-3 p2">
						
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/software"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Software</h3>
									</div>
									<div className="featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-code" ></i>

									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-code "></i>
									</span>
								</div>
								</Link>
						</div>
						
						
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/electrical"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">electrical</h3>
									</div>
									
									<div className="featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-plug"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-plug"></i>
									</span>
								</div>
								</Link>
						</div>
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/civil"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Civil</h3>
									</div>
									
									<div className="featured-icon featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-hammer"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-hammer"></i>
									</span>
								</div>
								</Link>
						</div>

						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/mechanical"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Mechanical</h3>
									</div>
									
									<div className="featured-icon featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-cogs"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-cogs"></i>
									</span>
								</div>
								</Link>
						</div>
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/informationtechnology"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Information technology(IT)</h3>
									</div>
									
									<div className="featured-icon featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-laptop"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-laptop"></i>
									</span>
								</div>
								</Link>
						</div>
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/hydraulics"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Hydraulics</h3>
									</div>
									
									<div className="featured-icon featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-tint"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-tint"></i>
									</span>
								</div>
								</Link>
						</div>
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/watersupply"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Water Suply</h3>
									</div>
									<div className="featured-icon featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-faucet"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-faucet"></i>
									</span>
								</div>
								</Link>
						</div>
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/metrology"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Metrology</h3>
									</div>
									<div className="featured-icon featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-thermometer-half"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-thermometer-half"></i>
									</span>
								</div>
								</Link>
						</div>
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/computerscience"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Computer sciencse</h3>
									</div>
									<div className="featured-icon featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-server"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-server"></i>
									</span>
								</div>
								</Link>
						</div>
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/irrigation"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Irrigation</h3>
									</div>
									<div className="featured-icon featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-tractor"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-tractor"></i>
									</span>
								</div>
								</Link>
						</div>
						<div className="col-lg-4 col-md-6">
						<Link to={"/files/choosefiles/architecture"}
						style={{textDecoration:"none",color:"inherit"}}
						>
								<div className="featured-item bottom-icon">
									<div className="featured-title text-uppercase">
										<h3 className="text-center">Architecture</h3>
									</div>
									<div className="featured-icon featured-icon d-flex justify-content-center align-items-center">
										{" "}
										<i className="fa fa-drafting-compass"></i>
									</div>{" "}
									<span style={{fontSize:"10px"}}>
									<i className="fa fa-drafting-compass"></i>
									</span>
								</div>
								</Link>
						</div>
					</div>
					
					
				</div>
			</div>
		</section>
	);
}

export default FileDashboard;
