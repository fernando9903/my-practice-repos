//Arrys
//const array = new Array(100);
//array.push(1);

const array = [1,2,3,4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

//It is not recomendable using .push to add elments inside of the array
//because we are mofing the object reference.
let array_2 = array;
array.push(5);
console.log(array);
console.log(array_2);
/*OUTPUT
(5) [1, 2, 3, 4, 5]
(5) [1, 2, 3, 4, 5]
*/

//The correct way to add new elements is with spred operator
array_2 = [...array_2, 6];
console.log(array);
console.log(array_2);
/*OUTPUT
(5) [1, 2, 3, 4, 5]
(6) [1, 2, 3, 4, 5, 6]
*/

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const array_3 = array_2.map(function (num) {
    return num * 2;
});

console.log(array_3);
/* OUTPUT
(6) [2, 4, 6, 8, 10, 12]
*/