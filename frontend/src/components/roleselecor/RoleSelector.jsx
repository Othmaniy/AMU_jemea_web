import React, { useEffect, useState } from "react";
import "./roleselector.css";
import basepath from "../url/url";
function RoleSelector({ setOpenRoleSelector, user }) {
	const [role, setRole] = useState("");
	const [roleResponseMessage, setroleResponseMessage] = useState("");
	// const handleChange=(e)=>{
	//   e.target.name=e.target.value
	// }
	console.log("user from assign role");
	console.log(user);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await basepath.patch(`/auth/assignrole/${user.id}`, {
				role: role,
			});
			setroleResponseMessage(response.data.message);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="role-selector">
				<div className="d-flex justify-content-between mb-3">
					<div>assign role</div>
					<div>
						<button
							className="btn btn-danger"
							onClick={() => setOpenRoleSelector(false)}
						>
							X
						</button>
					</div>
				</div>
				<form id="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<select
							multiple
							name="role"
							style={{ width: "100%" }}
							className="form-control roleselector"
							onChange={(e) => setRole(e.target.value)}
						>
							<option selected value="Admin">
								Admin
							</option>
							<option value="user">user</option>
							<option value="Umumaebed_Admin">umumaebed Admin</option>
							<option value="Library_Admin">library Admin</option>
							<option value="Daewa_and_Irshad_Admin">
								Daewa and irshad admin
							</option>

							<option value="Acadami_Admin">AcadmiAdmin</option>
						</select>
					</div>
					<div className="d-flex justify-content-center">
						<button className="btn btn-danger " type="submit">
							Assign
						</button>
					</div>
					<p className="text-danger text-center fs-5">{roleResponseMessage}</p>
				</form>
			</div>
		</>
	);
}

export default RoleSelector;
