import React, { useState } from "react";
import basepath from "../../../../components/url/url";
import "./register.css";
import { useAuth } from "../../../../components/Context/Authcontext";

function Registeruser() {
	const [name,setName]=useState('')
	const[isNameFocused,setIsNameFocused]=useState(false)
	const [nameError,setNameError]=useState('')
	const [lastname,setLastname]=useState("")
	const [islastNameFocused,setIsLastNameFocused]=useState(false)
	const[lastNameError,setLastNameError]=useState('')
	const [password,setPassword]=useState("")
	const [isPasswordFocused,setIsPasswordFocused]=useState(false)
	const [passwordError,setPasswordError]=useState("")
	const [phoneNumber,setPhoneNumber]=useState("")
	const [isPhoneNumberFocused,setIsPhoneNumberFocused]=useState(false)
	const [phoneNUmberError,setPhoneNumberError]=useState("")
	const [department,setDepartment]=useState('')
	const [isdepartmentFocused,setIsDepartmentFocused]=useState(false)
	const [departmentError,setDepartmentError]=useState('')
	const [batch,setBatch]=useState('')
	const [isbatchFocused,setIsBatchFocused]=useState(false)
	const [batchError,setBatchError]=useState('')
	const [blockNumber,setBlockNumber]=useState('')
	const [isblockNumberFocused,setIsBlockNumberFocused]=useState(false)
	const [blockNumberError,setBlockNumberError]=useState('')
	const [dormNumber,setDormNumber]=useState('')
	const [isdormNumberFocused,setISDormNumberFocused]=useState(false)
	const [dormNumberError,setDormNumberError]=useState('')
	const [emergencyPhone,setEmergencyPhone]=useState("")
	const [isemergencyPhoneFocused,setIsEmergencyPhoneFocused]=useState(false)
	const [emergencyPhoneError,setEmergencyPhoneError]=useState("")

	// const [form, setForm] = useState({});
	const [reponsemessage, setResponsemessage] = useState("");
	const[isAlumni,setIsAlumni]=useState(false)
	const user = useAuth();
	const token = user?.currentuser?.token;
	// console.log("user from register component"+user);
	// const handleChange = (e) => {
	// 	setForm({ ...form, [e.target.name]: e.target.value });
	// };
	// console.log(form);
	const handleCheckboxChange = (e) => {
		setIsAlumni(e.target.checked);
		// setForm({ ...form, alumni: e.target.checked });
	  };

	const handlesubmit = async (e) => {
		e.preventDefault();
		let valid =true;
		const ethiopianPhoneRegex = /^(?:\+?251|0)?9\d{8}$/;
		if(!name){
			setNameError("first name required")
			valid = false
		}else{
			setNameError("")
		}
		if(!lastname){
			setLastNameError("last name required")
			valid=false
		}
		else{
			setLastNameError('')
		}
		if(!phoneNumber){
			setPhoneNumberError("phone number required")
			valid = false
		}
		if (!phoneNumber) {
			setPhoneNumberError("Phone number required");
			valid = false;
		  } else if (!ethiopianPhoneRegex.test(phoneNumber)) {
			setPhoneNumberError("Invalid Ethiopian phone number format");
			valid = false;
		  } else {
			setPhoneNumberError("");
		  }
		if(!password){
			setPasswordError("password required ")
			valid =false
		}
		if(!batch){
			setBatchError("batch required")
			valid = false
		}
		if(!department){
			setDepartmentError("department required")
			valid = false
		}
		if(!emergencyPhone){
			setEmergencyPhoneError("emergency phone required")
			valid = false 
		}
		if(!valid){
			return
		}
		const form ={
			name,
			lastname,
			phoneNumber,
			password,
			batch,
			department,
			blockNumber,
			dormNumber,
			emergencyPhone,
			alumni: e.target.checked 

		}

		try {
			const response = await basepath.post("/auth/createtempaccount",{ ...form,alumni:isAlumni});
			console.log(response);
			setResponsemessage(response.data.message);
		} catch (err) {
			console.log(err);
			if (err.response) {
				console.log(err.response.data.message);
				setResponsemessage(err.response.data.message);
			} else {
				setResponsemessage("An error occurred. Please try again.");
			}
		}
	};
	const getInputStyle = (isFocused, value) => ({
		borderColor: isFocused ? "rgb(232, 75, 18)" : "rgb(74, 74, 82)",
		borderWidth: "3px", // keep the same border width
		backgroundColor: isFocused ? "#f0f8ff" : value ? "white" : "white", // background stays white when not focused
	  });
	  

	  const handleFocus = (setstate) => {
		setstate(true);
	  };
	  const handleBlur = (setstate) => {
		setstate(false);
	  };
	return (
		<>
			<section className="contact pb-lg-0 z-index-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="contact-main white-bg p-3">
								<h2 className="title mb-4">
									create <span>account</span>
								</h2>
								<form id="contact-form" onSubmit={handlesubmit}>
									<div className="messages"></div>
									<div className="form-wrapper d-flex flex-row gap-3">
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="name"
												className="form-control"
												placeholder="Name"
												onChange={(e)=>setName(e.target.value)}
												onFocus={() => handleFocus(setIsNameFocused)}
												onBlur={()=>{
												  handleBlur(setIsNameFocused)
												}}
												style={getInputStyle(isNameFocused,name)}
											/>
										{nameError && <div className="help-block with-errors" style={{fontSize:"14px"}} role="alert">{nameError}</div>}
										</div>
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="lastname"
												className="form-control"
												placeholder="Last Name"
												
												data-error="Username is required."
												onChange={(e)=>{setLastname(e.target.value)}}
												onFocus={() => handleFocus(setIsLastNameFocused)}
												onBlur={()=>{
												  handleBlur(setIsLastNameFocused)
												}}
												style={getInputStyle(islastNameFocused,lastname)}
											/>
											{lastNameError && <div className="help-block with-errors" style={{fontSize:"14px"}} role="alert">{lastNameError}</div>}
										</div>
									</div>

									<div className="form-wrapper d-flex flex-row gap-3">
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="phoneNumber"
												className="form-control"
												placeholder="phone Number"
												data-error="phone Number is required."
												onChange={(e)=>setPhoneNumber(e.target.value)}
												onFocus={() => handleFocus(setIsPhoneNumberFocused)}
												onBlur={()=>{
												  handleBlur(setIsPhoneNumberFocused)
												}}
												style={getInputStyle(isPhoneNumberFocused,phoneNumber)}
											/>
											{phoneNUmberError && <div className="help-block with-errors" style={{fontSize:"14px"}} role="alert">{phoneNUmberError}</div>}
										</div>
										<div className="form-group">
											<input
												id="form_name"
												type="password"
												name="password"
												className="form-control"
												placeholder="Password"
											
												data-error="Password is required."
												onChange={(e)=>setPassword(e.target.value)}
												onFocus={() => handleFocus(setIsPasswordFocused)}
												onBlur={()=>{
												  handleBlur(setIsPasswordFocused)
												}}
												style={getInputStyle(isPasswordFocused,password)}
												
											/>
											{passwordError && <div className="help-block with-errors" style={{fontSize:"14px"}} role="alert">{passwordError}</div>}
										</div>
									</div>

									<div className="form-wrapper d-flex flex-row gap-3">
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="batch"
												className="form-control"
												placeholder="Batch"
												onChange={(e)=>{setBatch(e.target.value)}}
												onFocus={() => handleFocus(setIsBatchFocused)}
												onBlur={()=>{
												  handleBlur(setIsBatchFocused)
												}}
												style={getInputStyle(isbatchFocused,batch)}
											/>
											{batchError && <div className="help-block with-errors" style={{fontSize:"14px"}} role="alert">{batchError}</div>}
										</div>
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="department"
												className="form-control"
												placeholder="Department"
												
												data-error="Department is required."
												onChange={(e)=>setDepartment(e.target.value)}
												onFocus={() => handleFocus(setIsDepartmentFocused)}
												onBlur={()=>{
												  handleBlur(setIsDepartmentFocused)
												}}
												style={getInputStyle(isdepartmentFocused,department)}
											/>
										{departmentError && <div className="help-block with-errors" style={{fontSize:"14px"}} role="alert">{departmentError}</div>}
										</div>
									</div>

									<div className="form-group">
										<input
											id="form_phone"
											type="text"
											name="blockNumber"
											className="form-control"
											placeholder="Block Number"
											
											onChange={(e)=>setBlockNumber(e.target.value)}
											onFocus={() => handleFocus(setIsBlockNumberFocused)}
											onBlur={()=>{
												handleBlur(setIsBlockNumberFocused)
												}}
												style={getInputStyle(isblockNumberFocused,blockNumber)}
										/>
									{/* {blockNUmberError && <div className="help-block with-errors">{blockNUmberError}</div>} */}
									</div>
									<div className="form-group">
										<input
											id="form_phone"
											type="text"
											name="dormNumber"
											className="form-control"
											placeholder="Dorm Number"
											onChange={(e)=>setDormNumber(e.target.value)}
											onFocus={() => handleFocus(setISDormNumberFocused)}
												onBlur={()=>{
												  handleBlur(setISDormNumberFocused)
												}}
												style={getInputStyle(isdormNumberFocused,dormNumber)}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											id="form-phone"
											type="text"
											name="emergencyPhone"
											className="form-control"
											placeholder="Emergency Phone"
											onChange={(e)=>setEmergencyPhone(e.target.value)}
											onFocus={() => handleFocus(setIsEmergencyPhoneFocused)}
												onBlur={()=>{
												  handleBlur(setIsEmergencyPhoneFocused)
												}}
												style={getInputStyle(isemergencyPhoneFocused,emergencyPhone)}
										/>
										{emergencyPhoneError && <div className="help-block with-errors" style={{fontSize:"14px"}} role="alert">{emergencyPhoneError}</div>}
									</div>
									<div className="form-group">
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px',fontSize:"18px" }}>
        <input
          type="checkbox"
          checked={isAlumni} // Bind checkbox state
          onChange={handleCheckboxChange} // Handle checkbox change
		  style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            accentColor: '#4CAF50' // Changes the color of the checkbox
          }}
        />
        Are you Alumni ?
      </label>
    </div>
											
									<button type="submit" className="btn btn-border btn-radius">
										<span>Register</span>
									</button>
									<p className="mt-3" style={{ color: "green" }}>
										{reponsemessage}
									</p>
									<p className="mt-3" style={{fontSize:"19px"}}> you have an account  ? <span><a href="/login" style={{color:"orangered"}}>login</a></span></p>
								</form>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 form-info mt-4 "
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<h2 className="title">
								important  <span>Reminder</span> <br />
							</h2>
							<p className="text-center p-3">
								you have registered as temporary user doesnot mean you can login
								with your account unless you are approved by super
								admin(amir).your account wiil be approved within 24 hours after
								your registration and you can try to login after that.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Registeruser;
