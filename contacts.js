const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid"); //? npm i nanoid@3 -D (it's mean i install nanoid version 3 (not current, 4))

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

async function getContactById(contactID) {
  const contacts = await listContacts();

  const contact = contacts.find((contact) => contact.id === contactID);

  return contact;
}

async function updateContacts(contacts) {
  return fs.appendFile(contactsPath, JSON.stringify(contacts));
}

async function addContact(contact) {
  const contacts = await listContacts();

  const newContact = { ...contact, id: nanoid(10) };

  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
}

async function removeContact(contactID) {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactID);

  if (index === -1) throw new Error("Contact not found");

  contacts.splice(index, 1);
}

module.exports = { listContacts, addContact, getContactById, removeContact };
