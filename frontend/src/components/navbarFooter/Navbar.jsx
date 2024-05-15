import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
    const { authUser } = useAuthContext();
    const { loading, logout } = useLogout();

    return (
        <header className="body-font fixed top-0 z-10 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 w-full" >
            <div className="container mx-auto flex justify-between p-3  md:flex-row  w-full ">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 rounded-full" viewBox="0 0 24 24">
                        <path d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path>
                    </svg>
                    <span className="ml-3 text-xl">SocialApp</span>
                </Link>
                {authUser && (
                    <div className=''>
                        {!loading ? (
                            <button onClick={logout} className="inline-flex items-center text-white border-0 py-1 px-2 mx-2 my-1 focus:outline-none hover:text-black rounded">Logout
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        ) : (
                            <span className='loading loading-spinner'></span>
                        )}

                    </div>
                )}
            </div>
        </header >
    )
}

export default Navbar;