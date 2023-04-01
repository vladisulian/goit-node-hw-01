const fs = require("fs/promises");
const path = require("path");

const contactPath = "./db/contacts.json";

function listContacts() {
  const filePath = path.join(__dirname, contactPath);

  //? how filepath works :
  //? __dirname is the current directory
  //? +
  //? path to the file that notted in 2 arg.

  const data = fs.readFile(filePath, "utf8");

  return data;
}

module.exports = { readContacts: listContacts, listContacts };
