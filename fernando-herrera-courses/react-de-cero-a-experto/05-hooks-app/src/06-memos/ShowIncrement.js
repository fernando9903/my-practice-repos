import React, { memo } from "react";

export const ShowIncrement = memo(({increment}) => {
    
    console.log('Me volvi a generar :c')
    
    return (
        <button
            onClick={()=>{
                increment(10)
            }}
        >
            Incrementar
        </button>
    );
})