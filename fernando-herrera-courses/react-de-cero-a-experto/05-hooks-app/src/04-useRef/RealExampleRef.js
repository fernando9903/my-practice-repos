import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);
    return (<div>
        <h1>Real example ref</h1>
        <hr></hr>
        {show && <MultipleCustomHooks/>}
        <button
            onClick={
                () => setShow(!show)
            }
        >Show/Un Show</button>
    </div>);
}