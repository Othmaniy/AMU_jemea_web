import React from "react";
import campusimage from "../../assets/builtinimage/david-rodrigo-kZ1zThg6G40-unsplash.jpg"
function Maincampus() {
	return (
		<>
		
			<section className="pt-4">
				<div className="image-container mt-0 pt-0 mb-4" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
					<img className="mt-0 pt-0" src={campusimage} alt=""  style={{width:"400px",height:"contain",borderRadius:"10px"}}/>
				</div>
				<div className="container">
					<p className="campus-intro text-center">
						ሜን ካምፓስ የ ተክኖሎጅ ካምፓስ ተብሎ ይጠራል በ ዉስጡም የ ተክኖሎጅ ኢንስቲቲውት እና የ ውሃ ተክኖሎጅ
						ኢንስቲቲውት ዲፓርትመንቶች ይሰጡብታል። መገኛውም ደግሞ በ አርባምንጭ ከተማ መግቢያ ላይ ነው ከዚህ በታች
						የተዘረዘሩት በ ካምፓሱ የ ሚሰጡ ዲፓርትመንቶች ናቸው
					</p>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="accordion" id="accordion">
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingOne">
										<button
											className="accordion-button"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											aria-expanded="true"
											aria-controls="collapseOne"
										>
											Software Engineering
										</button>
									</h2>
									<div
										id="collapseOne"
										className="accordion-collapse collapse show"
										aria-labelledby="headingOne"
										data-bs-parent="#accordion"
									>
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eiusmodas temporo incididunt ut labore et dolore
											magna aliqua. Ut enim ad minim veniam, Duis aute dolor in
											reprehenderit.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingTwo">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="false"
											aria-controls="collapseTwo"
										>
											Electrical Engineering
										</button>
									</h2>
									<div
										id="collapseTwo"
										className="accordion-collapse collapse"
										aria-labelledby="headingTwo"
										data-bs-parent="#accordion"
									>
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eiusmodas temporo incididunt ut labore et dolore
											magna aliqua. Ut enim ad minim veniam, Duis aute dolor in
											reprehenderit.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingThree">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseThree"
											aria-expanded="false"
											aria-controls="collapseThree"
										>
											Mechanical Engineering
										</button>
									</h2>
									<div
										id="collapseThree"
										className="accordion-collapse collapse"
										aria-labelledby="headingThree"
										data-bs-parent="#accordion"
									>
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eiusmodas temporo incididunt ut labore et dolore
											magna aliqua. Ut enim ad minim veniam, Duis aute dolor in
											reprehenderit.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingFour">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseFour"
											aria-expanded="false"
											aria-controls="collapseFour"
										>
											Civil Engineering
										</button>
									</h2>
									<div
										id="collapseFour"
										className="accordion-collapse collapse"
										aria-labelledby="headingThree"
										data-bs-parent="#accordion"
									>
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eiusmodas temporo incididunt ut labore et dolore
											magna aliqua. Ut enim ad minim veniam, Duis aute dolor in
											reprehenderit.
										</div>
									</div>
								</div>
								
								<div className="accordion-item">
									<h2 className="accordion-header" id="headingSix">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseSix"
											aria-expanded="false"
											aria-controls="collapseSix"
										>
											Water resource and Irrigation Engineering
										</button>
									</h2>
									<div
										id="collapseSix"
										className="accordion-collapse collapse"
										aria-labelledby="headingSix"
										data-bs-parent="#accordion"
									>
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eiusmodas temporo incididunt ut labore et dolore
											magna aliqua. Ut enim ad minim veniam, Duis aute dolor in
											reprehenderit.
										</div>
									</div>
								</div>

								
								
								
								{/* end of sections */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Maincampus;
