import React, { useEffect, useState } from 'react'
import basepath from '../../../components/url/url';

function GetEnrolledUsers() {
    const [enrolledusers,setEnroledUsers]=useState([]);
    const[enrollDeleteMessage,setenrollDeleteMessage]=useState("")

    useEffect(()=>{
        const fetchEnrolledUsers = async()=>{
            try{
                const response= await basepath.get("/daewaandirshad/getenrolleduser")
            setEnroledUsers(response.data.data)
            console.log(enrolledusers);

            }
            catch(err){
                console.log(err);
            }
            
        }
        fetchEnrolledUsers()
    },[])

    const handleDeleteEnrolledUser=async(user)=>{
        try{
            setenrollDeleteMessage('')
            const response =await basepath.delete(`/daewaandirshad/deleteenrolleduser/${user.id}`);
            setenrollDeleteMessage(response.data.message)

        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <> 
  
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
					{enrolledusers.map((user) => (
						<tr key={user.id}>
							{/* todo published year */}
							<th scope="row" className='p-3'>{user.name}</th>
							<td  className='p-3'>{user.lastname}</td>
							<td  className='p-3'>{user.id_number}</td>
							<td  className='p-3'>{user.phone}</td>
							<td  className='p-3'>{user.course_name}</td>
							<td  className='p-3'>{user.course_unique_id}</td>
							
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
                                    onClick={()=>handleDeleteEnrolledUser(user)}
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
    </>
  )
}

export default GetEnrolledUsers