const contacts = require("./contacts");

// contacts.getAllContacts().then(console.log).catch(console.error);
// contacts.getContactById("qdggE76Jtbfd9eWJHrssH").then(console.log).catch(console.error);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "getAll":
      const allContacts = await contacts.getAllContacts();
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
      console.log("newContact ==>", newContact);
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

const actionIndex = process.argv.indexOf("--action");

if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  const id = process.argv[actionIndex + 2];
  const name = process.argv[actionIndex + 3];
  const email = process.argv[actionIndex + 4];
  const phone = process.argv[actionIndex + 5];

  invokeAction({ action, id, name, email, phone });
}

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });

// contacts.getAllContacts();
