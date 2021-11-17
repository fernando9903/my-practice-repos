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
            if (isMounted.current)
                setState({
                    loading: false,
                    error: null,
                    data,
                });
        })

        return () => {
            isMounted.current = false;
        }

    }, [url]);

    return state;

}