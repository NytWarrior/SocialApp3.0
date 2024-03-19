import React, { useState, useEffect } from 'react';
import useCreatePost from '../../hooks/useCreatePost';
import useGetPost from '../../hooks/useGetPost';
import useGetUsers from '../../hooks/useGetUsers';

const Home = () => {
    const [inputs, setInputs] = useState({
        content: '',
        image: null,
        video: null,
    });

    const { loading: postLoading, createPost } = useCreatePost();
    const { loading: getPostLoading, posts } = useGetPost();
    const { loading: getUserLoading, users } = useGetUsers();

    console.log("Users", users)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            content: inputs.content,
            image: inputs.image,
            video: inputs.video
        };
        await createPost(postData);
        setInputs({ content: '', image: null, video: null });
    };

    const handleSlideChange = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDeletePost = async (postId) => {
        // console.log('Deleting post', postId)
    };

    return (
        <div className='flex justify-around'>

            <div className="w-1/4 p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 left-0 fixed">
                {/* Links to other things */}
                <div className='text-white'><h1>Menu</h1></div>


            </div>
            <div className='flex flex-col w-2/4 h-full'>
                <div className='flex flex-col items-center justify-center w-full mx-auto'>
                    <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-base label-text'>Post</label>
                                <textarea
                                    type='text'
                                    placeholder='Something about the post...'
                                    className='textarea textarea-bordered textarea-md w-full'
                                    value={inputs.content}
                                    onChange={(e) => setInputs({ ...inputs, content: e.target.value })}
                                />
                            </div>

                            <div className='mb-4 flex flex-row justify-between'>
                                <div className='w-1/2 mr-2'>
                                    <label className='block text-base label-text'>Upload Image</label>
                                    <input
                                        type='file'
                                        className='file-input file-input-bordered w-full'
                                        accept='image/*'
                                        name='image'
                                        onChange={(e) => setInputs({ ...inputs, image: e.target.files[0] })}
                                    />
                                </div>

                                <div className='w-1/2 ml-2'>
                                    <label className='block text-base label-text'>Upload Video</label>
                                    <input
                                        type='file'
                                        className='file-input file-input-bordered w-full'
                                        accept='video/*'
                                        name='video'
                                        onChange={(e) => setInputs({ ...inputs, video: e.target.files[0] })}
                                    />
                                </div>
                            </div>

                            <div className='mb-4 text-center'>
                                <button className='btn btn-block btn-sm' disabled={postLoading}>
                                    {postLoading ? <span className='loading loading-spinner'></span> : 'Upload'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    {/* <div className='text-black'>Posts</div> */}

                    {getPostLoading ? (
                        <div>Loading posts...</div>
                    ) : (
                        <div className='flex flex-col items-center justify-center w-full mx-auto'>
                            <div className='w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                                {posts.length > 0 ? (
                                    posts.map((post) => (
                                        <div key={post._id} className='my-4'>
                                            <div className=" p-8 rounded-lg shadow-md">
                                                {/* <!-- User Info with Three-Dot Menu --> */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center space-x-2">
                                                        <img src={post.user.profilePic} alt="User Avatar" className="w-8 h-8 rounded-full" />
                                                        <div>
                                                            <p className="text-white-800 font-semibold">{post.user.fullName}</p>
                                                            <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
                                                        </div>
                                                    </div>
                                                    <button onClick={() => handleDeletePost(post._id)} className="hover:bg-gray-900 rounded-full p-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>

                                                </div>
                                                {/* <!-- Message --> */}
                                                <div className="mb-4">
                                                    <p className="text-white-800">{post.content}</p>
                                                </div>

                                                <div className="carousel mb-4">
                                                    {post.image && (
                                                        <div id={post.image} className="carousel-item relative w-full justify-center">
                                                            <img src={post.image} alt="Post Image" className="max-w-full h-auto object-cover rounded-md" />
                                                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                                <button onClick={() => handleSlideChange(post.video)} className="btn btn-circle">❮</button>
                                                                <button onClick={() => handleSlideChange(post.video)} className="btn btn-circle">❯</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {post.video && (
                                                        <div id={post.video} className="carousel-item relative w-full justify-center">
                                                            <video src={post.video} controls className="max-w-full h-auto object-cover rounded-md" />
                                                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                                                <button onClick={() => handleSlideChange(post.image)} className="btn btn-circle">❮</button>
                                                                <button onClick={() => handleSlideChange(post.image)} className="btn btn-circle">❯</button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* <!-- Like and Comment Section --> */}
                                                <div className="flex items-center justify-between text-gray-500">
                                                    <div className="flex items-center space-x-2">
                                                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                                                            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                                                            </svg>
                                                            <span>42 Likes</span>
                                                        </button>
                                                    </div>
                                                    <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                                                        <svg width="22px" height="22px" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                                                            </g>
                                                        </svg>
                                                        <span>3 Comment</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No posts found.</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

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
                            <button>
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
        </div>
    );
};

export default Home;
