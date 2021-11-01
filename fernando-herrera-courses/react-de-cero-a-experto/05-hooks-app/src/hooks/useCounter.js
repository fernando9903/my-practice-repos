import { useState } from "react"

export const useCounter = (initialState = 0) => {

    const [state, setState] = useState(initialState);

    const increment = (fact = 1) => {
        setState(state + fact)
    }

    const decrement = (fact = 1) => {
        setState(state - fact)
    }

    const reset = () => {
        setState(initialState);
    }

    return [
        state, 
        increment, 
        decrement, 
        reset
    ]

}