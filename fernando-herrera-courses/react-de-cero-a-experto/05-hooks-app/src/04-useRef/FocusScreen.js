import React, { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleOnClick = () => {
        inputRef.current.select();
        console.log(inputRef)
    }

    return (<>
        <h>Focus Screen</h>
        <hr></hr>
        <input
            ref={inputRef}
            type='text'
            placeholder='Some placeholder'
        />
        <button
            onClick={handleOnClick}
        >Focus</button>
    </>);
}