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

                <div className='flex flex-col w-2/4 h-full'>
                    {loading ? (
                        <div>Loading user profile...</div>
                    ) : (
                        <div className='flex flex-col items-center justify-center w-full mx-auto'>
                            <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                                <div>
                                    <h2>User Profile</h2>

                                    {userProfile && (
                                        <>
                                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={userProfile.profilePic} alt="User Avatar" />
                                            <p>Username: {userProfile.username}</p>
                                            <p>Full Name: {userProfile.fullName}</p>
                                            <p>Gender: {userProfile.gender}</p>

                                        </>
                                    )}

                                    {!userProfile && <p>User profile not found</p>}
                                </div>

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
