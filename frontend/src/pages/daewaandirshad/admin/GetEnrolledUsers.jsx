import React, { useEffect, useState } from "react";
import basepath from "../../../components/url/url";
import { useLocation } from "react-router-dom";

function GetEnrolledUsers() {
	const [enrolledusers, setEnroledUsers] = useState([]);
	const [enrollDeleteMessage, setenrollDeleteMessage] = useState("");
	const [currentPage,setCurrentPage]=useState(1)
	const [totalPages,setTotalPages]=useState(1)
	const [search,setSearch]=useState("")
	const courseName=useLocation().pathname.split('/')[4]
	console.log(courseName);
	
		const fetchEnrolledUsers = async (page=1) => {
			try {
				const response = await basepath.get("/daewaandirshad/getenrolleduser",{params:{
					courseName,
					page,
					limit:10
				}});
				console.log(response);
				setEnroledUsers(response.data.data);
				console.log(enrolledusers);
				setCurrentPage(page)
				setTotalPages(Math.ceil(response.data.totalCount/10))
			} catch (err) {
				console.log(err);
			}
		};
		// fetchEnrolledUsers();

       useEffect(()=>{
		fetchEnrolledUsers(currentPage)
	   },[currentPage])
	   const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};
	const handleDeleteEnrolledUser = async (user) => {
		try {
			setenrollDeleteMessage("");
			const response = await basepath.delete(
				`/daewaandirshad/deleteenrolleduser/${user.id}`,
			);
			setenrollDeleteMessage(response.data.message);
			if(response.status==200){
				setEnroledUsers(enrolledusers.filter(u=>u.id!==user.id))
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<section className="table-page-wrapper px-5 mt-4">
				<div className="col-sm-4">
        <h2 className="title">enrolled <span>users</span></h2>
      </div>
			<div className="search-container d-flex justify-content-center gap-4">
				<input
					type="text"
					name="batch"
					placeholder="search by name"
					onChange={(e)=>setSearch(e.target.value)}
					className="search-input"
				/>
				
				
			</div>
			<table className="table  table-hover z-3 position-relative m-3">
				<thead>
					<h6>{enrollDeleteMessage}</h6>
					<tr>
						<th scope="col">studentname</th>
						<th scope="col">last name</th>
						<th scope="col">id_number</th>
						<th scope="col">phone_number</th>
						{/* <th scope="col">publishedYear</th> */}
						<th scope="col">coursename</th>
						<th scope="col">course_id</th>
						<th scope="col">delete</th>
					</tr>
				</thead>
				<tbody>
					{enrolledusers.filter((user)=>{
						return search.toLowerCase()===""?user:user.name.toLowerCase().includes(search)
					})
					.map((user) => (
						<tr key={user.id}>
							{/* todo published year */}
							<th scope="row" className="p-3">
								{user.name}
							</th>
							<td className="p-3">{user.lastname}</td>
							<td className="p-3">{user.id_number}</td>
							<td className="p-3">{user.phone}</td>
							<td className="p-3">{user.course_name}</td>
							<td className="p-3">{user.course_unique_id}</td>

							{/* <td>
								<button
									onClick={() => handleClick(b)}
									className={
										b.available == "available"
											? "btn btn-outline-danger"
											: "btn btn-outline-primary"
									}
								>
									{b.available == "available" ? "reserve" : "return"}
								</button>
							</td> */}
							<td>
								<button
									className="btn btn-danger"
									onClick={() => handleDeleteEnrolledUser(user)}
								>
									Delete
								</button>
							</td>
							{/* {openupdate&&<UpdateBook Setopenupdate={Setopenupdate} book={b} key={b.id} />} */}
							{/* {openupdate && selectedBook && selectedBook.id === b.id && (
								<UpdateBook
									Setopenupdate={Setopenupdate}
									book={selectedBook}
									key={b.id}
								/>
							)} */}
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
		</section>
	);
}

export default GetEnrolledUsers;
