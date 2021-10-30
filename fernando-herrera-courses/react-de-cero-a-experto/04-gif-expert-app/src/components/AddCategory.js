import React, { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('Submit hecho');
        setInputValue('');
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type='text'
                placeholder='Type a new category that you want to add and press enter'
                onChange={handleInputChange}
            />
        </form>
    );
}