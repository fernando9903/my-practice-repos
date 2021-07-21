//https://developer.mozilla.org/es/docs/orphaned/Web/JavaScript/Reference/Operators/Destructuring_assignment
//Destructuring assignament

const person = {
    person_name: 'Fernando',
    person_age: 22,
    person_sex: 'Male',
}

let { person_name } = person;
console.log(person_name)

const getPerson = ({person_age, person_name, person_sex = 'Famele', person_stat = 1.7, anything_else}) => {
    console.log(person_name, person_age, person_sex, person_stat, anything_else);
}

getPerson(person);
/**
 * OUTPUT
 * Fernando 22 Male 1.7 undefined
 */


//I NEED TO STUDY ABOUT THIS WHY IT DOSE NOT WORKS
// const useContext = () => {
//     return {
//         husband: 'Fernando',
//         wife: 'Fernanda',
//         children: {
//             daugther: 'Maria',
//             son: 'Edd',
//         }
//     }
// }

// const {husband, wife, children:{daugther, son}} = useContext();
// console.log(husband, wife);