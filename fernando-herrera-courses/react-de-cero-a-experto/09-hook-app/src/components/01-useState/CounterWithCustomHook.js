import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const {value, reset, increment, decrement} = useCounter(0);


    console.log(reset);
    return (
        <>
            <h1>
                Counter With Custom: {value}
            </h1>

            <button className={'btn btn-primary'} onClick={() => increment}>+1</button>
            <button className={'btn btn-primary'} onClick={() => decrement}>-1</button>
            <button className={'btn btn-primary'} onClick={reset}>reset</button>
        </>
    )
}