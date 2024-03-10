import Footer from './components/navbarFooter/Footer'
import Navbar from './components/navbarFooter/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';


function App() {

  return (
    <>
      <Navbar />
      <div className='p-4 h-screen flex items-center justify-center'>
        <Login />
        {/* <Home />
        <SignUp /> */}
        <Footer />
      </div>
    </>
  )
}

export default App;
