import React from "react";
import PropTypes from "prop-types";

const FirstApp = ({greet, p_text}) => {

    return (
        <>
            <h1>{greet}</h1>
            <p>{p_text}</p>
        </>
    );
}

FirstApp.propTypes = {
    greet: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    p_text: 'I am a default prop value xd'
}

export default FirstApp;