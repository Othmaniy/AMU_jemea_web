import React, { useEffect, useState } from 'react'
import basepath from '../../components/url/url'
import { useLocation } from 'react-router-dom'

function Alumnis() {
  const [alumnis,setAlumnis]=useState([])
  const [searchParams,setSearchParams]=useState({batch:"",department:"",phoneNumber:""});
  const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
  const userType= useLocation().pathname.split('/')[2];
//   console.log(usertype);

    const fetchAlumnis=async(page=1)=>{
      try{
		const { batch, department, phoneNumber} = searchParams;
        const response = await basepath.get("/auth/getusers",{params:{
			page,
			limit:10,
			batch,
			department,
			phoneNumber,
			userType
		}});
        setAlumnis(response.data.data)
		setCurrentPage(page);
		setTotalPages(Math.ceil(response.data.totalCount / 10));
      }
      catch(err){
        console.log(err);
      }
      
    }
  useEffect(()=>{
	fetchAlumnis(currentPage)
  },[currentPage])

  const handleSearchChange = (e) => {
	setSearchParams({
		...searchParams,
		[e.target.name]: e.target.value,
	});
};
const handleSearch = () => {
	// setCurrentPage(1);
	fetchAlumnis();
};
const handlePageChange = (page) => {
	if (page > 0 && page <= totalPages) {
		setCurrentPage(page);
	}
};
  return (
    <section className='table-page-wrapper p-0 mt-4'>
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
					placeholder="search phonenumber"
					value={searchParams.phoneNumber}
					onChange={handleSearchChange}
					className="search-input"
				/>
				<button onClick={handleSearch} className="btn btn-danger">
					Search
				</button>
			</div>
    	<table className="table  table-hover z-3 position-relative m-3">
				<thead>
					{/* <h6>{enrollDeleteMessage}</h6> */}
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">phone number</th>
						<th scope="col">batch</th>
						{/* <th scope="col">publishedYear</th> */}
						<th scope="col">Department</th>
						<th scope="col">Emergency phone</th>
						<th scope="col">Active</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{alumnis.map((user) => (
						<tr key={user.id}>
							{/* todo published year */}
							<th scope="row" className="p-3">
								{user.name}
							</th>
							<td className="p-3">{user.lastname}</td>
							<td className="p-3">{user.phone_number}</td>
							<td className="p-3">{user.batch}</td>
							<td className="p-3">{user.department}</td>
							<td className="p-3">{user.emergency_phone}</td>
							<td className="p-3">{user.is_active}</td>
							<td>
								<button
									className="btn btn-danger"
									// onClick={() => handleDeleteEnrolledUser(user)}
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
  )
}

export default Alumnis