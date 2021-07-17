// Variables and constants

//If i never going to change the value of a
//some variable we need to use a constat to make me sure
//that the value will be the same all time.
const first_name = 'Fernando';

//Standar variables
let last_name = 'Parra';
console.log( first_name, last_name);

let side_dice = 5;
let side_dice_2 = 6;

console.log(side_dice, side_dice_2);

/*
We can have more that one let variblaes with the same name
into our codes, but the key for this works is that these variables
need to be in diferent scopes.
Example.
*/

let country_taxes = .16;
const country_name = 'Mexico';

if(true){
    let country_taxes = .20;
    const country_name = 'USA';

    console.log(`The taxes in ${country_name} are ${country_taxes}`);
}

//The next impresion will be different because is in a diferent scope code
console.log(`The taxes in ${country_name} are ${country_taxes}`);


