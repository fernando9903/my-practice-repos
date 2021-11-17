import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hooks useFetchGifs', () => {
    //Resolver los errores de importancion del '@testing-library/react-hooks'
    test('debe de retornar el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook(()=> {
            useFetchGifs('one punch');
        });

        const {data, loading} = result.current;

        await waitForNextUpdate(); // To sotudy

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test.todo('Render de componet when the petition has ten lements');

})