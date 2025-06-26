import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  const arrContacts = contacts.map((item) => item.name);
  return arrContacts;
};

console.log(await getAllContacts());
