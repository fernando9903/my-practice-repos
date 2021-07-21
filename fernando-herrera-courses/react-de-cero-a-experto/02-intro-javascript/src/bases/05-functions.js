//Funcitons
function sayHello(name){
    return `Hello, ${name}`;
}

console.log(sayHello('Goku'));
console.log(sayHello);
/**
 * OUTPUT
 * Hello, Goku
 * ƒ sayHello(name) {
 *  return `Hello, ${name}`;
 * }
 */

/**
 * With this assignment we got a warning, but no an error.
 * webpackHotDevClient.js:138 src\index.js
 * Line 16:1:  'sayHello' is a function  no-func-assign
 */
sayHello = 'Hola';

//console.log(sayHello('Goku')); Got an error
console.log(sayHello);
/**
 * OUTPUT
 * Hola
 */

/**
 * It is not recomended declare funcitons directly
 * because it is very esy change their reference like in the last
 * example one of the way that we can use to solve this issue is 
 * asign the fucntions to const variables.
 */

const sayHello_2 = function(name) {
    return `Hello, ${name}`;
}
console.log(sayHello_2('Fernando'));


const sayHello_3 = (name) => {
    return `Hello, ${name}`
}
const sayHello_4 = (name) => `Hello, ${name}`;
const sayHello_5 = () => `Hello world`;

const getActiveUser_1 = function(name) {
    return {
        uid: 'ABC123',
        name: name,
    }
} 

const getActiveUser_2 = (name) => {
    return {
        uid: 'ABC123',
        name: name,
    }
} 

const getActiveUser_3 = (name) => ({
    uid: 'ABC123',
    name: name,
}) 