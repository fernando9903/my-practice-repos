import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    })

    useEffect(() => {
        fetch(url)
        .then( resp => resp.json())
        .then(data => {
            setTimeout(()=>{
                if (isMounted.current)
                    setState({
                        loading: false,
                        error: null,
                        data,
                    });
            }, 4000);
        })

        return () => {
            isMounted.current = false;
        }

    }, [url]);

    return state;

}