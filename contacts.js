const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid"); //? npm i nanoid@3 -D (it's mean i install nanoid version 3 not current - 4)

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function getAllContacts() {
  //? how filepath works :
  //? __dirname is the current directory
  //? +
  //? path to the file that notted in 2 arg.

  const data = await fs.readFile(contactsPath, "utf8");

  console.log("typeof data ===>", typeof JSON.parse(data)); // it's an object
  return JSON.parse(data);
}

async function getContactById(contactID) {
  const contacts = await getAllContacts();

  const contact = contacts.find((contact) => contact.id === contactID);

  return contact;
}

async function updateContact(id, updatedData) {
  try {
    const data = await fs.readFile("contacts.json", "utf-8");

    const contacts = JSON.parse(data);

    const index = contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      contacts[index] = { ...contacts[index], ...updatedData };
    } else {
      throw new Error(`Contact with id ${id} not found`);
    }

    await fs.writeFile("contacts.json", JSON.stringify(contacts, null, 2));

    console.log(`Contact with id ${id} updated successfully`);
  } catch (error) {
    console.error("Failed to update contact:", error);
  }
}

async function addContact(name, email, phone) {
  const contacts = await getAllContacts();

  const newContact = { name, email, phone, id: nanoid(10) };

  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
}

async function removeContact(contactID) {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((contact) => contact.id === contactID);

  if (index === -1) throw new Error("Contact not found");

  contacts.splice(index, 1);
}

module.exports = {
  getAllContacts,
  addContact,
  updateContact,
  getContactById,
  removeContact,
};
