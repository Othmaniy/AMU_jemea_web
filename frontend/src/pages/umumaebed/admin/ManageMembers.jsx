import React, { useEffect, useState } from "react";
import basepath from "../../../components/url/url";
import UpdateAmount from "../../../components/Upadteamount/UpdateAmount";

function ManageMembers() {
	const [members, setMembers] = useState([]);
	const [OpenUpdateAmount,setOpenUpdateAmount]=useState(false)
	const [selectedMember,setSelectedMember]=useState(null)
	const [currentPage,setCurrentPage]=useState(1)
	const [totalPages,setTotalPages]=useState(1)
	const [searchParams,setSearchParams]=useState({
		name:'',
		phoneNumber:"",
		batch:"",
		department:""
	})
	
		const fetchmembers = async (page=1) => {
			try {
				const { batch, department, phoneNumber,name } = searchParams;
				const response = await basepath.get("/umumaebed/getmembers",{params:{
					page,
					limit:10,
					phoneNumber,
					batch,
					name,
					department
				}});
				setMembers(response.data.data);
				setCurrentPage(page)
				setTotalPages(Math.ceil(response.data.totalCount/10))
			} catch (err) {
				console.log(err);
			}
		};
		
		useEffect(()=>{
		fetchmembers(currentPage)
		},[currentPage])
		const handleSearchChange = (e) => {
			setSearchParams({
				...searchParams,
				[e.target.name]: e.target.value,
			});
		};
	
		const handleSearch = () => {
	// setCurrentPage(1);
		fetchmembers()
	};
	const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};
	const handleDelete=async(memberid)=>{
		try{
			const response = await basepath.delete(`/umumaebed/deletemember/${memberid}`)
			if(response.status==200){
				console.log(200);
				setMembers(members.filter(m=>m.id!==memberid))
			}
		}
		catch(err){
			console.log(err);
		}
	}
	return (
		<section className="table-page-wrapper p-0 mt-4">
			<div className="search-container d-flex justify-content-center gap-4">
			<input
					type="text"
					name="name"
					placeholder="search by namer"
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
					name="id_number"
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
				<table className="table table-hover z-3 position-relative">
					<thead>
						<tr>
							<th scope="col">member name</th>
							<th scope="col">Last name</th>
							<th scope="col">id_number</th>
							<th scope="col">Phone_number</th>
							<th scope="col">Batch</th>
							<th scope="col">Department</th>
							<th scope="col">Amount</th>
							<th scope="col">Update</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody>
						{members.map((member) => (
							<tr key={member.id}>
								<th scope="row" className="p-3">
									{member.name}
								</th>
								<td className="p-3">{member.lastname}</td>
								<td className="p-3">{member.id_number}</td>
								<td className="p-3">{member.phone}</td>

								<td className="p-3">{member.batch}</td>
								<td className="p-3">{member.department}</td>
								<td className="p-3">{member.amount}</td>

								<td className="">
									{" "}
									<button className="btn btn-outline-primary rounded-pill" onClick={()=>{
										setOpenUpdateAmount(true)
										setSelectedMember(member)
									}}>
										Update
									</button>
								</td>
								<td className="">
									{" "}
									<button className="btn btn-danger rounded-pill" onClick={()=>handleDelete(member.id)}>
										delete
									</button>
								</td>
								{OpenUpdateAmount && selectedMember && selectedMember.id==member.id && (
									<UpdateAmount 
									setOpenUpdateAmount={setOpenUpdateAmount}
									member={member}
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

export default ManageMembers;
