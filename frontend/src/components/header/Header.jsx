import React from "react";
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
 const user=useAuth()
 console.log("header");
 console.log(user);

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

  return (
    <div className="reactheader">
      <header id="site-header" className="header header-4">
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
        <div id="header-wrap">
          <div className="container">
            <div className="row">
              <div className="col">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand logo" href="/">
                    <img
                      id="logo-img"
                      className="header-4"
                      src={logoimg}
                      alt="liogoimf"
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
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
                     
					  
					  <li className="nav-item">
                        <Link to={"/registeruser"} className="nav-link ">
                          <span>register</span>
                        </Link>
                      </li>

					  <li className="nav-item dropdown">
                        {" "}
                        <p
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
						  style={{cursor:"pointer"}}
                        >
                         Academi
                        </p>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="/academi/admin">admindashboard</a>
                          </li>
                          <li>
                            <a href="/academi/files">files</a>
                          </li>
                          <li>
                            <a href="/academi/admin/managefiles">managefiles</a>
                          </li>
                          <li>
                            <a href="/academi/admin/addfile">addfile</a>
                          </li>
                          
                        </ul>
                      </li>
					  <li className="nav-item dropdown">
                        {" "}
                        <p
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
						  style={{cursor:"pointer"}}
                        >
                          library
                        </p>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/addbook">add book</a>
                          </li>
                          <li>
                            <a href="/managebooks">manage books</a>
                          </li>
                          <li>
                            <a href="/books">books</a>
                          </li>
                        </ul>
                      </li>

					  <li className="nav-item dropdown">
                        {" "}
                        <p
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
						  style={{cursor:"pointer"}}
                        >
                          daewa and irshad
                        </p>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/daewaandirshad/admin">admindashboard</a>
                          </li>
                          <li>
                            <a href="/daewaandirshad/admin/addcourse">addcourse</a>
                          </li>
                          <li>
                            <a href="/daewaandirshad/admin/managecourse">managecourse</a>
                          </li>
                          <li>
                            <a href="/daewaandirshad/admin/manageusers">manageuser</a>
                          </li>
                          <li>
                            <a href="/daewaandirshad/user/enroll">enroll</a>
                          </li>
                        </ul>
                      </li>
                     
					  {/* heavily nested navs  */}
                      <li className="nav-item dropdown">
                        {" "}
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Project
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown dropdown-submenu">
                            {" "}
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              Project Grid
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="project-grid-2.html">Grid 2</a>
                              </li>
                              <li>
                                <a href="project-grid-3.html">Grid 3</a>
                              </li>
                              <li>
                                <a href="project-grid-4.html">Grid 4</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown dropdown-submenu">
                            {" "}
                            <a
                              href="#"
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              Project Masonry
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="project-masonary-grid-2.html">
                                  Grid 2
                                </a>
                              </li>
                              <li>
                                <a href="project-masonary-grid-3.html">
                                  Grid 3
                                </a>
                              </li>
                              <li>
                                <a href="project-masonary-grid-4.html">
                                  Grid 4
                                </a>
                              </li>
                              <li>
                                <a href="project-masonary-full-width.html">
                                  FullWidth
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <a href="project-details.html">Project Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        {" "}
                        <p
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
						  style={{cursor:"pointer"}}
                        >
                         umumaebed
                        </p>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/umumaebed/user/register">registerformrmbership</a>
                          </li>
                          {/* <li>
                            <a href="contact-2.html">Contact 2</a>
                          </li>
                          <li>
                            <a href="contact-3.html">Contact 3</a>
                          </li> */}
                        </ul>
                      </li>
					  <li className="nav-item">
						{user.islogged?<button className="nav-link"><span className="btn btn-danger">logout</span> </button>:<Link to={"/login"} className="nav-link ">
                          <span className="btn btn-danger">login</span>
                        </Link>}
						
                        
                      </li>
                    </ul>
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
