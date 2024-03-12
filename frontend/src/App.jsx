import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/navbarFooter/Footer'
import Navbar from './components/navbarFooter/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import { useAuthContext } from './context/AuthContext';


function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Navbar />
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
          <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to={'/'} /> : <SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
