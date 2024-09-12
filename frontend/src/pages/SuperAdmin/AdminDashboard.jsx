import React from "react";
import './admindashboard.css'
function AdminDashboard() {
	return (
		< >
			<div className="lft-side m-0 p-0" >
				<div className="links-wrapper">
					<a href="" className="pt-3">Dashboard</a>
					<hr />
					<a href="/admin/tempaccounts">temp accounts</a>
					<hr />
					<a href="/admin/users" >Active users</a>
					<hr />
					<a href="/admin/alumnis" >Alumnis</a>
					<hr />
					<a href="/admin/courses" >Open courses</a>
					<hr />
					<a href="/admin/enrolledusers" >Enrolled users</a>
					<hr />
					
				</div>
			</div>
			
		</>
	);
}

export default AdminDashboard;
