import React, { useEffect } from "react";
import "./Header.css";
// import logoimg from "../../builtinimage/logoresized.png"
import logoimg from "../../assets/builtinimage/logoresized.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faGooglePlusG,
	faTwitter,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Authcontext";
// import getuser from "../Utility/decode";
function Header() {
	useEffect(() => {
		const headerWrap = document.getElementById("header-wrap");
		const topBar = document.querySelector(".top-bar");
	
		const handleScroll = () => {
		  const topBarHeight = topBar.offsetHeight;
		  const scrollPosition = window.scrollY;
	
		  if (scrollPosition >= topBarHeight) {
			headerWrap.classList.add("fixed-header");
		  } else {
			headerWrap.classList.remove("fixed-header");
		  }
		};
	
		window.addEventListener("scroll", handleScroll);
	
		// Clean up the event listener when the component is unmounted
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	  }, []);
	const user = useAuth();
	console.log("header");
	console.log(user);
	console.log(user.islogged);
	  const {islogged,setIslogged,currentuser}=useAuth()
	// if(check&&check.currentuser){
	//   console.log(check.currentuser.token);
	// }
	// else{
	//   console.log("waiting for current user");
	// }
	// console.log(check.currentuser.token);
	// console.log(check.currentuser.token);
	// const logger=async()=>{
	//   const user = await getuser();

	//   console.log(user);

	// }

	// logger();
	// console.log(user);
	const Logout=()=>{
		localStorage.removeItem("user")
		setIslogged(false)
	}

	return (
		<div>
			<header
				id="site-header"
				className="header header-4 position-relative my-style"
				
			>
				<div className="top-bar d-md-block ">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-8">
								<div className="topbar-link">
									<ul className="list-inline">
										<li className="list-inline-item">
											<a href="mailto:themeht23@gmail.com">
												<i className="far fa-envelope-open"></i>Amu muslim
												students jemea
											</a>
										</li>
										<li className="list-inline-item">
											<a href="tel:+912345678900">
												{" "}
												<i className="fas fa-mobile-alt"></i>0969043207
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-4 text-end">
								<div className="social-icons social-hover top-social-list">
									<ul className="list-inline">
										<li className="social-facebook">
											<a href="#">
												<FontAwesomeIcon icon={faFacebookF} />
											</a>
										</li>
										<li className="social-gplus">
											<a href="#">
												<FontAwesomeIcon icon={faGooglePlusG} />
											</a>
										</li>
										<li className="social-twitter">
											<a href="#">
												<FontAwesomeIcon icon={faTwitter} />
											</a>
										</li>
										<li className="social-linkedin">
											<a href="#">
												<FontAwesomeIcon icon={faLinkedinIn} />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="header-wrap" className="sticky-header">
					<div className="container">
						<div className="row headerw">
							<div className="col headerw2">
								{/* <!-- Navbar --> */}
								<nav className="navbar navbar-expand-lg d-flex justify-content-between">
									<div>
									<a className="navbar-brand logo" href="/">
										<img
											id="logo-img"
											className="header-4"
											src={logoimg}
											alt="liogoimf"
										/>
									</a>
									</div>
									<div>
									<button
										className="navbar-toggler"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#navbarNavDropdown"
										aria-controls="navbarNavDropdown" 
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										{" "}
										<span className="navbar-toggler-icon"></span>
									</button>
									<div
										className="collapse navbar-collapse"
										id="navbarNavDropdown"
									>
										{/* <!-- Left nav --> */}
										<ul className="nav navbar-nav ms-auto">
											<li className="nav-item dropdown">
												{" "}
												<p
													className="nav-link dropdown-toggle"
													data-bs-toggle="dropdown"
													style={{ cursor: "pointer" }}
												>
													Academi
												</p>
												<ul className="dropdown-menu">
												{islogged && user?.role === "Academi_Admin"||user?.role=="Admin" && (
            <li>
                <a href="/academi/admin">admindashboard</a>
            </li>
        )}
													<li>
														<a href="/academi/files">files</a>
													</li>
													{/* <li>
														<a href="/academi/admin/managefiles">managefiles</a>
													</li>
													<li>
														<a href="/academi/admin/addfile">addfile</a>
													</li> */}
												</ul>
											</li>
											<li className="nav-item dropdown">
												{" "}
												<p
													className="nav-link dropdown-toggle"
													data-bs-toggle="dropdown"
													style={{ cursor: "pointer" }}
												>
													library
												</p>
												<ul className="dropdown-menu">
											{islogged && user?.role === "Library_Admin"||user?.role=="Admin" &&(
												<li>
												<a href="/library/admin">admindashboard</a>
											</li>
											)}
													<li>
														<a href="/library/user/books">books</a>
													</li>
													<li>
														<a href="/library/getfiles">library files</a>
													</li>
												</ul>
											</li>

											<li className="nav-item dropdown">
												{" "}
												<p
													className="nav-link dropdown-toggle"
													data-bs-toggle="dropdown"
													style={{ cursor: "pointer" }}
												>
													daewa and irshad
												</p>
												<ul className="dropdown-menu">
													{islogged && user?.role=="Daewa_and_Irshad_Admin"||user?.role=="Admin"&&(
														<li>
														<a href="/daewaandirshad/admin">admindashboard</a>
													</li>)}
													
													<li>
														<a href="/daewaandirshad/user/enroll">enroll for course</a>
													</li>
													<li>
														<a href="/daewaandirshad/getfiles">get derse files</a>
													</li>
												</ul>
											</li>
											
											<li className="nav-item dropdown">
												{" "}
												<p
													className="nav-link dropdown-toggle"
													data-bs-toggle="dropdown"
													style={{ cursor: "pointer" }}
												>
													umumaebed
												</p>
												<ul className="dropdown-menu">
													<li>
														<a href="/umumaebed/user/register">
															registerformembership
														</a>
													</li>
													{islogged && user?.role!=="user" ||user?.role=="Admin"&&(
														<li>
														<a href="/umumaebed/admin">
															admin dashboard
														</a>
													</li>
													)}
													
													
												</ul>
											</li>
											<li className="nav-item dropdown">
												{" "}
												<a href="/admin">
												<p
													className="nav-link"
													// data-bs-toggle="dropdown"
													style={{ cursor: "pointer" }}
												>
													admin
												</p>
												</a>
												
												
											</li>
											<li className="nav-item">
												{islogged ? (
													<button className="nav-link">
														<span className="btn btn-danger" onClick={Logout}>logout</span>{" "}
													</button>
												) : (
													<Link to={"/login"} className="nav-link ">
														<span className="btn btn-danger">login</span>
													</Link>
												)}
											</li>
											
										</ul>
									</div>

									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
