const person = {
    //key: value,
    name: 'Fernando',
    last_name: 'Parra',
    edad: 22,
    direccion: {
        city: 'Tokyo',
        country: 'Japan',
    },
}

//We have many diferent forms to print an literal object in console
console.log( person );
//console.log( {person} );
//console.table(person);

/*
If we want to make a copy of an exiting object
we can have some diferent situations, there are no errors It's
only how Js works
*/

//Here we are asigining the same reference of the object person
//to person_2, therefore, when we want to change some atribute from
//any of these objects we are changing the global reference nad they
//will have the same value.
const person_2 = person

person.name = 'Fernanda';
console.log(person);
console.log(person_2);

//This is the correct way to only copy the values into another object
//We need to make capy value per value, but, dont worry, the spred operator
//can help us.

const right_copy_person = {...person};
right_copy_person.name = 'Fernando';
console.log(person);
console.log(right_copy_person);