const names = require('./names')
console.log(names);

const hobbies = require('./hobbies')
console.log(hobbies);

function person() {
    const name = names('Mario', 'Rossi')
    const hobbies = hobbies['scherma','lettura','videogiochi']
    return {
        first_name: name.first_name,
        last_name: name.last_name,
        hobbies: hobbies.hobbies

    }
} console.log(person);
