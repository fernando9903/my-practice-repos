//documentation
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

/**
 * If i want to use the heroes data It is neccesary that 
 * the heroes file contain an array export of heroes.
 */
import anything_else, {namesArray}  from '../data/heroes';

console.log(anything_else);

// const getHeroeById = (id) => {
//     return heroes.find( (element) => {
//         if(element.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// } The below code is more simple with the same result

const getHeroeById = (id) => {
    return anything_else.find( (element) => element.id === id);
}

console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => {
    return anything_else.filter( (element) => {
        return element.owner === owner;
    })
}

console.log(getHeroeByOwner('DC'));
console.log(namesArray);