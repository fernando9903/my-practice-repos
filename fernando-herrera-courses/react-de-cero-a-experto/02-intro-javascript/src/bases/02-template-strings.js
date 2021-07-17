const first_name = 'Fernando';
const last_name = 'Parra';

/*
With template string of javascript we can have more posibilities
to make or own custom string, for example, we can add javascript code with ${ <javascript code> }
into this tamplete scripts and the results of this javascripts code becomes as a part of the finall string result
*/

//const full_name = first_name + ' ' + last_name;
const full_name = `${first_name} ${last_name}`;

console.log(full_name);
console.log(`The result of 1 + 2 is ${1 + 2}`);

function sayHello(name){
    return `Hello ${name}`;
}

console.log(`The reuslt of say hello is: ${sayHello('Fernando')}`);