const fs = require('fs');
const yargs = require('yargs');

const directory = require('./directory.js');

var args = yargs.argv;
var command = args._[0];

if (command == 'add') {
    var contact = directory.addContact(args.name, args.number);
    if (contact) {
        console.log("Contact added");
        console.log(`name : ${contact.name}`);
        console.log(`number : ${contact.number}`);
    } else {
        console.log('Contact already exists!');
    }
}
