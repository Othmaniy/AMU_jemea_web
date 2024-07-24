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
import AcademiFiles from "./components/academifiles/AcademiFiles";

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
					<Route path="/addfiles" element={<AddFiles />} />
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
					<Route path="/academi/files" element={<AcademiFiles />} />
				</Routes>
			</>
		</Router>
	);
}

export default App;
