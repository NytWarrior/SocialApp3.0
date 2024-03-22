import axios from 'axios';
import { useState } from 'react';

const useGetUser = () => {
    const [loading, setLoading] = useState(false);

    const getUser = async (username) => {
        setLoading(true);
        try {
            const res = await axios.get(`/api/users/${username}`);
            return res.data;
        } catch (error) {
            console.error('Error fetching user:', error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, getUser };
};

export default useGetUser;
