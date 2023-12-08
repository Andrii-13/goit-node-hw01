import * as contactsService from "./contacts.js";
import { program } from "commander";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const getContacts = await contactsService.listContacts();
      return console.log(getContacts);
    case "get":
      const contact = await contactsService.getContactById(id);
      return console.log(contact);

    case "add":
      const addContact = await contactsService.addContact(name, email, phone);
      return console.log(addContact);

      case "remove":
        const removeContact = await contactsService.removeContact(id);
        return console.log(removeContact);
    default:
        console.warn('\x1B[31m Unknown action type!');
      break;
  }
}

program
  .option("-a, --action <type>", "choose action") // дає можливість з командної строки отримати команду після якої йде значення
  .option("-i, --id <type>") // program дозволяє записувати коротку форму -і
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse(); //знаходить глобальний масив process.args і перетворює на обєкт

const options = program.opts(); // для отримання цього обєкту. приклад: { action: 'list' }

invokeAction(options);
