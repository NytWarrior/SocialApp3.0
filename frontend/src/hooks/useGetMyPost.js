import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetMyPost = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getMyPosts = async () => {
            setLoading(true);
            try {
                const res = await axios.get("/api/post/my-posts");
                setPosts(res.data || []); // Ensure posts is always an array
            } catch (error) {
                console.error(error);
                // Handle the error accordingly, e.g., show an error message
            } finally {
                setLoading(false);
            }
        };

        getMyPosts();
    }, []);

    return { loading, posts }; // Return loading state as well
};

export default useGetMyPost;
