import React, { useEffect, useState } from 'react'
import basepath from '../../../components/url/url';

function ManageMembers() {
	const [members,setMembers]=useState([]);

	useEffect(()=>{
		const fetchmembers = async()=>{
			try{
				const response = await basepath.get("/umumaebed/getmembers")
				setMembers(response.data.data)
			}
			catch(err){
				console.log(err);
			}
		}
		fetchmembers()
	},[])
  return (
	<>
	<div className="table-container">
	<table className="table table-hover z-3 position-relative">
					<thead>
						<tr>
							<th scope="col">memeber name</th>
							<th scope="col">last name</th>
							<th scope="col">id_number</th>
							<th scope="col">phone_number</th>
							<th scope="col">batch</th>
							<th scope="col">department</th>
							<th scope="col">amount</th>
							
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
								
								{/* <td className="">
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
								</td> */}
								{/* <td className="">
									{" "}
									<button className="btn btn-danger rounded-pill">
										delete
									</button>
								</td> */}
							</tr>
						))}
					</tbody>
				</table>
	</div>
	
	</>
  )
}

export default ManageMembers