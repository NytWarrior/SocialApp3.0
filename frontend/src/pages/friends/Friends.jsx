import Menu from '../../components/sidebar/Menu';
import Recommendation from '../../components/sidebar/Recommendation';
import useGetRequests from '../../hooks/useGetRequests';
import useAcceptRequest from '../../hooks/useAcceptRequest';
import useRejectRequest from '../../hooks/useRejectRequest';
import { Link } from 'react-router-dom';

const Friends = () => {
    const { loading, reqSent, reqRec } = useGetRequests();
    const { acceptRequest } = useAcceptRequest();
    const { rejectRequest } = useRejectRequest();

    return (
        <div className='flex w-full justify-around'>

            <Menu />

            <div className='flex flex-col w-2/4 h-full'>
                {loading ? (
                    <div>Loading requests...</div>
                ) : (
                    <div className='flex flex-col items-center justify-center w-full mx-auto'>
                        <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                            <div className='text-white p-3'><h1>Friend Request Receieved</h1></div>
                            {reqRec.length > 0 ? (
                                reqRec.map((req) => (
                                    <div key={req._id} >
                                        <div className='flex justify-between gap-x-6 py-5 px-8 '>
                                            <div className="flex min-w-0 gap-x-4">
                                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={req.from_user.profilePic} alt="User Avatar" />
                                                <div className="min-w-0 flex-auto">
                                                    <Link to={`/profile/${req.from_user.username}`} className="font-semibold leading-6 text-white-800">{req.from_user.fullName}</Link>
                                                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">{req.from_user.username}</p>
                                                </div>
                                            </div>
                                            <div className='flex min-w-0 gap-x-4'>
                                                <button onClick={() => acceptRequest(req._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                    </svg>

                                                </button>
                                                <button onClick={() => rejectRequest(req._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No friend Request!!</div>
                            )}

                            <div className='text-white p-3'><h1>Friend Request Sent</h1></div>
                            {reqSent.length > 0 ? (
                                reqSent.map((req) => (
                                    <div key={req._id}>
                                        <div className='flex justify-between gap-x-6 py-5 px-8 '>
                                            <div className="flex min-w-0 gap-x-4">
                                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={req.to_user.profilePic} alt="User Avatar" />                                             <div className="min-w-0 flex-auto">
                                                    <Link to={`/profile/${req.to_user.username}`} className="font-semibold leading-6 text-white-800">{req.to_user.fullName}</Link>
                                                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">{req.to_user.username}</p>
                                                </div>
                                            </div>
                                            <button onClick={() => rejectRequest(req._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No Friend Request Sent!!</div>
                            )}

                        </div>
                    </div>
                )}
            </div>

            <Recommendation />
        </div>
    );
};

export default Friends;