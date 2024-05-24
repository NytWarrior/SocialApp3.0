import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/navbarFooter/Footer'
import Navbar from './components/navbarFooter/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import { useAuthContext } from './context/AuthContext';
import Friends from './pages/friends/Friends';
import Profile from './pages/profile/Profile';
import MyPosts from './pages/myPosts/MyPosts';


function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <Navbar />
      <div className='min-h-screen flex'>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
          <Route path='/profile/:username' element={authUser ? <Profile /> : <Navigate to={'/login'} />} />
          <Route path='/friends' element={authUser ? <Friends /> : <Navigate to={'/login'} />} />
          <Route path='/login' element={authUser ? <Navigate to={'/'} /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to={'/'} /> : <SignUp />} />
          <Route path='/my-posts' element={authUser ? <MyPosts /> : <Navigate to={'/login'} />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
