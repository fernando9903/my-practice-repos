import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealUseRefE = () => {

    const [show, setShow] = useState(true);

    return (<>
        <hr></hr>

        {show && <MultipleCustomHooks/>}

        <button
            onClick={() => {
                setShow(!show);
            }}
        >
            Show/Hide
        </button>
    </>)
}