import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length > 0)
            setCategories( currentCategories => [inputValue, ...currentCategories]);
        setInputValue('');
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type='text'
                placeholder='Type a new category that you want to add and press enter'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}