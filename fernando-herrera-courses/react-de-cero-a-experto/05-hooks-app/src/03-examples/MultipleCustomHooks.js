import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {

    const [counter, icrementCounter] = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote, author} = !!data && data[0];

    return (
        <>
            {
                loading ? <div className='alert alert-info text-center'>
                    Loading...
                </div> : <blockquote className='blockquote text-right'>
                    <p className='mb-0'>{quote}</p>
                    <p></p>
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