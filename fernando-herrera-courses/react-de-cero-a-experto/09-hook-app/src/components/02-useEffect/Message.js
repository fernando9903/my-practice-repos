import React, { useEffect, useState } from "react";

export const Message = () => {


    const [cords, setCords] = useState({x:0, y:0});

    useEffect(() => {
        console.log('Componente montado!');

        const getMouseCords = (event) => {
            setCords({x: event.x, y: event.y});
        }

        window.addEventListener('mousemove', getMouseCords);

        return () => {
            window.removeEventListener('mousemove', getMouseCords);
            console.log('Componente desmontado!')
        }
    }, []);

    return (
        <>
            <h3>You are great!</h3>
            <h5>x: {cords.x} y: {cords.y}</h5>
        </>
    )
}