import React, { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr></hr>
            <input
                ref={inputRef}
                placeholder='Your name'
            />
            <button
                onClick={handleClick}
            >
                Focus
            </button>
        </>
    );

}