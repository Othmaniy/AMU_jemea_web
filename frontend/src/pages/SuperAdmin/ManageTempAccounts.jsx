import React, { useEffect, useState } from "react";
import basepath from "../../components/url/url";
import "./manageaccount.css";
import { useAuth } from "../../components/Context/Authcontext";

function ManageTempAccounts() {
	const [tempAccounts, setTempAccounts] = useState([]);
	const [users, setUsers] = useState([]);
	const [approveResponseMessage, setApproveResponseMessage] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const user = useAuth();
	const [searchParams, setSearchParams] = useState({
		name: "",
		phoneNumber: "",
		batch: "",
		department: "",
	});

	const token = user?.currentuser?.token;
	console.log("token from temp accunts");
	console.log(token);
	useEffect(() => {
		const fetchusers = async () => {
			try {
				const response = await basepath.get("auth/getallusers");
				setUsers(response.data.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchusers();
	}, []);

	const fetchTempUsers = async (page = 1) => {
		try {
			const { name, batch, department, phoneNumber } = searchParams;
			const response = await basepath.get("/auth/gettempaccounts", {
				params: {
					page,
					limit: 10,
					name,
					batch,
					department,
					phoneNumber,
				},
			});
			setTempAccounts(response.data.data);
			console.log("temp acouns");
			console.log(tempAccounts);
			// ?
			setCurrentPage(page);
			// ?
			setTotalPages(Math.ceil(response.data.totalCount / 10));
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchTempUsers(currentPage);
	}, [currentPage]);

	const handleSearch = () => {
		fetchTempUsers();
	};

	console.log(users);
	console.log(tempAccounts);
	const handleSearchChange = (e) => {
		setSearchParams({
			...searchParams,
			[e.target.name]: e.target.value,
		});
	};

	const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};
	const handleClick = async (user) => {
		const data = {
			name: user.name,
			lastname: user.lastname,
			phoneNumber: user.phone_number,
			password: user.password,
			batch: user.batch,
			department: user.department,
			blockNumber: user.block_number,
			dormNumber: user.dorm_number,
			emergencyPhone: user.emergency_phone,
			isActive:user.is_active

		};

		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": token,
			},
			body: JSON.stringify(data),
		};
		console.log(requestOptions);

		try {
			// First API request to create the account
			const response = await fetch(
				`http://localhost:5000/api/auth/createaccount`,
				requestOptions,
			);
			const data = await response.json();

			if (response.ok) {
				setApproveResponseMessage(data.message);
				setUsers((prevUsers) => [...prevUsers, user]);

				// Additional API request to another route
				const additionalResponse = basepath.patch(
					`/auth/changeapprovestatus/${user.temp_account_id}`,
				);
				const additionalData = await additionalResponse.json();
				if (additionalResponse.ok) {
					console.log("changing status in temp accounts succeeded:");
				} else {
					console.log("Additional request failed:", additionalData.message);
				}
			} else {
				setApproveResponseMessage(data.message);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const isUserApproved = (phone_number) => {
		return users.some((user) => user.phone_number === phone_number);
	};
	const handleDelete=async(user)=>{
		console.log(user.temp_account_id);
		const deleteResponse = await basepath.delete(`/auth/deletetempuser/${user.temp_account_id}`)
		if(deleteResponse.status==200){
			setTempAccounts(tempAccounts.filter(t=>t.temp_account_id!==user.temp_account_id))
		}

	}
	return (
		<section className="table-page-wrapper">
			<h2 className="title">Temporary accounts</h2>
			<div className="search-container d-flex justify-content-center gap-4">
				<input
					type="text"
					name="name"
					placeholder="search by name"
					value={searchParams.name}
					onChange={handleSearchChange}
					className="search-input"
				/>
				<input
					type="text"
					name="batch"
					placeholder="search by batch"
					value={searchParams.batch}
					onChange={handleSearchChange}
					className="search-input"
				/>
				<input
					type="text"
					name="department"
					placeholder="search by department"
					value={searchParams.department}
					onChange={handleSearchChange}
					className="search-input"
				/>
				<input
					type="text"
					name="phoneNumber"
					placeholder="search by phonenumber"
					value={searchParams.phoneNumber}
					onChange={handleSearchChange}
					className="search-input"
				/>
				<button onClick={handleSearch} className="btn btn-danger">
					Search
				</button>
			</div>
			<div className="table-container m-3">
				<table className="table table-bordered table-hover z-3 position-relative">
					<thead>
						<tr>
							<th scope="col">studentname</th>
							<th scope="col">last name</th>
							<th scope="col">phone_number</th>
							<th scope="col">emergencyphone</th>
							<th scope="col">batch</th>
							<th scope="col">department</th>
							{/* <th scope="col">isActive</th> */}
							<th scope="col">block</th>
							{/* <th scope="col">dorm</th> */}
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
								<td className="p-3">{user.phone_number}</td>
								<td className="p-3">{user.emergency_phone}</td>
								<td className="p-3">{user.batch}</td>
								<td className="p-3">{user.department}</td>
								{/* <td className="p-3">{user.is_active==0?"no":"yes"}</td> */}
								<td className="p-3">{user.block_number}</td>
								{/* <td className="p-3">{user.dorm_number}</td> */}
								
								<td className="">
									{" "}
									<button
										className={`btn rounded-pill ${
											isUserApproved(user.phone_number)
												? "btn-secondary"
												: "btn-success"
										}`}
										disabled={isUserApproved(user.phone_number)}
										onClick={() => handleClick(user)}
									>
										{isUserApproved(user.phone_number) ? "Approved" : "Approve"}
									</button>
								</td>
								<td className="">
									{" "}
									<button className="btn btn-danger rounded-pill" onClick={()=>handleDelete(user)}>
										delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="pagination-controls d-flex justify-content-center align-items-center gap-4">
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="btn btn-outline-danger"
					>
						previous
					</button>
					<span className="">
						page {currentPage} of {totalPages}
					</span>
					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="btn btn-outline-primary"
					>
						next
					</button>
				</div>
			</div>
		</section>
	);
}

export default ManageTempAccounts;
