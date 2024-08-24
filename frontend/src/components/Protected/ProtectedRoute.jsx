import { useEffect, useState } from "react";
import { Authcontext, useAuth } from "../Context/Authcontext";
import getuser from "../Utility/decode";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
	const [islogged, setIslogged] = useState(false);
	const [autherized, setAutherized] = useState(false);
	const [ispassed, setIspassed] = useState(false);
	// const loggeduser =await getuser();

	useEffect(() => {
		//change the conditional statement to handle for the role==0 or for pages that donot ask auhterization
		const fetchuser = async () => {
			try {
				const loggeduser = await getuser();
				console.log("user from porotected component");
				console.log(loggeduser);
				if (loggeduser && loggeduser.token) {
					setIslogged(true);
					if (role && role.length > 0 && role.includes(loggeduser.role)) {
						setAutherized(true);
					}
				} else {
					setIslogged(false);
				}
				setIspassed(true);
			} catch (error) {
				console.log("errrr in the protected route" + error);
				setIspassed(true);
			}
		};

		fetchuser();
	}, [role]);

	if (!ispassed) {
		// Optionally, you can return a loading indicator while checking the user's status
		return <div>Loading...</div>;
	}

	if (!islogged) {
		return <Navigate to="/login" />;
	}

	if (!autherized) {
		return <Navigate to="/unautherized" />;
	}

	return children;
};

export default ProtectedRoute;
