// import chalk from "chalk";
const contacts = require("./contacts");

contacts.getAllContacts().then(console.log).catch(console.error);

// getContactById("qdggE76Jtbfd9eWJHrssH").then(console.log).catch(console.error);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "getAll":
      const allContacts = contacts.getAllContacts;
      console.log(allContacts);

      break;

    case "getById":
      const contact = await contacts.getById(id);
      console.log(contact);

      break;

    case "addContact":
      const newContact = await contacts.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);

      break;

    case "updateContact":
      const updatedContact = await contacts.updateContact(id, {
        name,
        email,
        phone,
      });

      break;

    default:
      console.warn(chalk.red("Unknown action type!"));
      break;
  }
}
