import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {

    const [counter, icrementCounter] = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const [state, setState] = useState({});

    useEffect(()=>{
        if(!loading)
            setState(data[0]);
    }, [loading, counter]);

    const {quote, author} = state;

    console.log(quote, author);
    console.log(counter)

    return (
        <>
            <h3>Multiple custom hooks</h3>
            {
                loading ? <div className='alert alert-info text-center'>
                    Loading...
                </div> : <blockquote className='blockquote text-right'>
                    <p className='mb-0'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            }
            <button
                onClick={() => {icrementCounter()}}
            >
                Next quote
            </button>
        </>
    );
}