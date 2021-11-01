import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCoustomHookApp = () => {
    
    const [
        counter1, 
        increentCounter1, 
        decrementCounter1, 
        resetCounter1
    ] = useCounter();
    
    return(
        <>
            <h3>Counter With Custom Hook </h3>
            <h4>Counter 1: {counter1}</h4>
            <button
                className='btn btn-primary'
                onClick={() => {
                    increentCounter1()
                }}
            >
                +1
            </button>
            <button
                className='btn btn-primary'
                onClick={() => {
                    resetCounter1()
                }}
            >
                reset
            </button>
            <button
                className='btn btn-primary'
                onClick={() => {
                    decrementCounter1()
                }}
            >
                -1
            </button>
            <hr/>
        </>
    );
}