import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetPost = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            try {
                const res = await axios.get("/api/post");
                setPosts(res.data || []); // Ensure posts is always an array
            } catch (error) {
                console.error(error);
                // Handle the error accordingly, e.g., show an error message
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    return { loading, data: posts }; // Return loading state as well
};

export default useGetPost;
