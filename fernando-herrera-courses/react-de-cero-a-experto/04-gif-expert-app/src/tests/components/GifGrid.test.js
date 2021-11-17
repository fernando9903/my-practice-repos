import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Test into <GifGrid> component', () => {

    test('The component shoul be render correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
    
        const category = 'Star wars';
        const wraper = shallow(
            <GifGrid
                key={category}
                category={category}
            />
        );
        expect(wraper).toMatchSnapshot();
    });

    test('Debe de mostrar alguna imagen cuando la peticion es lanzada', () => {
        const gifs = [{
            id: 'ABD',
            url: 'http://some/some.jpg',
            title: 'No importa el nombre'
        }]

        const category = 'some category';
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wraper = shallow(
            <GifGrid
                key={category}
                category={category}
            />
        );
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('p').exists()).toBe(false);
        expect(wraper.find('GridItem').length).toBe(gifs.length);
    });

});