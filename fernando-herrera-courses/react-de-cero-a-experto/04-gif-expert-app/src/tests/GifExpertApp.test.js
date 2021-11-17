import React from "react";
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifExpertApp from "../GifExpertApp";

describe('Test on the <GifExpertApp> component', () => {
    test('The component is renderign correctly', () => {
        const wraper = shallow(
            <GifExpertApp/>
        );
        expect(wraper).toMatchSnapshot();
    })
    test('Debe de mostrar una lista de categorias', () => {
        const categories =  ['One push', 'Dragon ball'];
        const wraper = shallow(
            <GifExpertApp
                initialState={categories}
            />
        );
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('GifGrid').length).toBe(categories.length);
    })
})