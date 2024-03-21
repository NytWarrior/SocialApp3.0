import Menu from '../../components/sidebar/Menu';
import Recommendation from '../../components/sidebar/Recommendation';
import useGetRequests from '../../hooks/useGetRequests';

const Friends = () => {
    const { loading, reqSent, reqRec } = useGetRequests();

    return (
        <div className='flex w-full justify-around'>

            <Menu />

            <div className='flex flex-col w-2/4 h-full'>
                {loading ? (
                    <div>Loading posts...</div>
                ) : (
                    <div className='flex flex-col items-center justify-center w-full mx-auto'>
                        <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                            <div className='text-white p-3'><h1>Friend Request Receieved</h1></div>
                            {reqRec.length > 0 ? (
                                reqRec.map((post) => (
                                    <div key={post._id} >
                                        <div className='flex justify-between gap-x-6 py-5 px-8 '>
                                            <div class="flex min-w-0 gap-x-4">
                                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={post.from_user.profilePic} alt="User Avatar" />                                             <div class="min-w-0 flex-auto">
                                                    <p class="font-semibold leading-6 text-white-800">{post.from_user.fullName}</p>
                                                    <p class="mt-1 truncate text-sm leading-5 text-gray-500">{post.from_user.username}</p>
                                                </div>
                                            </div>
                                            <div className='flex min-w-0 gap-x-4'>
                                                <button >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                    </svg>

                                                </button>
                                                <button >
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
                                reqSent.map((post) => (
                                    <div key={post._id}>
                                        <div className='flex justify-between gap-x-6 py-5 px-8 '>
                                            <div class="flex min-w-0 gap-x-4">
                                                <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={post.to_user.profilePic} alt="User Avatar" />                                             <div class="min-w-0 flex-auto">
                                                    <p class="font-semibold leading-6 text-white-800">{post.to_user.fullName}</p>
                                                    <p class="mt-1 truncate text-sm leading-5 text-gray-500">{post.to_user.username}</p>
                                                </div>
                                            </div>
                                            <button >
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