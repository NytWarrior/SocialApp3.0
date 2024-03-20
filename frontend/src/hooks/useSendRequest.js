import toast from 'react-hot-toast';

const useSendRequest = () => {

    const sendRequest = async (id) => {
        try {
            // console.log(id);
            const res = await fetch(`/api/friend/send/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    return { sendRequest };
};

export default useSendRequest;