import useGetUsers from "../../hooks/useGetUsers";
import useSendRequest from "../../hooks/useSendRequest";


const Recommendation = () => {


    const { loading, users } = useGetUsers();
    const { sendRequest } = useSendRequest();

    return (
        <div className="w-1/4 h-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 fixed right-0">
            {/* Users List */}
            <div className='text-white'><h1>Recommended Users</h1></div>

            {users.length > 0 ? (
                users.map((user) => (
                    <div key={user._id} className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-2 text-white">
                            <img src={user.profilePic} alt="User Avatar" className="w-8 h-8 rounded-full" />
                            <div>
                                <p className=" font-semibold">{user.fullName}</p>
                                <p className="text-gray-800 text-sm">Active 2 hours ago</p>
                            </div>
                        </div>
                        <button onClick={() => sendRequest(user._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>

                        </button>
                    </div>
                ))
            ) : (
                <div>No users found.</div>
            )
            }
        </div>
    )
}

export default Recommendation;