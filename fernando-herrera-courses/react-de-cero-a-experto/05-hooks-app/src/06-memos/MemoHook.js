import React, { useMemo, useState } from "react";
import { procesoPesado } from "../helpers/ProcesoPesado";
import { useCounter } from "../hooks/useCounter";

export const MemoHook = () => {

    const [counter, increment] = useCounter(1000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => {
        procesoPesado(counter)
    }, [counter]);

    return (
        <div>
            {memoProcesoPesado}
            <h1>Memo Hook: <small>{counter}</small></h1>
            <hr></hr>
            <button
                onClick={() => {
                    increment(1000)
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