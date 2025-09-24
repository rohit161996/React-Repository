import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    // check if the user is online or offline
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })
    }, []);


    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;