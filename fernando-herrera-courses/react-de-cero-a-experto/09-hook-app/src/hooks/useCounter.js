import { useState } from "react";

export const useCounter = (initialValue = 0) => {

    const [value, setValue] = useState(initialValue);

    const increment = (fact = 1) => {
        setValue(value + fact);
    }

    const decrement = (fact = 1) => {
        console.log("Aqui toy")
        setValue(value - fact);
    }

    const reset = () => {
        setValue(initialValue);
    }

    return (
        increment,
        decrement,
        reset,
        value
    )

}