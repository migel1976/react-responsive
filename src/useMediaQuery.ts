import { useState, useEffect } from "react";
import { IMediaQuery} from "./types";

const useMediaQuery = (mediaQuery: IMediaQuery) => {
    const {query} = mediaQuery;
    const [isMatch, setIsMatch] = useState(false);

    useEffect(()=>{
        const list = window.matchMedia(query);
        setIsMatch(list.matches);
        list.addEventListener('change', e=>setIsMatch(e.matches));
    },[query])
    return isMatch;
}
export default useMediaQuery;