import React from "react";

function AcademiAdmindashboard() {
	return (
		<>
			<div className="lft-side m-0 p-0" >
				<div className="links-wrapper">
					<a className="pt-3" style={{fontWeight:"bold",fontSize:"24px"}}>Academi admin Dashboard</a>
					<hr />
					<a href="/academi/admin" >Home</a>
					<hr />
					<a href="/academi/admin/addfile" >Add files</a>
					<hr />
					<a href="/academi/admin/managefiles">manage files</a>
					<hr />
					<a href="/academi/files"> get files</a>
					<hr />
					
				</div>
			</div>
		</>
	);
}

export default AcademiAdmindashboard;
