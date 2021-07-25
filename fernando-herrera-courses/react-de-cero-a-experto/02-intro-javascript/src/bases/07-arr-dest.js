

const characters = ['Goku', 'Vegeta', 'Trunks'];

console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);
console.log(characters[3]);
/**
 * OUTPUT
 * Goku
 * Vegeta
 * Trunks
 * undefined
 */

const [p1] = characters;
console.log(p1);
/**
 * OUTUT
 * Goku
 */
const [ ,p2] = characters;
console.log(p2);
/**
 * OUTUT
 * Vegeta
 */
const [ , ,p3] = characters;
console.log(p3);
/**
 * OUTUT
 * Trunks
 */
const [ , , ,p4] = characters;
console.log(p4);
/**
 * OUTUT
 * undefined
 */

const arrayReturn = () => {
    return ['ABC', 123];
}

const [letras, numeros] = arrayReturn();
console.log(numeros, letras);
/**
 * OUTUT
 * 123 "ABC"
 */


//Task
/**
 * 1. the first value name is going to be name
 * 2. the second is going to be setNombre
 

const useState = (valor) => {
    return [valor, () => {console.log("Hola mundo")}];
}

const arr = useState( 'Goku' );
*/