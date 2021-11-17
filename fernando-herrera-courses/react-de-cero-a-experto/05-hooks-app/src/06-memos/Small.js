import React, { memo } from "react";

export const Small = memo(({value}) => {
    console.log('Heme aqui')
    return (
        <small>{value}</small>
    );
})