import "./App.css";
//template css
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
	Outlet,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import { useContext, useEffect } from "react";
import Login1 from "./pages/login/Login1";

import Unautherized from "./pages/Unautherized";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import AddBooks from "./pages/LibraryPages/admin/AddBooks";
import Books from "./pages/LibraryPages/user/Books";
import Controlbooks from "./pages/LibraryPages/admin/Controlbooks";
import UpdateBook from "./components/updateBook/UpdateBook";
import AddFiles from "./pages/Acadamy/admin/AddFiles";
import FileDashboard from "./pages/Acadamy/user/FileDashboard";
import ExamsAndFiles from "./pages/Acadamy/user/ExamsAndFiles";
import Managefiles from "./pages/Acadamy/admin/Managefiles";
import AcademiFiles from "./pages/Acadamy/user/AcademiFiles";
import Admindashboard from "./pages/Acadamy/admin/Admindashboard";
import DeawaAndIrshadDashboard from "./pages/daewaandirshad/admin/DeawaAndIrshadDashboard";
import Addcourses from "./pages/daewaandirshad/admin/Addcourses";
import Managecourses from "./pages/daewaandirshad/admin/Managecourses";
import EnrollCourse from "./pages/daewaandirshad/user/EnrollCourse";
import GetEnrolledUsers from "./pages/daewaandirshad/admin/GetEnrolledUsers";
import MembershipRegister from "./pages/umumaebed/user/MembershipRegister";
import ManageTempAccounts from "./pages/SuperAdmin/ManageTempAccounts";
import Registeruser from "./pages/SuperAdmin/user/register/Registeruser";
import Getusers from "./pages/SuperAdmin/Getusers";
import ManageMembers from "./pages/umumaebed/admin/ManageMembers";
import DaewaAndIrshadAddFiles from "./pages/daewaandirshad/admin/DaewaAndIrshadAddFiles";
import LibraryAddfiles from "./pages/LibraryPages/admin/LibraryAddfiles";
import Footer from "./components/Footer/Footer";
import Maincampus from "./pages/campusedescription/Maincampus";
import LibrarFiles from "./pages/LibraryPages/user/LibrarFiles";
// import DaewaAnsIrshadGetFiles from "./pages/daewaandirshad/user/DaewaAnsIrshadGetFiles";
import DaewaAndIshadGetFiles from "./pages/daewaandirshad/user/DaewaAndIshadGetFiles";
import AdminDashboard from "./pages/SuperAdmin/AdminDashboard";
import Adminhome from "./pages/SuperAdmin/Adminhome";
import Alumnis from "./pages/SuperAdmin/Alumnis";

// import { AuthContext } from './components/auth/auth.context';
//import template css files
// import '/template_assets/css/bootstrap.min.css'
// import "../public/template_assets/css/bootstrap.min.css"
function App() {

	const Layout =()=>{
		return(
			<div className="layout-wrapper">
				<div className="admin-menu">
				<AdminDashboard/>
				</div>
				<div className="outlet-wrapper">
					<Outlet/>
				</div>
			</div>
		)
	}
	return (
		<Router>
			<>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login1 />} />
					{/* super admin routes */}
					<Route path="/admin" element={<Layout/>}>
						<Route path="/admin" element={<Adminhome/>}/>
						<Route path="/admin/tempaccounts" element={<ManageTempAccounts/>}/>
						<Route path="/admin/users" element={<Getusers />}/>
						<Route path="/admin/courses" element={<Managecourses />}/>
						<Route path="/admin/enrolledusers" element={<GetEnrolledUsers />}/>
						<Route path="/admin/alumnis" element={<Alumnis />}/>
					</Route>
					{/* <Route path="/admin/tempaccounts" element={<ManageTempAccounts />} />
					<Route path="/admin/users" element={<Getusers />} />
					<Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
					

					{/* library routes */}
					<Route path="/addbook" element={<AddBooks />} />
					<Route path="/books" element={<Books />} />
					<Route path="/managebooks" element={<Controlbooks />} />
					<Route path="/library/admin/addfiles" element={<LibraryAddfiles />} />
					<Route path="/library/user/getlibraryfiles" element={<LibrarFiles />} />

					<Route
						path="/registeruser"
						element={
							<ProtectedRoute role={["Admin"]}>
								<Registeruser />
							</ProtectedRoute>
						}
					/>
					<Route path="/unautherized" element={<Unautherized />} />
					<Route path="/updatebook" element={<UpdateBook />} />
					{/* <Route path="/academi/files" element={<AcademiFiles />} /> */}
					<Route path="/academi/files" element={<FileDashboard />} />
					<Route path="/academi/admin/managefiles" element={<Managefiles />} />
					<Route path="/academi/admin" element={<Admindashboard />} />
					<Route path="/academi/admin/addfile" element={<AddFiles />} />
					<Route
						path="/files/choosefiles/:department"
						element={<ExamsAndFiles />}
					/>
					<Route path="/file/:department" element={<AcademiFiles />} />
					<Route path="/exam/:department" element={<AcademiFiles />} />
					<Route path="/assignment/:department" element={<AcademiFiles />} />

					{/* daewa and irshad */}
					<Route
						path="/daewaandirshad/admin"
						element={<DeawaAndIrshadDashboard />}
					/>
					<Route
						path="/daewaandirshad/admin/addfiles"
						element={<DaewaAndIrshadAddFiles />}
					/>
					<Route
						path="/daewaandirshad/admin/addcourse"
						element={<Addcourses />}
					/>
					<Route
						path="/daewaandirshad/admin/managecourse"
						element={<Managecourses />}
					/>
					<Route
						path="/daewaandirshad/admin/manageusers"
						element={<GetEnrolledUsers />}
					/>
					<Route
						path="/daewaandirshad/user/enroll"
						element={<EnrollCourse />}
					/>
					<Route
						path="/daewaandirshad/user/getfiles"
						element={<DaewaAndIshadGetFiles />}
					/>
					{/* umumaebed routes */}
					<Route
						path="/umumaebed/user/register"
						element={<MembershipRegister />}
					/>
					<Route
						path="/umumaebed/admin/managemembers"
						element={<ManageMembers />}
					/>
					{/* campus routes */}
					<Route path="/campuses/maincampus" element={<Maincampus />} />
				</Routes>
				<Footer />
			</>
		</Router>
	);
}

export default App;
