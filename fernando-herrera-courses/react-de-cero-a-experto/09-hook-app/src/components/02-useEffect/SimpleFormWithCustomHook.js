import React from "react";
import { useForm } from "../../hooks/useForm";

import './effects.css';

export const SimpleFormWithCustomHook = () => {


    const [formValues, handleInputChange] = useForm(
        {
            name: '',
            email: '',
            password: ''
        }
    )

    const {name, email, password} = formValues;

    return (
        <>
            <h1>Simple Form With Custom Hook</h1>
            <hr></hr>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete="off"
                    value = { name }
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="someemail@somehost.com"
                    autoComplete="off"
                    value = { email }
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="passwprd"
                    className="form-control"
                    placeholder="******"
                    value = { password }
                    onChange={handleInputChange}
                />
            </div>

        </>
    )
}