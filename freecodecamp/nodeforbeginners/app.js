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

// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output: process.stdout,
// });

// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);

// let answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2} ? `, (userInput) => {
//     console.log(userInput);
// })

const fs = require('fs');
//create a file
// fs.writeFile('example.txt', "This is an example", (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('file successfuly created!')
//         fs.readFile('example.txt', 'utf-8',(err, file) => {
//             if(err) {
//                 console.log('error leyendo');
//             } else {
//                 console.log(file);
//             }
//         });
//     }
// });


//Rename the file
// fs.rename('example.txt', 'exampleRename.txt', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('renombrado!')
//     }
// })

// fs.appendFile('exampleRename.txt', 'some data beging appended', (err) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('Successfully appended data to the file')
//     }
// })

// fs.unlink('exampleRename.txt', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Eliminado correctamente!")
//     }
// })