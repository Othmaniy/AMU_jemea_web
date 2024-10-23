import React from 'react'

function Libraryhome() {
  return (
	<section className="grey-bg pattern">
	<div className="container">
		<div className="row g-0 ">
			<div className="col-lg-4 col-md-6 p-3">
				
					<div className="featured-item bottom-icon">
						<div className="featured-title text-uppercase">
							<h5>Total Number of Books</h5>
						</div>
						<div className="featured-desc">
						<h1>20</h1>
						</div>
						<div className="featured-icon">
							{" "}
							<i className="fa fa-book"></i>

						</div>{" "}
						<span>
						<i className="fa fa-book"></i>
						</span>
					</div>
				
			</div>
			<div className="col-lg-4 col-md-6 p-3">
				
					<div className="featured-item bottom-icon">
						<div className="featured-title text-uppercase">
							<h5>Total Uploaded Files</h5>
						</div>
						<div className="featured-desc">
						<h1>35</h1>
						</div>
						<div className="featured-icon">
							{" "}
							<i className="fa fa-file"></i>

						</div>{" "}
						<span>
						<i className="fa fa-file"></i>
						</span>
					</div>
				
			</div>
			<div className="col-lg-4 col-md-6 p-3">
				
					<div className="featured-item bottom-icon">
						<div className="featured-title text-uppercase">
							<h5>Books reserved</h5>
						</div>
						<div className="featured-desc">
						<h1>6</h1>
						</div>
						<div className="featured-icon">
							{" "}
							<i className="fa fa-book"></i>
						</div>{" "}
						<span>
						<i className="fa fa-book"></i>
						</span>
					</div>
				
			</div>
			<div className="col-lg-4 col-md-6 p-3">
				<div className="featured-item bottom-icon">
					<div className="featured-title text-uppercase">
						<h5>Books Available</h5>
					</div>
					<div className="featured-desc">
						<h1>14</h1>
					</div>
					<div className="featured-icon">
						{" "}
						<i className="fa fa-book"></i>
					</div>{" "}
					<span>
					<i className="fa fa-book"></i>
					</span>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Libraryhome