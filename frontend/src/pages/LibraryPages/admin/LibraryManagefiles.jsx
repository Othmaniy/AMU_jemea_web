import React, { useEffect, useState } from 'react'
import basepath from '../../../components/url/url';

function LibraryManagefiles() {
    const [files,setFiles]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [totalPages,setTotalPages]=useState(1)
    const [searchFiles,setSearchFiles]=useState('')
    const fetchFiles=async(page)=>{
        try{
            const response = await basepath.get('/library/admin/getlibraryfiles',{params:{
                page,
                limit:10
            }})
            setCurrentPage(page)
            setFiles(response.data.data)
            setTotalPages(Math.ceil(response.data.totalCount/10))
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchFiles(currentPage)
    },[currentPage])

    const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};
    const handleDeleteFile=async(file)=>{
        try{
       const deleteresponse =await basepath.delete(`/library/deletefile/${file.id}`)
       if(deleteresponse.status==200){
        setFiles(files.filter(f=>f.id!==file.id))
       }
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <section className="table-page-wrapper px-5 z-3 position-relative">
    <div className="search-container d-flex justify-content-center gap-4 z-3 position-relative">
        <input
            type="text"
            name="batch"
            placeholder="search by book name"
            onChange={(e)=>setSearchFiles(e.target.value)}
            className="search-input"
        />
        {/* <button onClick={handleSearch} className="btn btn-danger">
            Search
        </button> */}
    </div>
    <div className="col-sm-4">
<h2 className="title">manage <span>Library Files</span></h2>
</div>
    <div className="table-container">
    <table className="table table-dark table-hover z-3 position-relative">
        <thead>
            <tr>
                <th scope="col">File name</th>
                <th scope="col">file description</th>
                <th scope="col">Author</th>
                {/* <th scope="col">publishedYear</th> */}
                <th scope="col">published year</th>
                <th scope="col">update</th>
                <th scope="col">delete</th>
            </tr>
        </thead>
        <tbody>
					{files.filter((file)=>{
						return searchFiles.toLowerCase()===""?file:file.file_url.toLowerCase().includes(searchFiles)
					})
					.map((file) => (
						<tr key={file.id}>
							{/* todo published year */}
							<td scope="row">{file.file_url}</td>
							<td>{file.file_description}</td>
							<td>{file.author}</td>
							<td>
							{file.published_year}
							</td>
							
							
							<td>
								<button
									className="btn btn-success"
									// onClick={() => {
									// 	Setopenupdate(true);
									// 	setSelectedBook(b);
									// }}
								>
									update
								</button>
							</td>
							<td>
								<button
									className="btn btn-danger"
									onClick={()=>{handleDeleteFile(file)}}
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
              {" "}  page {currentPage} of {totalPages }
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
  )
}

export default LibraryManagefiles