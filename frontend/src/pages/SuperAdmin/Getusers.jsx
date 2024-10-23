import React, { useEffect, useState } from "react";
import "./getuser.css";
import basepath from "../../components/url/url";
import RoleSelector from "../../components/roleselecor/RoleSelector";
import Updateuser from "../../components/updateuser/Updateuser";
import { useLocation } from "react-router-dom";

function Getusers() {
	const [approvedusers, setApprovedUsers] = useState([]);
	const [openRoleSelector, setOpenRoleSelector] = useState(false);
	const [openUpdateUser, setOpenUpdateUser] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);
	const [searchParams, setSearchParams] = useState({
		batch: "",
		department: "",
		phoneNumber: "",
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const userType= useLocation().pathname.split('/')[2]
	// console.log(usertype);

	const fetchUsers = async (page = 1) => {
		try {
			const { batch, department, phoneNumber } = searchParams;
			const response = await basepath.get("/auth/getusers", {
				params: {
					page,
					limit: 10,
					batch,
					department,
					phoneNumber,
					userType
				},
			});
			console.log("get users response");
			console.log(response.data);
			setApprovedUsers(response.data.data);
			setCurrentPage(page);
			console.log(response.data.totalCount);
			setTotalPages(Math.ceil(response.data.totalCount / 10));
			console.log("getusers " + totalPages);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchUsers(currentPage);
	}, [currentPage]);

	const handleSearchChange = (e) => {
		setSearchParams({
			...searchParams,
			[e.target.name]: e.target.value,
		});
	};

	const handleSearch = () => {
		// setCurrentPage(1);
		fetchUsers();
	};
	const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};
	console.log(currentPage);
	return (
		<section className="table-page-wrapper p-0 mt-4">
			<h2 className="title mx-3">Active users</h2>
			<div className="search-container d-flex justify-content-center gap-4">
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
			<div className="table-container px-5">
				<table className="table table-bordered table-hover table-striped z-3 position-relative mt-4">
					<thead>
						<tr>
							<th scope="col">First name</th>
							<th scope="col">Last name</th>
							<th scope="col">phone number</th>
							{/* <th scope="col">publishedYear</th> */}
							<th scope="col">Batch</th>
							<th scope="col">Department</th>
							<th scope="col">Role</th>
							<th scope="col">Block </th>
							<th scope="col">Dorm</th>
							<th scope="col">Emergency phone</th>
							<th scope="col">Assign</th>
							<th scope="col">update</th>
							<th scope="col">delete</th>
						</tr>
					</thead>
					<tbody>
						{approvedusers.map((user) => (
							<tr key={user.id}>
								<td scope="row" className="p-3">
									{user.name}
								</td>
								<td className="p-3">{user.lastname}</td>
								<td className="p-3">{user.phone_number}</td>
								<td className="p-3">{user.batch}</td>
								<td className="p-3">{user.department}</td>
								<td className="p-3">{user.role}</td>
								<td className="p-3">{user.block_number}</td>
								<td className="p-3">{user.dorm_number}</td>
								<td className="p-3">{user.emergency_phone}</td>
								<td>
									<button
										className="btn btn-outline-danger"
										onClick={() => {
											setOpenRoleSelector(true);
											setSelectedUser(user);
										}}
									>
										Assign
									</button>
								</td>
								<td>
									<button
										className="btn btn-outline-primary"
										onClick={() => {
											setOpenUpdateUser(true);
											setSelectedUser(user);
										}}
									>
										Update
									</button>
								</td>
								<td>
									<button className="btn btn-danger">
										delete
									</button>
								</td>
								{/* <td><button className='btn btn-danger' onClick={()=>handleUserDelete()}>Delete</button></td> */}
								{openRoleSelector &&
									selectedUser &&
									selectedUser.id == user.id && (
										<RoleSelector
											setOpenRoleSelector={setOpenRoleSelector}
											user={selectedUser}
											key={user.id}
										/>
									)}
								{openUpdateUser &&
									selectedUser &&
									selectedUser.id == user.id && (
										<Updateuser
											setOpenUpdateUser={setOpenUpdateUser}
											user={user}
										/>
									)}
							</tr>
						))}
					</tbody>
				</table>
				<div className="pagination-controls d-flex justify-content-center align-items-center m-0 p-0">
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

export default Getusers;
