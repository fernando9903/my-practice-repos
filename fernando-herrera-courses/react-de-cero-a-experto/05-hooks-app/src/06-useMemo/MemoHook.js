import React, { useMemo, useState } from "react";
import { procesoPesado } from "../helpers/ProcesoPesado";
import { useCounter } from "../hooks/useCounter";

export const MemoHook = () => {

    const [counter, increment] = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => {
        procesoPesado(counter)
    }, [counter]);

    return (
        <>
            <h2>
                Counter: 
                <small>
                    {counter}
                </small>
            </h2>
            <hr></hr>

            <p>{memoProcesoPesado}</p>

            <button
                onClick={() => {increment()}}
            >
                + 1
            </button>
            <button 
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    );
}