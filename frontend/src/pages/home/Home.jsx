import React, { useState, useEffect } from 'react';
import useCreatePost from '../../hooks/useCreatePost';
import useGetPost from '../../hooks/useGetPost';

const Home = () => {
    const [inputs, setInputs] = useState({
        content: '',
        image: null,
        video: null,
    });
    const [posts, setPosts] = useState([]);
    const { loading: postLoading, createPost } = useCreatePost();
    const { loading: getPostLoading, data } = useGetPost();

    useEffect(() => {
        if (data) {
            setPosts(data.data || []);
        }
    }, [data]);


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
    return (
        <div className='flex flex-col w-screen h-full'>
            <div className='text-black'>Home</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Content</span>
                    </label>
                    <input
                        type='text'
                        placeholder='Something about the post...'
                        className='w-full input input-bordered h-10'
                        value={inputs.content}
                        onChange={(e) => setInputs({ ...inputs, content: e.target.value })}
                    />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Upload Image</span>
                    </label>
                    <input
                        type='file'
                        className='w-full input input-bordered h-10'
                        accept='image/*'
                        name='image'
                        onChange={(e) => setInputs({ ...inputs, image: e.target.files[0] })}
                    />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Upload Video</span>
                    </label>
                    <input
                        type='file'
                        className='w-full input input-bordered h-10'
                        accept='video/*'
                        name='video'
                        onChange={(e) => setInputs({ ...inputs, video: e.target.files[0] })}
                    />
                </div>

                <div>
                    <button className='btn btn-block btn-sm mt-2' disabled={postLoading}>
                        {postLoading ? <span className='loading loading-spinner '></span> : 'Upload'}
                    </button>
                </div>
            </form>
            <div>
                <div className='text-black'>Posts</div>

                {getPostLoading ? (
                    <div>Loading posts...</div>
                ) : (
                    <div>
                        <div>
                            {console.log(posts)}
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <div key={post._id}>
                                        <div>
                                            <p>{post.content}</p>
                                        </div>
                                        <div>
                                            {post.image && (
                                                <img
                                                    src={post.image}
                                                    alt='Post'
                                                    className='w-80 h-80 object-cover'
                                                />
                                            )}
                                        </div>
                                        <div>
                                            {post.video && (
                                                <video
                                                    src={post.video}
                                                    controls
                                                    className='w-80 h-80 object-cover'
                                                />
                                            )}
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
    );
};

export default Home;
