import React from "react";
import PropTypes from 'prop-types';

export const GridItem = ({title, url}) => {

    return (
        <div className='card'>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}