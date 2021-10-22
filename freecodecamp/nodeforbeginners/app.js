// const modulo = require('./modules/firstModule');
// modulo.saluda('Fernando');
// console.log(modulo);


// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// eventEmitter.on ('tutorial', (num1, num2) => {
//     console.log('Event tutorial has been ocurred!')
//     console.log(num1 + num2);
// })
// eventEmitter.emit('tutorial', 1, 2);
// class Person extends EventEmitter {
//     constructor (name) {
//         super();
//         this._name = name;
//     }

//     printName = () => {
//         console.log(`Hi, my name is ${this._name}`);
//     }

// }
// const fernando = new Person('Fernando');
// fernando.on ('name', () => {
//     fernando.printName();
// })
// fernando.emit('name');

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2} ? `, (userInput) => {
    console.log(userInput);
})

