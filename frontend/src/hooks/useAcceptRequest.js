import axios from "axios";
import toast from "react-hot-toast";


const useAcceptRequest = () => {
    const acceptRequest = async (id) => {
        try {
            const res = await axios.put(`/api/friend/accept/${id}`);
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

    return { acceptRequest };
}

export default useAcceptRequest