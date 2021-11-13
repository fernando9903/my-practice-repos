import React from 'react';
import {shallow} from 'enzyme';
import { GridItem } from '../../components/GifGridItem';

describe('Test into <GifGridItem/> component', () => {
    const title = 'Some title';
    const url = 'https://localhost/some.jpg';

    const wraper = shallow(<GridItem 
        title={title}
        url={url}    
    />);
    
    test('The component should be render correclty', () => {
        expect(wraper).toMatchSnapshot();
    });

    test('The component should have the text into the p', () => {
        const p = wraper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('The img should have an src and alt equal to the test values', () => {
        const img = wraper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

});