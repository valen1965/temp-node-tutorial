// modules

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
console.log(data);
sayHi(names.peter);
sayHi(names.john);
sayHi('susan');
sayHi(data.singlePerson.name);
