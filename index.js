const { listContacts } = require("./contacts");

listContacts().then(console.log).catch(console.error);
