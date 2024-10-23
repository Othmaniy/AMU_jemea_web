import React from "react";
import i1 from "../../assets/template_assets/images/portfolio/masonry/01.jpg";
import i2 from "../../assets/template_assets/images/portfolio/masonry/02.jpg";
import i3 from "../../assets/template_assets/images/portfolio/masonry/03.jpg";
import i4 from "../../assets/template_assets/images/portfolio/masonry/04.jpg";
import i5 from "../../assets/template_assets/images/portfolio/masonry/05.jpg";
import i6 from "../../assets/template_assets/images/portfolio/masonry/06.jpg";
import i7 from "../../assets/template_assets/images/portfolio/masonry/07.jpg";
import i8 from "../../assets/template_assets/images/portfolio/masonry/08.jpg";
import i9 from "../../assets/template_assets/images/portfolio/masonry/09.jpg";
import i10 from "../../assets/template_assets/images/portfolio/masonry/10.jpg";
(".");
// import i1large from "../../template_assets/images/portfolio/large/01.jpg"
import i1large from "../../assets/template_assets/images/portfolio/large/01.jpg";
// import i2large from "../../template_assets/images/portfolio/large/02.jpg"
// import i3large from "../../template_assets/images/portfolio/large/03.jpg"
// import i4large from "../../template_assets/images/portfolio/large/04.jpg"
// import i5large from "../../template_assets/images/portfolio/large/05.jpg"
function Gallery() {
	return (
		<>
			<section className="overflow-hidden">
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="section-title">
								{/* <h2 className="title">Latest <span> Projects</span></h2> */}
								{/* <p className="mb-0">Misto Provide Greate Services for elit. Excepturi vero aliquam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
							</div>
						</div>
					</div>
					{/* <div className="row text-center">
      <div className="col-md-12">
        <div className="portfolio-filter">
          <button data-filter="" className="is-checked">All</button>
          <button data-filter=".cat1">Mechanical</button>
          <button data-filter=".cat2">Plumbing</button>
          <button data-filter=".cat3">Welding</button>
          <button data-filter=".cat4">Chemical</button>
        </div>
      </div>
    </div> */}
				</div>
				<div className="container-fluid p-0">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="masonry row columns-4 g-0 popup-gallery">
								<div className="grid-sizer"></div>
								<div className="masonry-brick cat3">
									<div className="portfolio-item">
										<img src={i1} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a
													className="popup popup-img"
													href="images/portfolio/large/01.jpg"
												>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="masonry-brick cat3">
									<div className="portfolio-item">
										<img src={i3} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a
													className="popup popup-img"
													href="images/portfolio/large/03.jpg"
												>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="masonry-brick cat4">
									<div className="portfolio-item">
										<img src={i2} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a
													className="popup popup-img"
													href="images/portfolio/large/02.jpg"
												>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="masonry-brick cat2">
									<div className="portfolio-item">
										<img src={i4} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a
													className="popup popup-img"
													href="images/portfolio/large/04.jpg"
												>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="masonry-brick cat1">
									<div className="portfolio-item">
										<img src={i7} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a
													className="popup popup-img"
													href="images/portfolio/large/07.jpg"
												>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="masonry-brick cat1">
									<div className="portfolio-item">
										<img src={i8} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a
													className="popup popup-img"
													href="images/portfolio/large/08.jpg"
												>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="masonry-brick cat3">
									<div className="portfolio-item">
										<img src={i6} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a
													className="popup popup-img"
													href="images/portfolio/large/06.jpg"
												>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="masonry-brick cat4">
									<div className="portfolio-item">
										<img src={i5} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a className="popup popup-img" href={i1large}>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="masonry-brick cat4">
									<div className="portfolio-item">
										<img src={i9} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a
													className="popup popup-img"
													href="images/portfolio/large/09.jpg"
												>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="masonry-brick cat1">
									<div className="portfolio-item">
										<img src={i10} alt="" />
										<div className="portfolio-hover">
											<div className="portfolio-title">
												{" "}
												<span>Welding, Chemical</span>
												<h4>Project Title</h4>
											</div>
											<div className="portfolio-icon">
												<a
													className="popup popup-img"
													href="images/portfolio/large/10.jpg"
												>
													{" "}
													<i className="flaticon-magnifier"></i>
												</a>
												<a
													className="popup portfolio-link"
													target="_blank"
													href="project-details.html"
													rel="noreferrer"
												>
													{" "}
													<i className="flaticon-broken-link-1"></i>
												</a>
											</div>
										</div>
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

export default Gallery;
