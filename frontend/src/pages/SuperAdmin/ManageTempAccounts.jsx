import React, { useEffect, useState } from "react";
import basepath from "../../components/url/url";
import "./manageaccount.css";
import { useAuth } from "../../components/Context/Authcontext";

function ManageTempAccounts() {
	const [tempAccounts, setTempAccounts] = useState([]);
	const [users, setUsers] = useState([]);
	const [approveResponseMessage, setApproveResponseMessage] = useState("");
	const user = useAuth();

	const token = user?.currentuser?.token;
	console.log("token from temp accunts");
	console.log(token);
	useEffect(() => {
		const fetchusers = async () => {
			try {
				const response = await basepath.get("auth/getusers");
				setUsers(response.data.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchusers();
	}, []);
	useEffect(() => {
		const fetchTempUsers = async () => {
			try {
				const response = await basepath.get("/auth/gettempaccounts");
				setTempAccounts(response.data.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchTempUsers();
	}, []);
console.log(users);
console.log(tempAccounts);
	const handleClick = async (user) => {
		const data = {
			name: user.name,
			lastname: user.lastname,
			id_number: user.id_number,
			password: user.password,
			batch: user.batch,
			department: user.department,
			blockNumber: user.block_number,
			dormNumber: user.dorm_number,
			phone: user.phone,
			emergencyPhone: user.emergency_phone,
		};
		const requestoptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": token,
			},
			body: JSON.stringify(data),
		};

		try {
			const response = await fetch(
				`http://localhost:5000/api/auth/createaccount`,
				requestoptions,
			);
			const data = await response.json();
			if (response.ok) {
				setApproveResponseMessage(data.message);
        setUsers((prevUsers) => [...prevUsers, user]);
			} else {
				setApproveResponseMessage(data.message);
			}
		} catch (err) {
			console.log(err);
		}
	};
  const isUserApproved = (id_number) => {
		return users.some((user) => user.id_number === id_number);
	};
	return (
		<>
			<div className="table-container m-3">
        <h1 className="p-3 text-center text-danger">Temporary accounts</h1>
				<table className="table table-hover z-3 position-relative">
					<thead>
						<tr>
							<th scope="col">studentname</th>
							<th scope="col">last name</th>
							<th scope="col">id_number</th>
							<th scope="col">phone_number</th>
							<th scope="col">emergencyphone</th>
							<th scope="col">batch</th>
							<th scope="col">department</th>
							<th scope="col">block</th>
							<th scope="col">dorm</th>
							<th scope="col">approve</th>
							<th scope="col">delete</th>
						</tr>
					</thead>
					<tbody>
						{tempAccounts.map((user) => (
							<tr key={user.temp_account_id}>
								<th scope="row" className="p-3">
									{user.name}
								</th>
								<td className="p-3">{user.lastname}</td>
								<td className="p-3">{user.id_number}</td>
								<td className="p-3">{user.phone}</td>
								<td className="p-3">{user.emergency_phone}</td>
								<td className="p-3">{user.batch}</td>
								<td className="p-3">{user.department}</td>
								<td className="p-3">{user.block_number}</td>
								<td className="p-3">{user.dorm_number}</td>
								<td className="">
									{" "}
									<button
										className={`btn rounded-pill ${
											isUserApproved(user.id_number) ? "btn-secondary" : "btn-success"
										}`}
										disabled={isUserApproved(user.id_number)}
										onClick={() => handleClick(user)}
									>
                  {isUserApproved(user.id_number) ? "Approved" : "Approve"}
									</button>
								</td>
								<td className="">
									{" "}
									<button className="btn btn-danger rounded-pill">
										delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default ManageTempAccounts;
