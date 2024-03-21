import axios from "axios";
import { useEffect, useState } from "react";


const useGetRequests = () => {
    const [loading, setLoading] = useState(false);
    const [reqSent, setReqSent] = useState([]);
    const [reqRec, setReqRec] = useState([]);

    useEffect(() => {
        const getFriendsReq = async () => {
            setLoading(true);
            try {
                const res = await axios.get("/api/friend/requests");
                setReqRec(res.data.requestsRec || []);
                setReqSent(res.data.requestsSent || []);
                // console.log(res.data.requestsSent);
                // console.log(reqSent);
                // console.log(reqRec);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getFriendsReq();
    }, []);

    return { loading, reqSent, reqRec };
}

export default useGetRequests;