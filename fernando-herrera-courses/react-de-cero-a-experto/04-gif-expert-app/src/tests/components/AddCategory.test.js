import { shallow } from "enzyme";
import { AddCategory } from "./../../components/AddCategory";

describe('Tests on the AddCategory component', () => {
    
    const setCategory = () => {}
    const wraper = shallow(<AddCategory setCategories = {setCategory}/>);

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
})