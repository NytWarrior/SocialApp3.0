import axios from "axios";
import toast from "react-hot-toast";

const useDeletePost = () => {
    const deletePost = async (postId) => {
        try {
            console.log("postId", postId);
            const res = await axios.delete(`/api/post/destroy/${postId}`);
            console.log('File deleted successfully');
            const data = await res.json();
            // console.log("regteh", data);

            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return { deletePost };
}

export default useDeletePost;