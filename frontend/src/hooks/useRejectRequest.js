import axios from 'axios';
import toast from 'react-hot-toast';

const useRejectRequest = () => {
    const rejectRequest = async (id) => {
        try {
            const res = await axios.delete(`/api/friend/reject/${id}`);
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            window.location.reload();
        }
    }

    return { rejectRequest };
}

export default useRejectRequest;