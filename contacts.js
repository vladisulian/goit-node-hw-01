const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  //? how filepath works :
  //? __dirname is the current directory
  //? +
  //? path to the file that notted in 2 arg.

  const data = await fs.readFile(contactsPath, "utf8");

  console.log("typeof data ===>", typeof data); // it's an object
  return JSON.parse(data);
}

function addContact(contacts) {
  return fs.writeFile(contactsPath, JSON.stringify(contacts), "utf-8");
}

async function getContactById(contactId) {
  const contacts = await listContacts();

  const contact = contacts.find((contact) => contact.id === contactId);

  return contact;
}

module.exports = { listContacts, addContact, getContactById };
