import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {loading, data:images} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading ? 'Loading...' :
            <div className='card-grid animate__animated animate__fadeInTopLeft'>
                {images.map( image => 
                    <GridItem
                        key={image.id}
                        {...image}
                    />
                )}
            </div>}
        </>
    )
}