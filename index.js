const contacts = require("./contacts");
const { program } = require("commander");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "getAll":
      const allContacts = await contacts.getAllContacts();
      console.table(allContacts);
      break;

    case "getById":
      const contact = await contacts.getContactById(id);
      console.table(contact);

      break;

    case "addContact":
      const newContact = await contacts.addContact({
        name,
        email,
        phone,
      });
      console.log("newContact ==>", newContact);
      break;

    case "removeContact":
      const removedContact = await contacts.removeContact(id);
      console.log(
        "This contact has been removed from the db ==> ",
        removedContact
      );
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
}

program
  .option("-a, --action <action>", "Action to perform")
  .option("-id, --id <id>", "Id of the contact")
  .option("-n, --name <name>", "Contact name")
  .option("-m, --email <email>", "Contact email")
  .option("-p, --phone <phone>", "Contact phone");

program.parse(process.argv);

const options = program.opts();

invokeAction(options);
