import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useCreatePost = () => {
    const [loading, setLoading] = useState(false);

    const uploadFile = async (type, file) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', type === 'image' ? 'images_preset' : 'videos_preset');
        // console.log("file", file);


        try {
            let cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
            let resourceType = type === 'image' ? 'image' : 'video';
            let apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
            // console.log("apiurl", apiUrl);
            // console.log("data", data);

            const res = await axios.post(apiUrl, data);
            // console.log("response", res);
            const { secure_url } = res.data;
            // console.log(secure_url);
            return secure_url;

        } catch (error) {
            console.log(error);
        }
    };


    const createPost = async ({ content, image, video }) => {
        setLoading(true);
        try {
            // console.log("content", content);
            // console.log("image", image);
            // console.log("video", video);
            let imgUrl = '';
            let videoUrl = '';
            if (image) {
                imgUrl = await uploadFile('image', image);
            }
            if (video) {
                videoUrl = await uploadFile('video', video);
            }

            // Post URLs to backend
            const res = await axios.post('/api/post/create', { content, imgUrl, videoUrl });

            console.log('Files uploaded successfully');

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, createPost };
}

export default useCreatePost;
