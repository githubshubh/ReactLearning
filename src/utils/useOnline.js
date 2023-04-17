import { useEffect ,useState} from "react";


const useOnline = ()=>{
    const [isOnline, setIsOnline] = useState(true);

    const handleEventOnline=()=>{
        setIsOnline(true);
    }

    const handleEventOffline=()=>{
        setIsOnline(false);
    }

    useEffect(()=>{
        window.addEventListener('online' , handleEventOnline)

        window.addEventListener('offline' , handleEventOffline)

        return ()=>{
            window.removeEventListener('online' ,handleEventOnline);
            window.removeEventListener('offline' ,handleEventOffline);
        };
    },[])

    return isOnline;
}

export default useOnline;