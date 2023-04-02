const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid"); // npm i nanoid@3 -D (it's mean i install nanoid version 3 not current - 4)

const contactsPath = path.join(__dirname, "./db/contacts.json");

// how filepath works :
// __dirname is the current directory
// +
// path to the file that notted in 2 arg.

async function readContacts() {
  const data = await fs.readFile(contactsPath, "utf8");

  const contactsList = JSON.parse(data); // from string to object

  return contactsList;
}

async function getAllContacts() {
  return await readContacts();
}

async function getContactById(contactID) {
  const contacts = await getAllContacts();

  const contact = contacts.find((contact) => contact.id === contactID);

  return contact;
}

async function updateContacts(contacts) {
  return fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");
}

async function addContact(contact) {
  const contacts = await readContacts();

  const newContact = { ...contact, id: nanoid(10) };

  contacts.push(newContact);

  await updateContacts(contacts);
  return newContact;
}

async function removeContact(contactID) {
  const contacts = await readContacts();
  const index = contacts.findIndex((contact) => contact.id === contactID);

  console.log(index);
  if (index === -1) throw new Error("Contact not found");

  const removedContact = contacts.splice(index, 1);

  await updateContacts(contacts);

  return removedContact;
}

module.exports = {
  getAllContacts,
  addContact,
  updateContacts,
  getContactById,
  removeContact,
};
