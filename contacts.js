const fs = require("fs/promises");
const path = require("path");

async function readContacts() {
  const filePath = path.join(__dirname, "/db/contacts.json");

  console.log("filePath ==>", filePath);
  const data = await fs.readFile(filePath, "utf8");

  return data;
}

module.exports = { readContacts };
