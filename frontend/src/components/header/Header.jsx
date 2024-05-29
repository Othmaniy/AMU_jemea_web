import React from 'react'
// import logoimg from "../../builtinimage/logoresized.png"
import logoimg from "../../assets/builtinimage/logoresized.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';
import getuser from '../Utility/decode';
function Header() {
  console.log(useAuth());
  const check =useAuth();
  console.log(check);
  console.log(check.islogged);
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
    <div className='reactheader'>
<header id="site-header" className="header header-4">
  <div className="top-bar d-md-block ">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-8">
          <div className="topbar-link">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="mailto:themeht23@gmail.com"><i className="far fa-envelope-open"></i>Amu muslim students jemea</a>
              </li>
              <li className="list-inline-item">
                <a href="tel:+912345678900"> <i className="fas fa-mobile-alt"></i>0969043207</a>
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
            <a className="navbar-brand logo" href="index-2.html">
              <img id="logo-img" className="img-fluid" src={logoimg} alt="liogoimf"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              {/* <!-- Left nav --> */}
              <ul className="nav navbar-nav ms-auto">
                
                <li className="nav-item dropdown"> <a className="nav-link " href="#" data-bs-toggle="dropdown">Home</a>
                  {/* <ul className="dropdown-menu">
                    <li><a href="index-2.html">Home 1</a>
                    </li>
                    <li><a href="index-3.html">Home 2</a>
                    </li>
                    <li><a href="index-4.html">Home 3</a>
                    </li>
                    <li><a href="index-5.html">Home 4</a>
                    </li>
                    <li><a href="index-6.html">Home 5</a>
                    </li>
                  </ul> */}
                </li>
                
                <li className="nav">
                <Link to ={'/Academi'} className='nav-link' >
                <span>Academi</span>
                  
                  </Link>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">supportive</a>
                  {/* <ul className="dropdown-menu">
                    <li><a href="chemical-research.html">Chemical Research</a>
                    </li>
                    <li><a href="energy-%26-power-engineering.html">Energy & Power Engineering</a>
                    </li>
                    <li><a href="petroleum-and-gas.html">Petroleum and Gas</a>
                    </li>
                    <li><a href="agriculture-engineering.html">Agriculture Engineering</a>
                    </li>
                    <li><a href="mechanical-engineering.html">Mechanical Engineering</a>
                    </li>
                    <li><a href="civil-engineering.html">Civil Engineering</a>
                    </li>
                  </ul> */}
                </li>
                
                <li className="nav-item  "> 
                <Link to ={'/umumaebed'} className="nav-link" >
                <span>umumaebed</span>
                  {/* <ul className="dropdown-menu w-100 p-3">
                    <li className="container">
                      <div className="row w-100">
                        <div className="col-lg-4 col-12">
                          <ul className="list-unstyled">
                            <li> <a href="shortcode-accordions.html">Accordion</a>
                            </li>
                            <li> <a href="shortcode-button.html">Buttons</a>
                            </li>
                            <li> <a href="shortcode-clients.html">Clients</a>
                            </li>
                            <li> <a href="shortcode-counter.html">Counter</a>
                            </li>
                            <li> <a href="shortcode-call-to-action.html">Call to action</a>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="col-lg-4 col-12">
                          <ul className="list-unstyled">
                            <li> <a href="shortcode-featured-box.html">Featured Box</a>
                            </li>
                            <li> <a href="shortcode-tab.html">Tabs</a>
                            </li>
                            <li> <a href="shortcode-blog-post.html">Post Style</a>
                            </li>
                            <li> <a href="shortcode-pricing.html">Pricing tables</a>
                            </li>
                            <li> <a href="shortcode-progress-bar.html">Progress Bar</a>
                            </li>
                          </ul>
                        </div>
                     
                        <div className="col-lg-4 col-12">
                          <ul className="list-unstyled">
                            <li> <a href="shortcode-social-icon.html">Social icon</a>
                            </li>
                            <li> <a href="shortcode-testimonials.html">Testimonials</a>
                            </li>
                            <li> <a href="shortcode-team.html">Team</a>
                            </li>
                            <li> <a href="shortcode-heading.html">Heading Style</a>
                            </li>
                            <li> <a href="shortcode-typography.html">Typography</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                
                  </ul> */}
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={"/login"} className='nav-link ' >
                    <span >login</span>
                  </Link>
                </li>
                <li className="nav-item  "> 
                <Link to ={'/registeruser'} className="nav-link" >
                <span>register</span>
                  {/* <ul className="dropdown-menu w-100 p-3">
                    <li className="container">
                      <div className="row w-100">
                        <div className="col-lg-4 col-12">
                          <ul className="list-unstyled">
                            <li> <a href="shortcode-accordions.html">Accordion</a>
                            </li>
                            <li> <a href="shortcode-button.html">Buttons</a>
                            </li>
                            <li> <a href="shortcode-clients.html">Clients</a>
                            </li>
                            <li> <a href="shortcode-counter.html">Counter</a>
                            </li>
                            <li> <a href="shortcode-call-to-action.html">Call to action</a>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="col-lg-4 col-12">
                          <ul className="list-unstyled">
                            <li> <a href="shortcode-featured-box.html">Featured Box</a>
                            </li>
                            <li> <a href="shortcode-tab.html">Tabs</a>
                            </li>
                            <li> <a href="shortcode-blog-post.html">Post Style</a>
                            </li>
                            <li> <a href="shortcode-pricing.html">Pricing tables</a>
                            </li>
                            <li> <a href="shortcode-progress-bar.html">Progress Bar</a>
                            </li>
                          </ul>
                        </div>
                     
                        <div className="col-lg-4 col-12">
                          <ul className="list-unstyled">
                            <li> <a href="shortcode-social-icon.html">Social icon</a>
                            </li>
                            <li> <a href="shortcode-testimonials.html">Testimonials</a>
                            </li>
                            <li> <a href="shortcode-team.html">Team</a>
                            </li>
                            <li> <a href="shortcode-heading.html">Heading Style</a>
                            </li>
                            <li> <a href="shortcode-typography.html">Typography</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                
                  </ul> */}
                  </Link>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Project</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown dropdown-submenu"> <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                      Project Grid
                    </a>
                      <ul className="dropdown-menu">
                        <li><a href="project-grid-2.html">Grid 2</a>
                        </li>
                        <li><a href="project-grid-3.html">Grid 3</a>
                        </li>
                        <li><a href="project-grid-4.html">Grid 4</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu"> <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                      Project Masonry
                    </a>
                      <ul className="dropdown-menu">
                        <li><a href="project-masonary-grid-2.html">Grid 2</a>
                        </li>
                        <li><a href="project-masonary-grid-3.html">Grid 3</a>
                        </li>
                        <li><a href="project-masonary-grid-4.html">Grid 4</a>
                        </li>
                        <li><a href="project-masonary-full-width.html">FullWidth</a>
                        </li>
                      </ul>
                    </li>
                    <li> <a href="project-details.html">Project Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Contact</a>
                  <ul className="dropdown-menu">
                    <li><a href="contact-1.html">Contact 1</a>
                    </li>
                    <li><a href="contact-2.html">Contact 2</a>
                    </li>
                    <li><a href="contact-3.html">Contact 3</a>
                    </li>
                  </ul>
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
  )
}

export default Header