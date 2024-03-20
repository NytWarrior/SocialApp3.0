import React from 'react';
import useGetRequests from '../../hooks/useGetRequests';

const Friends = () => {


    const { loading: getRequestLoading, reqSent, reqRec } = useGetRequests();
    console.log("sent", reqSent);
    console.log("rec", reqRec);

    return (
        <div>
            <div className='flex flex-col w-2/4 h-full'>

            </div>
        </div>
    )
}

export default Friends;