import React from "react";
import { CallbackHook } from "./06-useMemo/CallbackHook";
import { MemoHook } from "./06-useMemo/MemoHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";
// import { UseStateApp } from "./01-useState/UseSateApp";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { RealUseRefE } from "./04-useRef/RealUseRefE";
//import { Memorize } from "./06-useMemo/Memorize";


import './index.css'

export const HookApp = () => {
    return (
        <>
            <CallbackHook/>
        </>
    );
} 