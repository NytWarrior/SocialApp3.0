import React, { useState, useEffect } from 'react';
import useCreatePost from '../../hooks/useCreatePost';
import useGetPost from '../../hooks/useGetPost';
import useGetUsers from '../../hooks/useGetUsers';
import useDeletePost from '../../hooks/useDeletePost';
import { Link } from 'react-router-dom';

const Home = () => {
    const [inputs, setInputs] = useState({
        content: '',
        image: null,
        video: null,
    });

    const { loading: postLoading, createPost } = useCreatePost();
    const { loading: getPostLoading, posts } = useGetPost();
    const { loading: getUserLoading, users } = useGetUsers();
    const { deletePost } = useDeletePost();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            content: inputs.content,
            image: inputs.image,
            video: inputs.video
        };
        await createPost(postData);
        setInputs({ content: '', image: null, video: null });
        window.location.reload();
    };

    const handleSlideChange = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDeletePost = async (postId) => {
        console.log('Deleting post', postId)
        await deletePost(postId);
        window.location.reload();
    };

    return (
        <div className='flex justify-around'>

            <div className="w-1/4 h-full p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 left-0 fixed">
                {/* Links to other things */}
                <div className='text-white'><h1>Menu</h1></div>
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <h1>Profile</h1>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4">
                    <Link to='/friends' className="flex items-center space-x-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h1>Friends</h1>
                    </Link>
                </div>
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                        <h1>My Posts</h1>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <h1>Settings</h1>
                    </div>
                </div>



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
