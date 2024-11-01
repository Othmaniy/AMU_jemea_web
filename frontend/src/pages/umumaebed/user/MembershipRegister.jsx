import React, { useState } from "react";
import "./membershipregister.css";
import { useAuth } from "../../../components/Context/Authcontext";
function MembershipRegister() {
	// const [amount,setAmount]=useState("")
	// console.log(amount);
	const { currentuser, loading } = useAuth();
	const [responseMessage,setResponsemessage]=useState("")
	const [formAmount, setFormAmount] = useState("");
	console.log(formAmount);
	const handleFormregistration = async (e) => {
		e.preventDefault();
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentuser.token,
			},
			body: JSON.stringify({ amount: formAmount }),
		};
		try {
			const response = await fetch(
				`http://localhost:5000/api/umumaebed/ownmemberregister`,
				requestOptions,
			);
			const data = await response.json();
			
			console.log(data);
			console.log(data.message);
			setResponsemessage(data.message)
			alert(responseMessage)
			// if (response.ok) {
			//     setEnrollResponseMessage(data.message);
			// } else {
			//     setEnrollResponseMessage(data.message);
			// }
		} catch (error) {
			console.log(error);
		}
	};
	const handleClick = async (amount) => {
		if (!currentuser || !currentuser.token) {
			console.error("Token not found");
			return;
		}
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentuser.token,
			},
			body: JSON.stringify({ amount: amount }),
		};
		console.log(requestOptions);
		try {
			const response = await fetch(
				`http://localhost:5000/api/umumaebed/ownmemberregister`,
				requestOptions,
			);
			const data = await response.json();

			console.log(data);
			console.log(data.message);
			setResponsemessage(data.message)
			alert(data.message)
			// if (response.ok) {
			//     setEnrollResponseMessage(data.message);
			// } else {
			//     setEnrollResponseMessage(data.message);
			// }
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<section className="mb-0 ">
				<div className="container">
				
					<div className="row">
						
						<div className="col-lg-4 col-md-12">
							<div className="price-table">
								<div className="price-header">
									<h4 className="price-title">level 1</h4>
									<div className="price-value">
										<h2>
											<span className="price-dollar">birr </span>50
										</h2>
									</div>{" "}
									<span className="price-month">/Month</span>
								</div>
								<div className="price-list">
									<ul className="list-unstyled">
										<li>
											<i className="fas fa-check"></i> የ ኡሙ ማእበድ አባል በመሆን በየወሩ
											50 ብር ድጋፍ ያድርጉ
										</li>
										<li>
											<i className="fas fa-check"></i> ብሩን በ አካውንት ወይም በ የወሩ በ
											ሚሰበስቡ ልጆች በኩል ገቢ ማድረግ ይችላሉ{" "}
										</li>
										<li>
											<i className="fas fa-check"></i> ለመመዝገብ ከታች ያለውን በተን ይጫኑ
										</li>
									</ul>
								</div>

								<button
									className="btn btn-border btn-circle mt-4"
									onClick={() => handleClick(50)}
								>
									ይመዝገቡ
								</button>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
							<div className="price-table">
								<div className="price-header">
									<h4 className="price-title">level 2</h4>
									<div className="price-value">
										<h2>
											<span className="price-dollar">birr</span>100
										</h2>
									</div>{" "}
									<span className="price-month">/Month</span>
								</div>
								<div className="price-list">
									<ul className="list-unstyled">
										<li>
											<i className="fas fa-check"></i> የ ኡሙ ማእበድ አባል በመሆን በየወሩ
											100 ብር ድጋፍ ያድርጉ
										</li>
										<li>
											<i className="fas fa-check"></i> ብሩን በ አካውንት ወይም በ የወሩ በ
											ሚሰበስቡ ልጆች በኩል ገቢ ማድረግ ይችላሉ{" "}
										</li>
										<li>
											<i className="fas fa-check"></i> ለመመዝገብ ከታች ያለውን በተን ይጫኑ
										</li>
									</ul>
								</div>
								<button
									className="btn btn-border btn-circle mt-4"
									onClick={() => handleClick(100)}
								>
									ይመዝገቡ
								</button>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
							<div className="price-table">
								<div className="price-header">
									<h4 className="price-title">Premium</h4>
									<div className="price-value">
										<h2>
											<span className="price-dollar">birr</span>200
										</h2>
									</div>{" "}
									<span className="price-month">/Month</span>
								</div>
								<div className="price-list">
									<ul className="list-unstyled">
										<li>
											<i className="fas fa-check"></i> የ ኡሙ ማእበድ አባል በመሆን በየወሩ
											200 ብር ድጋፍ ያድርጉ
										</li>
										<li>
											<i className="fas fa-check"></i> ብሩን በ አካውንት ወይም በ የወሩ በ
											ሚሰበስቡ ልጆች በኩል ገቢ ማድረግ ይችላሉ{" "}
										</li>
										<li>
											<i className="fas fa-check"></i> ለመመዝገብ ከታች ያለውን በተን ይጫኑ
										</li>
									</ul>
								</div>
								<button
									className="btn btn-border btn-circle mt-4"
									onClick={() => handleClick(200)}
								>
									ይመዝገቡ
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="form_wrapper mt-0 pt-0">
				<h3 className="text-center">ሌላ የገንዘብ መጠን እዚህ ያስገቡ</h3>
				<form className="umumaebedform" onSubmit={handleFormregistration}>
					<div className="form-group um">
						<input
							id=""
							type="text"
							name=""
							className="form-control "
							placeholder=" የገንዘብ መጠን እዚህ ያስገቡ"
							onChange={(e) => setFormAmount(e.target.value)}
						/>
						<div className="help-block with-errors"></div>
					</div>
					<button type="submit" className="btn btn-border btn-radius">
						submit
					</button>
				</form>
			</section>
		</>
	);
}

export default MembershipRegister;
