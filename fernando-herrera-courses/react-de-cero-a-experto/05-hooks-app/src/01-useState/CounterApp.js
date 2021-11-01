import React, { useState } from "react";

export const CounterApp = () => {
    
    const [counter, setCounter] = useState(
        {
            counter1: 0,
            counter2: 0,
        }
    );
    
    const handleOnClick = (counter) => {
        setCounter(counter)
    }

    const {counter1, counter2} = counter;

    return (
        <>
            <h4>Counter APP: {counter1}</h4>
            <button 
                className="btn btn-primary"
                onClick={() => {
                    handleOnClick(
                        {
                            counter1: counter1 + 1,
                            counter2 
                        }
                    )
                }}
            >
                +1
            </button>
            <h4>Counter APP: {counter2}</h4>
            <button 
                className="btn btn-primary"
                onClick={() => {
                    handleOnClick(
                        {
                            counter1,
                            counter2: counter2 + 1 
                        }
                    )
                }}
            >
                +1
            </button>
            <hr/>
        </>
    );
}