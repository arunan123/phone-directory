/**
 * Created by arunanramanathan on 22/03/17.
 */
const fs = require('fs');

var fetchContacts = () => {
    try {
        var contacts = fs.readFileSync('./file-store/contacts.json');
        return JSON.parse(contacts);
    } catch (error) {
        return [];
    }
};

var saveContacts = (contacts) => {
    fs.writeFileSync('./file-store/contacts.json', JSON.stringify(contacts));
};

var addContact = (name, number) => {
    var contacts = fetchContacts();
    var isAlreadyStoredContact = contacts.filter((contact) => {
       return contact.name == name;
    });

    if (isAlreadyStoredContact.length == 0) {
        var contact = {
            name,
            number
        };
        contacts.push(contact);
        saveContacts(contacts);
        return contact;
    }
};

module.exports = {
    addContact
}