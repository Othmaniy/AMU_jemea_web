import React from 'react'

function LibraryAdminDashboard() {
  return (
    <>
    <div className="lft-side m-0 p-0" >
				<div className="links-wrapper">
					<a href="/library/admin" className="pt-3" style={{fontWeight:"bold",fontSize:"24px"}}>library admin  Dashboard</a>
					<hr />
					<a href="/library/admin/addbooks">Add books</a>
					<hr />
					<a href="/library/admin/addfiles" >Add files</a>
					<hr />
					<a href="/library/admin/managebooks" >Manage books</a>
					<hr />
					<a href="/library/admin/managefiles" >Manage files</a>
					<hr />
					<a href="/library/getfiles" >files</a>
					<hr />
					
				</div>
			</div>
    
    
    </>
  )
}

export default LibraryAdminDashboard