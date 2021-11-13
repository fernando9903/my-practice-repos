import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleFormWithCustomHook = () => {
    const [formState, setFormSate] = useState(
        {
            name: '',
            email: '',
        }
    );

    useEffect(() => {
        console.log('Hey, What is it going?');
    }, []);

    useEffect(() => {
        console.log('Hey, the form changed');
    }, [formState]);

    const handleInputChange = ({target}) => {
        setFormSate(
            {
                ...formState,
                [target.name]: target.value,
            }
        )
    }
    
    const {name, email} = formState;

    return (
        <>
            <h1>
                Simple Form With Custom Hook
            </h1>
            <hr/>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Your name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Your name'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name === '123') && <Message/>}
        </>
    );
}