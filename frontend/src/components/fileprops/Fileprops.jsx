import React, { useState } from 'react'
import { FaFileDownload } from 'react-icons/fa'

function Fileprops({files,folder}) {
	const [searchFiles,setSearchFiles]=useState("")
  return (
    <>

    	<section className="container mt-5 p-2" >
		<div className="search-container d-flex justify-content-center gap-4 m-4">
					<input
						type="text"
						name="search"
						placeholder="search by file name"
						onChange={(e) => setSearchFiles(e.target.value)}
						className="search-input"
					/>
				</div>
				<h2 className='title pt-3'>daewa and irshad files</h2>
			{/* <h1 className="text-center text-danger m-3">Files</h1> */}
			<div className="row">
				{files.filter((file)=>{
					return searchFiles.toLowerCase()===""?file:file.file_url.toLowerCase().includes(searchFiles)
				})
				.map((file) => (
					<div className="col-lg-6 col-md-6 col-sm-12 mb-2 single-file-container" key={file.id}>
						<div className="d-flex align-items-center">
							<a
								href={folder + file.file_url}
								download={file.file_url}
								className=""
							>
								<FaFileDownload
									style={{ fontSize: "6rem", color: "black" }}
									className="mr-2"
								/>
							</a>
						
							<p className="p-2 text-primary font-bold">
								{file.file_url} <br />
								{file.file_description} <br />
								<span className="" style={{ fontWeight: "bold" }}>
									by {file.author}
								</span>
								<br />
								<span className="" style={{ fontWeight: "bold" }}>
									year: {file.published_year}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
    
    </>
  )
}

export default Fileprops