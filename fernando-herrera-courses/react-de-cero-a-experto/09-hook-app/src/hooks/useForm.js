import { useEffect, useState } from "react"

export const useForm = (initialValues = {}) => {

    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        console.log(values);
    }, [values]);

    const handleInputChange = ({target}) => {
        console.log(target.name);
        console.log(target.value);
        setValues({
            ...values,
            [target.name] : target.value 
        });
    }

    return [values, handleInputChange];

}