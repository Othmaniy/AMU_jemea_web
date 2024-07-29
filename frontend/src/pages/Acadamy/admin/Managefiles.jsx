import React, { useEffect, useState } from 'react'
import basepath from '../../../components/url/url';

function Managefiles() {
    const [filedetails,SetFiledetails]=useState([]);
    const [deleteResponseMessage,SetDeleteResponseMessage]=useState('')
    useEffect(()=>{
        
        const fetchData= async()=>{
            try{
                const response = await basepath.get("/academi/getfiletables")
                SetFiledetails(response.data.data)
            }
            catch(err){
                console.log(err);
            }
           
        }
        fetchData()
    },[])
    const handleDeleteClick=async(file)=>{
        const response = await basepath.delete(`/academi/deletefile${file.id}`);
        console.log(response.data.message);
        SetDeleteResponseMessage(response.data.message)
        console.log(deleteResponseMessage);



    }
  return (
    <>
<table className="table table-hover z-3 position-relative mt-2">
				<thead>
					<tr>
						<th scope="col" className='p-4'>file name</th>
						<th scope="col">description</th>
						<th scope="col">department</th>
						{/* <th scope="col">publishedYear</th> */}
						<th scope="col">Teacher name</th>
						<th scope="col">status</th>
						
					</tr>
				</thead>
				<tbody>
					{filedetails.map((file) => (
						<tr key={file.id}>
							{/* todo published year */}
							<th scope="row" className='p-4'>{file.file_url}</th>
							<td>{file.file_description}</td>
							<td>{file.department}</td>
							<td
								
							>
								{file.Teacher_name}
							</td>
							<td>
								<button
									className='btn btn-danger'
                                    onClick={()=>handleDeleteClick(file)}
								>
									delete
								</button>
							</td>
							{/* <td>
								<button
									className="btn btn-success"
									onClick={() => {
										Setopenupdate(true);
										setSelectedBook(b);
									}}
								>
									update
								</button>
							</td> */}
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

export default Managefiles