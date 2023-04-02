const contacts = require("./contacts");

// contacts.getAllContacts().then(console.log).catch(console.error);
// contacts.getContactById("qdggE76Jtbfd9eWJHrssH").then(console.log).catch(console.error);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "getAll":
      const allContacts = await contacts.getAllContacts();
      console.log("\u001b[34m", "All contacts below:");
      console.log(allContacts);
      break;

    case "getById":
      const contact = await contacts.getContactById(id);
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
      console.log(updatedContact);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
}

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });

// contacts.getAllContacts();
