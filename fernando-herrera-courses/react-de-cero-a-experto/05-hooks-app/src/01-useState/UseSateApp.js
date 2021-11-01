import React from "react";
import { CounterApp } from "./CounterApp";
import { CounterWithCoustomHookApp } from "./CounterWithCoustomHookApp";

export const UseStateApp = () => {
    return (
        <>
            <h3>Use State App</h3>
            <CounterApp/>
            <CounterWithCoustomHookApp/>
        </>
    );
}