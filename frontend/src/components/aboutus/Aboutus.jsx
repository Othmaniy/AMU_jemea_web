import React from "react";
import aboutusimage from "../../assets/builtinimage/jemealogo.jpg";

function Aboutus() {
	return (
		<>
			<div className="container position-relative">
				<div className="row align-items-center">
					<div className="col-lg-5 col-12">
						<img className="img-fluid rounded w-75" src={aboutusimage} alt="" />
						<div className="theme-bg rounded p-4 mt-n5 z-index-1 w-75 ms-auto">
							<div className="section-title mb-0">
								<h2 className="mb-0 font-w-5 text-white text-center">
									above 20 years
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
						<div className="section-title">
							<h6>About Us</h6>
							<h2 className="title-2">
								arbaminch university muslim students union
							</h2>
							<p className="mb-0">
								በ አርባ ምንጭ ዩኒቨርሲቲ ሙስሊም ተማሪወች የተቋቋመው ጀመአችን ብዙ ስራወችን ሲሰራ ቆይቷል እየሰራም
								ይገኛል ከነዚህም ዉስጥ{" "}
							</p>
						</div>
						<div className="row g-0">
							<div className="col-md-6 col-sm-6">
								<div className="featured-item left-icon ">
									<div className="featured-icon">
										{" "}
										<i className="flaticon-innovation text-theme"></i>
									</div>
									<div className="featured-title text-uppercase mr-5">
										<h5>
											ተማሪወች ከ ትምህርት ሂወታችው በተጨማሪ ለ አሂራ ስንቅ የሚሆናችውን ነገር እንዲይዙ ማድረግ{" "}
										</h5>
									</div>
									{/* <div className="featured-desc">
            <p>Fringilla augue at maximus vestibulum. Nam pulvinar vitae neque.</p>
          </div> */}
								</div>
							</div>
							<div className="col-md-6 col-sm-6 mt-5 mt-sm-0">
								<div className="featured-item left-icon">
									<div className="featured-icon">
										{" "}
										<i className="flaticon-innovation-1 text-theme"></i>
									</div>
									<div className="featured-title text-uppercase">
										<h5>
											ተማሪወች ኢስላማዊ ወንድማማችነትን ተጠቅመው እርስ በ እርስ እንዲግባቡ እና እንዲተጋገዙ
											ማድረግ{" "}
										</h5>
									</div>
									<div className="featured-desc">
										<p>
											Fringilla augue at maximus vestibulum. Nam pulvinar vitae
											neque.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 mt-5">
								<div className="featured-item left-icon">
									<div className="featured-icon">
										{" "}
										<i className="flaticon-employee text-theme"></i>
									</div>
									<div className="featured-title text-uppercase">
										<h5>Expert Team</h5>
									</div>
									<div className="featured-desc">
										<p>
											Fringilla augue at maximus vestibulum. Nam pulvinar vitae
											neque.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-sm-6 mt-5">
								<div className="featured-item left-icon">
									<div className="featured-icon">
										{" "}
										<i className="flaticon-chat-bubble text-theme"></i>
									</div>
									<div className="featured-title text-uppercase">
										<h5>Always Connected</h5>
									</div>
									<div className="featured-desc">
										<p>
											Fringilla augue at maximus vestibulum. Nam pulvinar vitae
											neque.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Aboutus;
