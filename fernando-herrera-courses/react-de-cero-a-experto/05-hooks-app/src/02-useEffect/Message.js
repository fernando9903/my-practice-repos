import React, { useEffect } from "react";

export const Message = () => {

    useEffect(() => {
        console.log("I was created");
        return () => {
            console.log("I was deleted")
        }
    }, []);

    return (
        <>
            <p>I am a message</p>
        </>
    );
}