const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  //? how filepath works :
  //? __dirname is the current directory
  //? +
  //? path to the file that notted in 2 arg.

  const data = await fs.readFile(contactsPath, "utf8");

  console.log("typeof data ===>", typeof data);
  return JSON.parse(data);
}

function getContactById(contactId) {}

module.exports = { listContacts, getContactById };
