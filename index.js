const { readContacts } = require("./contacts");

readContacts().then(console.log).catch(console.error);
