import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [state, setState] = useState(initialState);

    const handleInputChange = (value = {}) => {
        setState({...state, value});
    }

    return [setState, handleInputChange];

}