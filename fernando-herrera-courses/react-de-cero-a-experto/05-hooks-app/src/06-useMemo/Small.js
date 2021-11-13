import React from "react";

export const Small = React.memo(({value}) => {

    console.log('I am here again :c')

    return (<>
        <small>
            {value}
        </small>
    </>);
})