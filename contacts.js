// const fs = require("fs/promises");
// const path = require("path");
import fs from "fs/promises";

// const contactsPath = path.join(__dirname, "db", "contacts.json");
const contactsPath = "./db/contacts.json";

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find(contact => contact.id === contactId);
//   console.log(contact || null);
  return contact || null;
}

async function removeContact(contactId) {
  const contact = await getContactById(contactId);
  
}

removeContact('e6ywwRe4jcqxXfCZOj_1');

// console.log(listContacts());
