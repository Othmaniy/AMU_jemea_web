import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import UmumaebedHome from "./pages/umumaebed/UmumaebedHome";
import { useContext, useEffect } from "react";
import Login1 from "./pages/login/Login1";
import Registeruser from "./pages/adminpages/register/Registeruser";
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

// import { AuthContext } from './components/auth/auth.context';

function App() {
	return (
		<Router>
			<>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/umumaebed" element={<UmumaebedHome />} />
					<Route path="/login" element={<Login1 />} />
					<Route path="/addbook" element={<AddBooks />} />
					<Route path="/books" element={<Books />} />
					<Route path="/managebooks" element={<Controlbooks />} />
					<Route path="/academi/admin/addfile" element={<AddFiles />} />
					<Route
						path="/registeruser"
						element={
							<ProtectedRoute role={["admin"]}>
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

					<Route
						path="/files/choosefiles/:department"
						element={<ExamsAndFiles />}
					/>
					<Route path="/files/:department" element={<AcademiFiles />} />
					<Route path="/daewaandirshad/admin" element={<DeawaAndIrshadDashboard />} />
					<Route path="/daewaandirshad/admin/addcourse" element={<Addcourses />} />
					<Route path="/daewaandirshad/admin/managecourse" element={<Managecourses />} />
					<Route path="/daewaandirshad/user/enroll" element={<EnrollCourse />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
