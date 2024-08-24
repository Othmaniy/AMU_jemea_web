import React, { useEffect, useState } from 'react'
import basepath from '../../components/url/url';
import RoleSelector from '../../components/roleselecor/RoleSelector';
import Updateuser from '../../components/updateuser/Updateuser';

function Getusers() {
    const [approvedusers,setApprovedUsers]=useState([]);
	const [openRoleSelector,setOpenRoleSelector]=useState(false)
	const [openUpdateUser,setOpenUpdateUser]=useState(false)
	const [selectedUser,setSelectedUser]=useState(null);
    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const response = await basepath.get("/auth/getusers");
            setApprovedUsers(response.data.data);
            console.log(response);
            console.log(approvedusers);
            }
            catch(err){
                console.log(err);
            }
            
        }
        fetchUsers()
    },[])
	
  return (
    <>
        <table className="table  table-hover z-3 position-relative m-4 ">
				<thead>
					<tr>
						<th scope="col">user name</th>
						<th scope="col">last name</th>
						<th scope="col">id_number</th>
						{/* <th scope="col">publishedYear</th> */}
						<th scope="col">batch</th>
						<th scope="col">department</th>
						<th scope="col">block number</th>
						<th scope="col">dorm number</th>
						<th scope="col">phone</th>
						<th scope="col">emergency phone</th>
						<th scope="col">Assign</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{approvedusers.map((user) => (
						<tr key={user.id}>
							{/* todo published year */}
							<th scope="row" className='p-3'>{user.name}</th>
							<td className='p-3'>{user.lastname}</td>
							<td className='p-3'>{user.id_number}</td>	
							<td className='p-3'>{user.batch}</td>
							<td className='p-3'>{user.department}</td>
							<td className='p-3'>{user.block_number}</td>
							<td className='p-3'>{user.dorm_number}</td>
							<td className='p-3'>{user.phone}</td>
							<td className='p-3'>{user.emergency_phone}</td>
						    <td><button className='btn btn-primary' onClick={()=>{setOpenRoleSelector(true);
								setSelectedUser(user)
							}}>Assign role</button></td>
						    <td><button className='btn btn-success' onClick={()=>{setOpenUpdateUser(true);
								setSelectedUser(user)
							}}>update user</button></td>
						    {/* <td><button className='btn btn-danger' onClick={()=>handleUserDelete()}>Delete</button></td> */}
							{openRoleSelector&&selectedUser&&selectedUser.id==user.id&&(
								<RoleSelector
								setOpenRoleSelector={setOpenRoleSelector}
								user={selectedUser}
								key={user.id}
								/>
							)}
						{openUpdateUser&&selectedUser&&selectedUser.id==user.id&&(
							<Updateuser
							setOpenUpdateUser={setOpenUpdateUser}
							user={user}
							 />
							
						)}
						</tr>
					))}
				</tbody>
			</table>
    
    </>
  )
}

export default Getusers