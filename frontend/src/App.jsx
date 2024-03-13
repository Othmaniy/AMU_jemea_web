import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/Home';
import UmumaebedHome from './pages/umumaebed/UmumaebedHome';
import { useContext, useEffect } from 'react';
import Login1 from './pages/login/Login1';

// import { AuthContext } from './components/auth/auth.context';

function App() {
  // const { User } = useContext(AuthContext);
  ; 
const User = false;
  const ProtectedPages = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {
      if (!User) {
        navigate("/login");
      }
    }, [User, navigate]);

    if (!User) {
      return null;
    }
    return children;
  };

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/umumaebed' element={<ProtectedPages><UmumaebedHome /></ProtectedPages>} />
           <Route path='/login' element={<Login1 />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
