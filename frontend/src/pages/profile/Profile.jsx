import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetUser from '../../hooks/useGetUser';
import Menu from '../../components/sidebar/Menu';
import Recommendation from '../../components/sidebar/Recommendation';

const Profile = () => {
    const { username } = useParams();
    const [userProfile, setUserProfile] = useState(null);
    const { loading, getUser } = useGetUser();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUser(username);
            setUserProfile(data);
        };

        fetchData();
    }, []);

    return (
        <>

            <div className='flex w-full justify-around'>

                <Menu />

                <div className='flex flex-col p-6 w-3/5 h-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                    {loading ? (
                        <div>Loading user profile...</div>
                    ) : (

                        <div >
                            <div className='flex flex-col items-center justify-center mx-auto'>

                                {userProfile && (
                                    <div class="text-gray-600 body-font">
                                        <div class="container mx-auto flex py-16 items-center justify-center flex-col">
                                            <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 relative items-center justify-center">
                                                <img className="object-cover object-center rounded" src={userProfile.profilePic} alt="User Avatar" />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-gray-800 bg-opacity-75 rounded-full">
                                                    <button className="text-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                                        </svg>

                                                    </button>
                                                </div>
                                            </div>


                                            <div class="text-center lg:w-2/3 w-full">
                                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{userProfile.fullName}</h1>
                                                <p class="mb-1 leading-relaxed">{userProfile.username}</p>
                                                <p class="mb-8 leading-relaxed">{userProfile.gender}</p>
                                                {/* <div class="flex justify-center"> */}
                                                {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Edit</button> */}
                                                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Edit</button>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {!userProfile && <p className='mt-12'>User profile not found</p>}
                            </div>

                        </div>

                    )}
                </div>

                <Recommendation />
            </div>
        </>
    );
};

export default Profile;
