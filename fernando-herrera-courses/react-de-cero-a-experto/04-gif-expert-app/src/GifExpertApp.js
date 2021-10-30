import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(
        [
            'Sword Art Online',
            'Asoka Tano',
            'Star Wars',
            'Your lie in April',
        ]
    )

    const handleAddCategory = (event) => {
        setCategories(
            [
                ...categories,
                'Something new category'
            ]
        )
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory/>
            <hr />
            <button onClick={handleAddCategory}>Add Category</button>
            <ol>
                {
                    categories.map( (category) =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;