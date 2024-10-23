import React, { useEffect, useState } from 'react'
import basepath from '../../components/url/url'
import UpdateLeader from '../../components/updateleader/UpdateLeader'


function GetLeaders() {
    const [leaders,setLeaders]=useState([])
    const [search,setSearch] = useState("")
	const [openUpdateLeader,setOpenUpdateLeader]=useState(false)
	const [selectedLeader,setSelectedLeader]=useState(null)
    useEffect(()=>{
        const fetchLeaders=async()=>{
            try{
                const response = await basepath.get("/leaders/getleaders");
                setLeaders(response.data.data)
                console.log(response);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchLeaders()
    },[])
	const handleDelete=async(id)=>{
		try{
			const deleteresponse = await basepath.delete(`/leaders/deleteleader/${id}`)
			if(deleteresponse.status==200){
				setLeaders(leaders.filter(l=>l.id!=id))
			}
		}
		catch(err){
			console.log(err);
		}
	}
  return (
    <section className="table-page-wrapper px-5">
        <div className="search-container d-flex justify-content-center gap-4 z-3 position-relative">
				<input
					type="text"
					name="batch"
					placeholder="search by name"
					onChange={(e)=>setSearch(e.target.value)}
					className="search-input"
				/>
			</div>
        <div className='col-sm-4'>
            <h2 className='title'>leaders</h2>
        </div>
        <div className="table-container px-5">
				<table className="table table-bordered table-hover table-striped z-3 position-relative mt-4">
					<thead>
						<tr>
							<th scope="col">First name</th>
							<th scope="col">Last name</th>
							<th scope="col">phone number</th>
							<th scope="col">role</th>
							<th scope="col">update</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody>
						{leaders.filter((leader)=>{ return search.toLowerCase()===""?leader:leader.first_name.toLowerCase().includes(search)})
                        .map((leader) => (
							<tr key={leader.id}>
								<td className="p-3">
									{leader.first_name}
								</td>
								<td className="p-3">{leader.last_name}</td>
								<td className="p-3">{leader.phone_number}</td>
								<td className="p-3">{leader.role}</td>
								
								<td>
									<button
										className="btn btn-outline-primary"
										onClick={()=>{
											setOpenUpdateLeader(true);
											setSelectedLeader(leader)
										}}
									>
										update
									</button>
								</td>
								<td>
									<button
										className="btn btn-outline-danger"
										onClick={()=>handleDelete(leader.id)}
									>
										delete
									</button>
								</td>
							{openUpdateLeader && selectedLeader && selectedLeader.id ===leader.id &&(
								<UpdateLeader
								setOpenUpdateLeader={setOpenUpdateLeader}
								leader={leader}
								/>
							)}
							</tr>
						))}
					</tbody>
				</table>
				
				
			</div>
    
    
    
    </section>
  )
}

export default GetLeaders