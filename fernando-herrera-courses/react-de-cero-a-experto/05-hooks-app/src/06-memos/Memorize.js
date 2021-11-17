import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {

    const [counter, increment] = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize: <Small value={counter}/></h1>
            <hr></hr>
            <button
                onClick={() => {
                    increment()
                }}
            >
                + 1
            </button>
            <button
                onClick={() => {
                    setShow(!show);
                }
                }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    );
}