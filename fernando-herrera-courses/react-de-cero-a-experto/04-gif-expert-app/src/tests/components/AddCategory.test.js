import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "./../../components/AddCategory";
import '@testing-library/jest-dom'

describe('Tests on the AddCategory component', () => {
    
    const setCategory = jest.fn();
    let wraper;

    beforeEach(() => {
        jest.clearAllMocks();
        wraper = shallow(<AddCategory setCategories = {setCategory}/>);
    });

    test('The componet renders correctly', () => {    
        expect(wraper).toMatchSnapshot();
    });

    test('The text input value change', () => {
        const e = {
            target: {
                value: 'Hello world!'
            }
        }
        const input = wraper.find('input');
        input.simulate('change', e);
    });

    test('No debe de postear la informacion con submit', () => {
        wraper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategory).not.toHaveBeenCalled(); 
    });

    test('Debe de llamar el setCAtegories y limpiar la caja de texto', () => {
        const e = {
            target : {
                value: 'Hello world',
            }
        };
        const input = wraper.find('input');
        input.simulate('change', e);
        expect(wraper.find('input').prop('value')).toBe('Hello world');
        const form = wraper.find('form');
        form.simulate('submit', {preventDefault(){}});
        expect(setCategory).toHaveBeenCalled();
        expect(wraper.find('input').prop('value')).toBe('');

    });

})