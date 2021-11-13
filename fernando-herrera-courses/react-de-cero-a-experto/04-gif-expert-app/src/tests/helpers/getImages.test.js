import {getGifs} from './../../helpers/getImages';

describe('Test getImages helper', () => {
    test('The return value of the fetch need to be ten elements', async () => {
        const images = await getGifs('Opne push');
        expect(images.length).toBe(10);
    });
    test('The return value of the fetch need to be zero elements', async () => {
        const images = await getGifs('');
        expect(images.length).toBe(0);
    });
});