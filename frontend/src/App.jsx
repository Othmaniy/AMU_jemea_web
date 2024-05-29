import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/Home';
import UmumaebedHome from './pages/umumaebed/UmumaebedHome';
import { useContext, useEffect } from 'react';
import Login1 from './pages/login/Login1';
import Registeruser from './pages/adminpages/register/Registeruser';
import Unautherized from './pages/Unautherized';
import ProtectedRoute from './components/Protected/ProtectedRoute';
import AddBooks from './pages/LibraryPages/AddBooks';

// import { AuthContext } from './components/auth/auth.context';

function App() {
  // const { User } = useContext(AuthContext);
  
// const User = false;
//   const ProtectedPages = ({ children }) => {
//     const navigate = useNavigate()
//     useEffect(() => {
//       if (!User) {
//         navigate("/login");
//       }
//     }, [User, navigate]);

//     if (!User) {
//       return null;
//     }
//     return children;
//   };

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />
         } />
           <Route path='/umumaebed' element={<UmumaebedHome />}/>
           <Route path='/login' element={<Login1 />} />
           <Route path='/addbook' element={<AddBooks />} />
           <Route path='/registeruser' element={
           <ProtectedRoute role={["Admin"]}>
              <Registeruser />
           </ProtectedRoute>
           } />
           <Route path='/unautherized' element={<Unautherized />} />

        </Routes>
      </>
    </Router>
  );
}

export default App;


//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im91c21hbiIsImxhc3RuYW1lIjoibXVoYW1tZWQiLCJpZF9udW1iZXIiOiJuc3IvODg5LzEzIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzEzODQ5OTA4LCJleHAiOjE3MTM4NTcxMDh9.f048eH5Y3UOzdBxhxflV1lAUJC1jA6t1aFP6FRT0l34"

