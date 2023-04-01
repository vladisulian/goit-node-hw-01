const { listContacts, addContact, getContactById } = require("./contacts");

listContacts().then(console.log).catch(console.error);

// getContactById("qdggE76Jtbfd9eWJHrssH").then(console.log).catch(console.error);
