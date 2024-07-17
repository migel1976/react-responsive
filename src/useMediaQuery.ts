import { useState, useEffect } from "react"
import { IMediaQuery } from "./types"

const useMediaQuery = ( mediaQuery: IMediaQuery ) => {
    const { query } = mediaQuery;
    const [ isMatch, setIsMatch ] = useState(false);
    const onChange = (e: MediaQueryListEvent) => {
        setIsMatch(e.matches);
    }

    useEffect(()=>{
        const list: MediaQueryList = window.matchMedia(query);
        setIsMatch(list.matches);
        list.addEventListener('change', (e) => onChange(e));
        return ()=>list.removeEventListener('change', (e) => onChange(e));
    },[query])
    return isMatch;
}
export default useMediaQuery;